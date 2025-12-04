import { useEffect, useState } from "react";
import * as FaqService from "../Services/faqService";
import type { FAQItem } from "../components/FAQ/Faq";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "@clerk/clerk-react";

export const useFAQ = () => {
  const { isSignedIn } = useAuth();
  const { getToken } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [faqData, setFaqData] = useState<FAQItem[]>([]);
  const [faq, setFaq] = useState<FAQItem>({ id: 0, question: "", answer: "" });
  const [errors, setErrors] = useState<Map<string, string>>(new Map());
  useEffect(() => {
    const fetchData = async () => {
      const data = await FaqService.fetchFaq();
      setFaqData(data);
    };
    fetchData();
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    mode: "create" | "edit",
    id: number | string | undefined
  ) => {
    e.preventDefault();
    const validationErrors = await FaqService.ValidateFaq(faq);
    setErrors(validationErrors);
    if (validationErrors.size === 0) {
      if (mode === "create") {
        const newFAQ = {
          question: faq.question,
          answer: faq.answer,
        };
        addFAQ(newFAQ);
      }
      if (mode === "edit" && id !== undefined) {
        editFAQ({
          id,
          question: faq.question,
          answer: faq.answer,
        });
      }
      toast.success(
        `FAQ ${mode == "create" ? "Created" : "Updated"} successfully!`
      );
    }
  };
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addFAQ = async (newFAQ: FAQItem) => {
    const token = await getToken();
    const res = await FaqService.createFaq(newFAQ, token);
    setFaqData((prev) => [...prev, res]);
    navigate("/faq");
  };

  const editFAQ = async (updatedFAQ: FAQItem) => {
    const token = await getToken();
    const res = await FaqService.updateFaq(updatedFAQ, token);
    setFaqData((prev) => prev.map((faq) => (faq.id === res.id ? res : faq)));
    navigate("/faq");
  };

  const deleteFAQ = async (id: number | string) => {
    const token = await getToken();
    await FaqService.deleteFaq(id, token);
    setFaqData((prev) => prev.filter((faq) => faq.id !== id));
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredFAQs,
    addFAQ,
    editFAQ,
    deleteFAQ,
    handleChange,
    handleSubmit,
    errors,
    setFaq,
    faq,
    faqData,
    setFaqData,
    isSignedIn,
  };
};
