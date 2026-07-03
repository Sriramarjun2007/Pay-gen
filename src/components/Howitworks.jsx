import step1 from "../assets/step1.png";
import step2 from "../assets/step2.png";
import step3 from "../assets/step3.png";
import step4 from "../assets/step4.png";
import step5 from "../assets/step5.png";

const steps = [
  {
    image: step1,
    title: "Create an Account",
    description:
      "Sign up for PayGenius and start managing your payroll efficiently.",
  },
  {
    image: step2,
    title: "Set Salary & Deductions",
    description:
      "Configure base salaries, allowances, and deductions for accurate payroll calculations.",
  },
  {
    image: step3,
    title: "Add Employee Details",
    description:
      "Input employee information including personal details and salary structure.",
  },
  {
    image: step4,
    title: "Generate Payslip",
    description:
      "Generate payslips automatically with all necessary calculations.",
  },
  {
    image: step5,
    title: "Download & Share",
    description:
      "Download payslips in PDF format and share them securely with employees.",
  },
];

function HowItWorks() {
  return (
    <section className="bg-white py-20 px-6 lg:px-16">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-gray-900">
          How It Works
        </h2>

        <p className="mt-6 text-xl text-gray-600 max-w-4xl">
          Learn how to streamline your payroll process with PayGenius in just a
          few simple steps.
        </p>

        {/* Sub Heading */}
        <h3 className="text-5xl font-bold text-gray-900 mt-24 mb-14">
          Get Started in 5 Easy Steps
        </h3>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-xl shadow-md">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <h4 className="mt-5 text-2xl font-bold text-gray-900">
                {step.title}
              </h4>

              <p className="mt-3 text-gray-600 leading-8 text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;