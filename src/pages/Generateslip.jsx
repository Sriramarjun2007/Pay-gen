import { useState } from "react";

export default function PayslipForm() {
  // Employee Details
  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [designation, setDesignation] = useState("");

  // Pay Period
  const [department, setDepartment] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  // Earnings
  const [basicPay, setBasicPay] = useState("");
  const [hra, setHra] = useState("");
  const [allowances, setAllowances] = useState("");
  const [bonus, setBonus] = useState("");

  // Deductions
  const [pf, setPf] = useState("");
  const [professionalTax, setProfessionalTax] = useState("");
  const [otherDeductions, setOtherDeductions] = useState("");

  const inputStyle =
    "w-full rounded-full border border-gray-300 px-5 py-3.5 text-[15px] outline-none focus:border-gray-900";

  // Convert text values to numbers (empty input = 0)
  const gross =
    Number(basicPay || 0) +
    Number(hra || 0) +
    Number(allowances || 0) +
    Number(bonus || 0);

  const totalDeductions =
    Number(pf || 0) +
    Number(professionalTax || 0) +
    Number(otherDeductions || 0);

  const netPay = gross - totalDeductions;

  // Controls whether the Overview panel is visible
  const [showOverview, setShowOverview] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="mx-auto max-w-2xl flex flex-col gap-6">

        {/* Employee Details */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold mb-6">Employee Details</h2>

          <label className="block mb-2 text-[15px]">Employee Name</label>
          <input
            type="text"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            className={inputStyle + " mb-6"}
            required
          />

          <label className="block mb-2 text-[15px]">Employee ID</label>
          <input
            type="text"
            value={empId}
            onChange={(e) => setEmpId(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">Designation</label>
          <input
            type="text"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Pay Period */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <label className="block mb-2 text-[15px]">Department</label>
          <input
            type="text"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 text-[15px]">Month</label>
              <input
                type="text"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                placeholder="e.g. July"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block mb-2 text-[15px]">Year</label>
              <input
                type="number"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                placeholder="e.g. 2026"
                className={inputStyle}
              />
            </div>
          </div>
        </div>

        {/* Earnings */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold mb-6">Earnings</h2>

          <label className="block mb-2 text-[15px]">Basic pay ($)</label>
          <input
            type="number"
            value={basicPay}
            onChange={(e) => setBasicPay(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">HRA ($)</label>
          <input
            type="number"
            value={hra}
            onChange={(e) => setHra(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">Allowances ($)</label>
          <input
            type="number"
            value={allowances}
            onChange={(e) => setAllowances(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">Bonus (Optional) ($)</label>
          <input
            type="number"
            value={bonus}
            onChange={(e) => setBonus(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Deductions */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold mb-6">Deductions</h2>

          <label className="block mb-2 text-[15px]">Provident Fund (PF) ($)</label>
          <input
            type="number"
            value={pf}
            onChange={(e) => setPf(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">Professional Tax ($)</label>
          <input
            type="number"
            value={professionalTax}
            onChange={(e) => setProfessionalTax(e.target.value)}
            className={inputStyle + " mb-6"}
          />

          <label className="block mb-2 text-[15px]">Other Deductions ($)</label>
          <input
            type="number"
            value={otherDeductions}
            onChange={(e) => setOtherDeductions(e.target.value)}
            className={inputStyle}
          />
        </div>

        {/* Overview button */}
        <button
          onClick={() => setShowOverview(!showOverview)}
          className="rounded-full border border-gray-300 bg-white text-[15px] font-medium py-4 hover:bg-gray-50"
        >
          {showOverview ? "Hide Overview" : "Overview"}
        </button>

        {/* Overview panel: only shows when showOverview is true */}
        {showOverview && (
          <div className="rounded-3xl border border-gray-200 bg-white p-8">
            <h2 className="text-xl font-semibold mb-6">Overview</h2>

            <h3 className="text-sm font-semibold text-gray-500 mb-3">Employee Details</h3>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Employee Name</span>
              <span className="font-medium">{empName || "—"}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Employee ID</span>
              <span className="font-medium">{empId || "—"}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-6">
              <span className="text-gray-600">Designation</span>
              <span className="font-medium">{designation || "—"}</span>
            </div>

            <h3 className="text-sm font-semibold text-gray-500 mb-3">Pay Period</h3>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Department</span>
              <span className="font-medium">{department || "—"}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-6">
              <span className="text-gray-600">Month / Year</span>
              <span className="font-medium">{month || "—"} {year || ""}</span>
            </div>

            <h3 className="text-sm font-semibold text-gray-500 mb-3">Earnings</h3>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Basic Pay</span>
              <span className="font-medium">${Number(basicPay || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">HRA</span>
              <span className="font-medium">${Number(hra || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Allowances</span>
              <span className="font-medium">${Number(allowances || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-6">
              <span className="text-gray-600">Bonus</span>
              <span className="font-medium">${Number(bonus || 0).toFixed(2)}</span>
            </div>

            <h3 className="text-sm font-semibold text-gray-500 mb-3">Deductions</h3>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Provident Fund (PF)</span>
              <span className="font-medium">${Number(pf || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-2">
              <span className="text-gray-600">Professional Tax</span>
              <span className="font-medium">${Number(professionalTax || 0).toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-6">
              <span className="text-gray-600">Other Deductions</span>
              <span className="font-medium">${Number(otherDeductions || 0).toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-[15px] mb-3 border-t border-gray-200 pt-4">
              <span className="text-gray-600">Gross Earnings</span>
              <span className="font-medium">${gross.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-[15px] mb-3">
              <span className="text-gray-600">Total Deductions</span>
              <span className="font-medium">-${totalDeductions.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-semibold border-t border-gray-200 pt-4 mt-2">
              <span>Net Pay</span>
              <span>${netPay.toFixed(2)}</span>
            </div>
          </div>
        )}

        <button className="rounded-full bg-gray-900 text-white text-[15px] font-medium py-4 hover:bg-gray-800">
          Generate Payslip
        </button>

      </div>
    </div>
  );
}