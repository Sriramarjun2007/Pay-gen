import React from "react";
import { Calculator, FileText, FileDown, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Calculator,
    title: "Auto Salary Calculation",
    description: "Automatically calculate salaries based on employee data.",
  },
  {
    icon: FileText,
    title: "Tax & Deduction Breakdown",
    description: "Provide Detailed tax and deduction breakdowns",
  },
  {
    icon: FileDown,
    title: "Download PDF Payslip",
    description: "Easily download payslips in pdf format.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Employee Login",
    description: "Ensure secure access with employee login.",
  },
];

export default function Features() {
  return (
    <section className="border border-gray-200 rounded-xl p-10 bg-white m-25">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
        Features
      </h2>

      <div className="grid grid-cols-4 gap-5 ">
        {features.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-slate-50 border border-slate-100 rounded-xl p-5"
          >
            <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-blue-50 mb-4">
              <Icon className="w-6 h-6 text-blue-600" strokeWidth={2} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2 leading-snug">
              {title}
            </h3>
            <p className="text-gray-500 leading-relaxed text-xl">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}