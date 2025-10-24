import type { FAQItem } from "../FAQ/Faq";
import * as faqRepo from "../Repo/faqRepo"; 

export async function fetchFaq() {
  const faq = await faqRepo.getFAQ();
  return faq;
}

export async function createFaq(faq: FAQItem) {
  return await faqRepo.createFAQ(faq);
}

export async function updateFaq(faq: FAQItem) {
  return await faqRepo.updateFaq(faq);
}

export async function deleteFaq(id: string | number) {
  return await faqRepo.deleteFaq(id);
}

export async function ValidateFaq(faq: FAQItem) {
  const validationErrors = new Map<string, string>();
  const faqData = await faqRepo.getFAQ();
  if (faq.question?.trim().length < 3)
    validationErrors.set(
      "question",
      "Question must be at least 3 characters long"
    );
  if (faq.answer?.trim().length < 3)
    validationErrors.set("answer", "Answer must be at least 3 characters long");

  const isDuplicate = faqData.find(
    (item) =>
      item.question.trim().toLowerCase() ===
        faq.question.trim().toLowerCase() && item.id !== faq.id
  );
  if (isDuplicate) {
    validationErrors.set("question", "This question already exists");
  }
  return validationErrors;
}