import { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaComments,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const faqs = [
  {
    question: "How do I generate a Payslip?",
    answer:
      "Go to Generate Payslip, fill in employee salary details and click Generate.",
  },
  {
    question: "Can I download payslips as PDF?",
    answer:
      "Yes. Every generated payslip can be downloaded as a PDF with one click.",
  },
  {
    question: "Can I edit employee details later?",
    answer:
      "Yes. Open Dashboard → Employee Profile and update the information.",
  },
  {
    question: "Does PayGen calculate PF & ESI automatically?",
    answer:
      "Yes. It automatically calculates deductions based on your settings.",
  },
  {
    question: "Can I generate payslips for multiple employees?",
    answer:
      "Yes. Starter and Pro plans support multiple employee management.",
  },
  {
    question: "How do I contact support?",
    answer:
      "You can contact us through Email, Phone or Live Chat.",
  },
];

function Help() {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="bg-gray-50 min-h-screen py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold">
          Help & Support
        </h2>

        <p className="text-gray-500 mt-2 mb-12">
          Find answers to common questions and get support.
        </p>

        {/* Support Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Email */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-blue-500 flex items-center justify-center">
              <FaEnvelope className="text-blue-500 text-3xl" />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Email Support
            </h3>

            <p className="text-gray-500 mt-2">
              Get help via email
            </p>

            <p className="text-blue-600 mt-3 font-medium">
              support@paygen.com
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-green-500 flex items-center justify-center">
              <FaPhoneAlt className="text-green-500 text-3xl" />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Phone Support
            </h3>

            <p className="text-gray-500 mt-2">
              Get help via phone
            </p>

            <p className="text-green-600 mt-3 font-medium">
              +91 9098654649
            </p>
          </div>

          {/* Chat */}
          <div className="bg-white rounded-xl shadow-md p-8 text-center hover:shadow-xl transition">
            <div className="w-20 h-20 mx-auto rounded-full border-2 border-yellow-500 flex items-center justify-center">
              <FaComments className="text-yellow-500 text-3xl" />
            </div>

            <h3 className="font-bold text-xl mt-5">
              Chat Support
            </h3>

            <p className="text-gray-500 mt-2">
              Chat with our support team
            </p>

            <button className="text-yellow-600 mt-3 font-semibold hover:underline">
              Start Chat
            </button>
          </div>

        </div>

        {/* FAQ */}
        <div className="bg-white rounded-xl shadow-md mt-16 overflow-hidden">

          <div className="bg-blue-100 p-6 flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-700"></div>

            <h3 className="text-2xl font-bold">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="p-6">

            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-center py-6 text-left"
                >
                  <span className="text-lg font-medium">
                    {faq.question}
                  </span>

                  {open === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </button>

                {open === index && (
                  <p className="pb-6 text-gray-600">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Help;