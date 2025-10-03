import { useState } from "react";
import Ans from "./Ans";
import { faqData } from "../../data/faqQandAns";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter FAQs based on search term
  const filteredFAQs = faqData.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <input
        type="text"
        placeholder="Search questions..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border rounded mb-4 w-full"
      />

      <div className="space-y-6">
        {filteredFAQs.length > 0 ? (
          filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="p-5 rounded-2xl shadow-md bg-white border border-gray-200"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <Ans answer={faq.answer} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No matching questions found.
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQ;