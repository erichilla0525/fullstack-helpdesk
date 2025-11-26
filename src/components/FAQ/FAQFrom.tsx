import { useEffect } from "react";
import { useFAQ } from "../../Hooks/useFaq";
import { useHover } from "../../Hooks/hoverHook";
interface FAQFormProps {
  id?: number | string | undefined;
  mode: "create" | "edit";
}
const FAQForm = ({ id, mode }: FAQFormProps) => {
  const hoverStatus = useHover();
  const { errors, handleSubmit, handleChange, setFaq, faq, faqData } = useFAQ();
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
  }, [mode, id, faqData]);
  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">
        {mode === "create" ? "Create New FAQ" : "Edit FAQ"}
      </h2>
      <form onSubmit={(e) => handleSubmit(e, mode, id)} className="space-y-4">
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
          className={`w-full bg-blue-600 text-white font-medium py-2 rounded
            ${hoverStatus.isHovered ? "bg-pink-300" : "bg-lightGreen"} `}
        >
          {mode === "create" ? "Add FAQ" : "Update FAQ"}
        </button>
      </form>
    </div>
  );
};

export default FAQForm;
