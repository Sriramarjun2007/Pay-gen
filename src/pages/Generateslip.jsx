import { useState } from "react";
import { createPortal } from "react-dom";

// Company details shown on the payslip header — edit these for your business
const COMPANY_NAME = "Pay Gen";
const COMPANY_ADDRESS = "132, Business street, suite 100";

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

  // Shows a message if the user tries to preview with empty fields
  const [errorMsg, setErrorMsg] = useState("");

  // True only when every field has a value
  const allFilled =
    empName &&
    empId &&
    designation &&
    department &&
    month &&
    year &&
    basicPay &&
    hra &&
    allowances &&
    pf &&
    professionalTax &&
    otherDeductions;
  // Note: bonus is optional, so it's not required here

  function handlePreviewClick() {
    if (allFilled) {
      setErrorMsg("");
      setShowOverview(true);
    } else {
      setErrorMsg("Please fill in all fields before viewing the preview.");
      setShowOverview(false);
    }
  }

  function handleReset() {
    setEmpName("");
    setEmpId("");
    setDesignation("");
    setDepartment("");
    setMonth("");
    setYear("");
    setBasicPay("");
    setHra("");
    setAllowances("");
    setBonus("");
    setPf("");
    setProfessionalTax("");
    setOtherDeductions("");
    setShowOverview(false);
    setErrorMsg("");
  }

  // Opens the browser's print dialog with just the payslip.
  // The user can choose "Save as PDF" as the destination to download it.
  function handleGeneratePayslip() {
    if (!allFilled) {
      setErrorMsg("Please fill in all fields before generating the payslip.");
      setShowOverview(false);
      return;
    }
    setErrorMsg("");
    window.print();
  }

  // A small 3-square logo mark, similar to the reference design
  function LogoMark() {
    return (
      <div className="relative w-6 h-6 shrink-0">
        <div className="absolute top-0 left-0 w-3.5 h-3.5 border-2 border-red-500 rounded-sm" />
        <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-2 border-emerald-500 rounded-sm" />
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-amber-500 rounded-sm" />
      </div>
    );
  }

  // One label/value row used throughout the payslip
  function Row({ label, value, bold }) {
    return (
      <div className={"flex justify-between py-2 text-[15px] " + (bold ? "font-semibold" : "")}>
        <span className={bold ? "text-gray-900" : "text-gray-700"}>{label}</span>
        <span className={bold ? "text-gray-900" : "text-gray-900"}>{value}</span>
      </div>
    );
  }

  // Shared payslip layout — used for both the on-screen preview and the print output
  function PayslipDocument() {
    return (
      <div>
        {/* Header */}
        <div className="flex items-center gap-2 mb-1">
          <LogoMark />
          <h1 className="text-xl font-bold font-serif">{COMPANY_NAME}</h1>
        </div>
        <p className="text-gray-500 text-sm mb-4">{COMPANY_ADDRESS}</p>
        <hr className="border-gray-300 mb-5" />

        {/* Employee Details */}
        <h2 className="font-semibold mb-2">Employee Details</h2>
        <Row label="Employee Name :" value={empName} />
        <Row label="Employee ID :" value={empId} />
        <Row label="Designation :" value={designation} />
        <Row label="Department :" value={department} />
        <Row label="Pay Period :" value={`${month} ${year}`} />

        <hr className="border-gray-300 my-5" />

        {/* Earnings */}
        <h2 className="font-semibold mb-2">Earnings</h2>
        <Row label="Basic pay ($)" value={`$ ${Number(basicPay || 0).toFixed(2)}`} />
        <Row label="HRA ($)" value={`$ ${Number(hra || 0).toFixed(2)}`} />
        <Row label="Allowances ($)" value={`$ ${Number(allowances || 0).toFixed(2)}`} />
        <Row label="Bonus (Optional) ($)" value={`$ ${Number(bonus || 0).toFixed(2)}`} />
        <hr className="border-gray-300 my-2" />
        <Row label="Total Earnings" value={`$ ${gross.toFixed(2)}`} bold />

        {/* Deductions */}
        <h2 className="font-semibold mt-5 mb-2">Deductions</h2>
        <Row label="Provident Fund (PF) ($)" value={`$ ${Number(pf || 0).toFixed(2)}`} />
        <Row label="Professional Tax ($)" value={`$ ${Number(professionalTax || 0).toFixed(2)}`} />
        <Row label="Other Deductions ($)" value={`$ ${Number(otherDeductions || 0).toFixed(2)}`} />
        <hr className="border-gray-300 my-2" />
        <Row label="Total Deductions" value={`$ ${totalDeductions.toFixed(2)}`} bold />

        {/* Net Pay band */}
        <div className="flex justify-between items-center bg-emerald-600 text-white rounded-xl px-5 py-4 mt-5">
          <span className="font-semibold">Net Pay</span>
          <span className="font-semibold">$ {netPay.toFixed(2)}</span>
        </div>

        <hr className="border-gray-300 my-5" />
        <p className="text-center text-gray-500 text-sm">
          This System - Generate Payslip
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
      <div className="mx-auto max-w-2xl flex flex-col gap-6 print:hidden">

        {/* Employee Details */}
        <div className="rounded-3xl border border-gray-200 bg-white p-8">
          <h2 className="text-xl font-semibold mb-6">Employee Details</h2>

          <label className="block mb-2 text-[15px]">Employee Name</label>
          <input
            type="text"
            value={empName}
            onChange={(e) => setEmpName(e.target.value)}
            className={inputStyle + " mb-6"}
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

        {/* Generate Payslip + Reset buttons */}
        <div className="flex gap-4">
          <button
            onClick={handleGeneratePayslip}
            className="flex-1 rounded-full bg-blue-600 text-white text-[15px] font-medium py-4 hover:bg-blue-700"
          >
            Generate Payslip
          </button>
          <button
            onClick={handleReset}
            className="flex-1 rounded-full border border-gray-300 bg-white text-[15px] font-medium py-4 hover:bg-gray-50"
          >
            Reset
          </button>
        </div>

        {/* Error message if fields are missing */}
        {errorMsg && (
          <p className="text-center text-sm text-red-600">{errorMsg}</p>
        )}

        {/* Payslip Preview button — only opens Overview if all fields are filled */}
        <button
          onClick={handlePreviewClick}
          className="rounded-full bg-blue-600 text-white text-[15px] font-medium py-4 hover:bg-blue-700"
        >
          Payslip Preview
        </button>

        {/* Overview modal: rendered via a portal directly into <body>,
            so no parent element (fixed navbar, transforms, etc.) can push it out of place */}
        {showOverview && createPortal(
          <div className="print:hidden fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
            <div className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl border border-gray-200 bg-white p-8">
              <div className="flex justify-end mb-2">
                <button
                  onClick={() => setShowOverview(false)}
                  className="text-gray-400 hover:text-gray-700 text-xl leading-none"
                >
                  ✕
                </button>
              </div>

              <PayslipDocument />

              <div className="flex gap-4 mt-6">
                <button
                  onClick={handleGeneratePayslip}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full bg-blue-600 text-white text-[15px] font-medium py-3.5 hover:bg-blue-700"
                >
                  ⬇ Download Payslip
                </button>
                <button
                  onClick={handleGeneratePayslip}
                  className="flex-1 flex items-center justify-center gap-2 rounded-full border border-gray-300 bg-white text-[15px] font-medium py-3.5 hover:bg-gray-50"
                >
                  🖨 Print
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

      </div>

      {/* Print-only payslip: hidden on screen, shown only when printing/saving as PDF */}
      <div className="hidden print:block p-10 max-w-2xl mx-auto">
        <PayslipDocument />
      </div>
    </div>
  );
}