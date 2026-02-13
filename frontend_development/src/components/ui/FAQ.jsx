import { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const faqData = [
  {
    question: "What information do I need to provide when ordering?",
    answer:
      "Please provide your document file, preferred size, quantity, and any special instructions."
  },
  {
    question: "Do I need to pay upfront?",
    answer:
      "Yes, we require partial or full payment before processing large orders."
  },
  {
    question: "How long does it take to complete a printing job?",
    answer:
      "Standard jobs take 1–2 hours. Bulk orders may take longer."
  },
  {
    question: "What file formats do you accept for printing and scanning?",
    answer:
      "We accept PDF, DOCX, JPG, PNG, and other common formats."
  },
  {
    question:
      "Where can I find more information about your services and pricing?",
    answer:
      "You can find detailed information about our services and pricing on our website or by visiting our cafe."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-5 text-left font-medium text-gray-800 hover:bg-gray-50 transition"
            >
              <span>{item.question}</span>

              <ChevronDown
                className={`w-5 h-5 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === index
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-5 pt-0 text-gray-600 text-sm leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
