// src/components/FAQ.jsx
import { faqData } from "../data/faqQandAns";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="space-y-6">
        {faqData.map((faq) => (
          <div 
            className="p-5 rounded-2xl shadow-md bg-white border border-gray-200"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-600">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
