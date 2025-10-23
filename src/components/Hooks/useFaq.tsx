import { useState } from "react";
import type { FAQItem } from "../components/FAQ/Faq";
import * as FaqService from "../services/faqService";
export const useFAQ = (
  faqData: FAQItem[],
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>
) => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const addFAQ = async (newFAQ: FAQItem) => {
    const res = await FaqService.createFaq(newFAQ);
    setFaqData(res);
  };

  const editFAQ = async (id: number, updatedFAQ: FAQItem) => {
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
  };
};
