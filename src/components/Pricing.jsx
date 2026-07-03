function Pricing() {
  const plans = [
    {
      title: "Free Starter",
      price: "₹0",
      duration: "/ month",
      bg: "bg-white",
      btn: "bg-blue-500 hover:bg-blue-600",
      features: [
        "Best for individuals & small startups",
        "Generate up to 5 payslips / month",
        "Basic salary breakdown",
        "PDF download",
        "Email support",
      ],
      button: "Go with Free",
    },
    {
      title: "Starter Plan",
      price: "₹499",
      duration: "/ month",
      bg: "bg-yellow-200",
      btn: "bg-amber-500 hover:bg-amber-600",
      features: [
        "Ideal for growing teams",
        "Generate up to 50 payslips / month",
        "Custom allowances & deductions",
        "Tax summary (TDS, PF, ESI)",
      ],
      button: "Choose Started",
    },
    {
      title: "Pro Plan",
      price: "₹999",
      duration: "/ month",
      bg: "bg-pink-500 text-white",
      btn: "bg-purple-800 hover:bg-purple-900",
      features: [
        "For businesses & HR teams",
        "Unlimited payslips",
        "Multi-employee management",
        "Company branding on payslips",
        "Bulk PDF download",
      ],
      button: "Go with Pro",
    },
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-16">
          Pricing
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`${plan.bg} rounded-xl shadow-lg p-8 flex flex-col items-center transition duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="text-3xl font-bold mb-5">
                {plan.title}
              </h3>

              <div className="mb-6">
                <span className="text-4xl font-bold">
                  {plan.price}
                </span>
                <span className="text-lg font-medium">
                  {plan.duration}
                </span>
              </div>

              <ul className="space-y-3 text-lg mb-10 text-center">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>

              <button
                className={`${plan.btn} text-white px-8 py-3 rounded-lg text-lg font-semibold transition`}
              >
                {plan.button}
              </button>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Pricing;