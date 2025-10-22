import React from "react";
import FAQForm from "./FAQFrom";
import type { FAQItem } from "./Faq";
interface FAQProps {
  faqData: FAQItem[];
  setFaqData: React.Dispatch<React.SetStateAction<FAQItem[]>>;
}

export const CreateFaq: React.FC<FAQProps> = ({ faqData, setFaqData }) => {
  return (
    <>
      <div>CreateFaq</div>;
      <FAQForm faqData={faqData} setFaqData={setFaqData} mode={"create"} />
    </>
  );
};
