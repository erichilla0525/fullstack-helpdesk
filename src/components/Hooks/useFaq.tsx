import type { FAQItem } from "../FAQ/Faq";

export const useFAQ = (
  faqData: FAQItem[],
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>
) => {
  const addFAQ = (newFAQ: FAQItem) => {
    setFaqData((prev) => [...prev, newFAQ]);
  };

  const editFAQ = (id: number, updatedFAQ: FAQItem) => {
    setFaqData((prev) =>
      prev.map((faq) => (faq.id === id ? { ...faq, ...updatedFAQ } : faq))
    );
  };

  const deleteFAQ = (id: number) => {
    setFaqData((prev) => prev.filter((faq) => faq.id !== id));
  };

  return { addFAQ, editFAQ, deleteFAQ };
};
