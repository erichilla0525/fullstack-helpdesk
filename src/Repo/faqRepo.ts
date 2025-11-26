import type { FAQItem } from "../components/FAQ/Faq";
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

export async function getFAQ() {
  const response = await fetch(`${BASE_URL}/faq`);
  if (!response.ok) {
    throw new Error("Failed to fetch faq");
  }
  const json = await response.json();
  return json.data;
}

export async function createFAQ(faq: FAQItem) {
  const createResponse: Response = await fetch(`${BASE_URL}/faq/create`, {
    method: "POST",
    body: JSON.stringify({ ...faq }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!createResponse.ok) {
    throw new Error(`Failed to create faq`);
  }

  const json = await createResponse.json();
  return json.data;
}
export async function deleteFaq(id: string | number) {
  const faqResponse: Response = await fetch(`${BASE_URL}/faq/delete/${id}`, {
    method: "DELETE",
  });

  if (!faqResponse.ok) {
    throw new Error(`Failed to delete with id ${id}`);
  }
}

export async function updateFaq(faq: FAQItem) {
  const updateResponse: Response = await fetch(
    `${BASE_URL}/faq/update/${faq.id}`,
    {
      method: "PUT",

      body: JSON.stringify({ ...faq }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!updateResponse.ok) {
    throw new Error(`Failed to update Role with id ${faq.id}`);
  }
  const json = await updateResponse.json();
  return json;
}
