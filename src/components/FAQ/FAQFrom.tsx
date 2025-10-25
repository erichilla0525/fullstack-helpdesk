import { useEffect, useState } from "react";
import type { FAQItem } from "./Faq";
import { useFAQ } from "../Hooks/useFaq";
import { useNavigate } from "react-router-dom";
import * as FaqService from "../Services/faqService";
import { toast } from "react-toastify";
import { useHover } from "../Hooks/hoverHook";
interface FAQFormProps {
  id?: number | undefined;
  mode: "create" | "edit";
  faqData: FAQItem[];
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>;
}
const FAQForm = ({ id, faqData, setFaqData, mode }: FAQFormProps) => {
  const hoverStatus = useHover();
  const { addFAQ, editFAQ } = useFAQ(faqData, setFaqData);
  const [faq, setFaq] = useState<FAQItem>({ id: 0, question: "", answer: "" });
  const [errors, setErrors] = useState<Map<string, string>>(new Map());
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
  useEffect(() => {
    if (mode === "edit" && id !== undefined) {
      const existingFAQ = faqData.find((item) => item.id === id);
      if (existingFAQ) {
        setFaq({
          id: id,
          question: existingFAQ.question,
          answer: existingFAQ.answer,
        });
      }
    }
  }, [mode, id]);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {mode === "create" ? "Create New FAQ" : "Edit FAQ"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="question"
          placeholder="Enter your question"
          value={faq.question}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring"
        />
        {errors.get("question") && (
          <p className="text-red-500 text-sm">{errors.get("question")}</p>
        )}
        <textarea
          name="answer"
          placeholder="Enter your answer"
          value={faq.answer}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring"
          rows={4}
        />
        {errors.get("answer") && (
          <p className="text-red-500 text-sm">{errors.get("answer")}</p>
        )}
        <button
          type="submit"
          onMouseEnter={hoverStatus.onMouseEnter}
          onMouseLeave={hoverStatus.onMouseLeave}
          className= {`w-full bg-blue-600 text-white font-medium py-2 rounded
            ${hoverStatus.isHovered ? "bg-pink-300" : "bg-lightGreen"} `}
        >
          {mode === "create" ? "Add FAQ" : "Update FAQ"}
        </button>
      </form>
    </div>
  );
};

export default FAQForm;
