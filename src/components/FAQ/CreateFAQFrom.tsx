import { useState } from "react";
const CreateFAQForm = () => {
  const [faq, setFaq] = useState({ question: "", answer: "" });

  const handleChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(faq);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-center">Create FAQ</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="question"
          placeholder="Enter your question"
          value={faq.question}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring"
        />
        <textarea
          name="answer"
          placeholder="Enter your answer"
          value={faq.answer}
          onChange={handleChange}
          className="w-full border p-2 rounded focus:outline-none focus:ring"
          rows={4}
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-medium py-2 rounded hover:bg-blue-700 transition"
        >
          Add FAQ
        </button>
      </form>
    </div>
  );
};

export default CreateFAQForm;
