import { useState } from "react";
import * as FaqService from "../Services/faqService";
import type { FAQItem } from "../FAQ/Faq";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useFAQ = (
  faqData: FAQItem[],
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [faq, setFaq] = useState<FAQItem>({ id: 0, question: "", answer: "" });
  const [errors, setErrors] = useState<Map<string, string>>(new Map());
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    mode: "create" | "edit",
    id: number | undefined
  ) => {
    e.preventDefault();
    const validationErrors = await FaqService.ValidateFaq(faq);
    setErrors(validationErrors);
    if (validationErrors.size === 0) {
      if (mode === "create") {
        const newFAQ = {
          id: faqData.length + 1,
          question: faq.question,
          answer: faq.answer,
        };
        addFAQ(newFAQ);
      }
      if (mode === "edit" && id !== undefined) {
        editFAQ({ id, question: faq.question, answer: faq.answer });
      }
      toast.success(
        `FAQ ${mode == "create" ? "Created" : "Updated"} successfully!`
      );
      navigate("/faq");
    }
  };
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addFAQ = async (newFAQ: FAQItem) => {
    const res = await FaqService.createFaq(newFAQ);
    setFaqData(res);
  };

  const editFAQ = async (updatedFAQ: FAQItem) => {
    const res = await FaqService.updateFaq(updatedFAQ);
    setFaqData(res);
  };

  const deleteFAQ = async (id: number) => {
    await FaqService.deleteFaq(id);
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
  };
};
