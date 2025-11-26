import Ans from "./Ans";
import { Link, useNavigate } from "react-router-dom";
import { Edit, Trash2 } from "lucide-react";
import { useFAQ } from "../../Hooks/useFaq";
import { toast } from "react-toastify";
export interface FAQItem {
  id?: number | string;
  question: string;
  answer: string;
}

const FAQ = () => {
  const { searchTerm, setSearchTerm, deleteFAQ, filteredFAQs } = useFAQ();

  const navigate = useNavigate();
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Search questions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded-md mb-4 w-[70%] focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Link to="/createFaq">
          <button className="mb-4 px-5 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg">
            Add FAQ
          </button>
        </Link>
      </div>

      <div className="space-y-6">
        {filteredFAQs.length > 0 ? (
          <>
            {filteredFAQs.map((faq, index) => (
              <div
                key={index}
                className="p-5 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-800 max-w-[85%]">
                    {faq.question}
                  </h3>

                  <div className="flex gap-3">
                    <button
                      onClick={() => navigate(`/editFaq/${faq.id}`)}
                      className="p-2 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                      title="Edit FAQ"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (faq.id !== undefined) deleteFAQ(faq?.id);
                        toast.success("FAQ deleted successfully!");
                      }}
                      className="p-2 rounded-full bg-red-50 hover:bg-red-100 text-red-600 transition-colors"
                      title="Delete FAQ"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <Ans answer={faq.answer} />
              </div>
            ))}
          </>
        ) : (
          <p className="text-center text-gray-500">
            No matching questions found.
          </p>
        )}
      </div>
    </section>
  );
};

export default FAQ;
