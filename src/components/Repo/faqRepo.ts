import type { FAQItem } from "../components/FAQ/Faq";
import { faqData } from "../data/faqQandAns";

export function getFAQ() {
  return faqData;
}

export async function createFAQ(faq: FAQItem) {
  const nextId =
    faqData.length > 0 ? Math.max(...faqData.map((f) => f.id)) + 1 : 1;

  faqData.push({
    id: faq.id ?? nextId,
    question: faq.question,
    answer: faq.answer,
  });
  return faqData;
}
export async function deleteFaq(id: string | number) {
  const index = faqData.findIndex((t) => t.id == id);
  if (index > -1) {
    faqData.splice(index, 1);
  }
  return faqData;
}

export async function updateFaq(faq: FAQItem) {
  const foundFaqIndex = faqData.findIndex((t) => t.id == faq.id);

  if (foundFaqIndex === -1) {
    throw new Error(`Failed to update faq with ${faq.id}`);
  }
  faqData[foundFaqIndex] = {
    id: faq.id ?? faqData[foundFaqIndex].id,
    question: faq.question,
    answer: faq.answer,
  };
  return faqData;
}
