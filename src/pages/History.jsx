import { useState, useMemo } from "react";
import { getPayslips } from "../utils/payslipStorage";
import PayslipDocument from "../components/PayslipDocument";

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function PayslipHistory() {
  const [payslips] = useState(getPayslips());

  const [search, setSearch] = useState("");
  const [monthFilter, setMonthFilter] = useState("All Months");
  const [yearFilter, setYearFilter] = useState("All Years");

  // The payslip currently being printed/downloaded (null when none)
  const [printing, setPrinting] = useState(null);

  // Every year that appears in the saved payslips, for the year dropdown
  const years = useMemo(() => {
    const unique = [...new Set(payslips.map((p) => p.year))];
    return unique.sort((a, b) => b - a);
  }, [payslips]);

  // Applies search text + month + year filters
  const filtered = payslips.filter((p) => {
    const matchesSearch =
      !search ||
      p.empName?.toLowerCase().includes(search.toLowerCase()) ||
      `${p.month} ${p.year}`.toLowerCase().includes(search.toLowerCase());

    const matchesMonth = monthFilter === "All Months" || p.month === monthFilter;
    const matchesYear = yearFilter === "All Years" || String(p.year) === String(yearFilter);

    return matchesSearch && matchesMonth && matchesYear;
  });

  function clearFilters() {
    setSearch("");
    setMonthFilter("All Months");
    setYearFilter("All Years");
  }

  // Shows the chosen payslip in the hidden print area, then opens the print dialog
  function handleDownload(record) {
    setPrinting(record);
    // Wait a tick so the print-only content renders before the dialog opens
    setTimeout(() => window.print(), 100);
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-25">
      <div className="mx-auto max-w-5xl flex flex-col gap-6 print:hidden">

        {/* Page header */}
        <div>
          <h1 className="text-2xl font-bold">Payslip History</h1>
          <p className="text-gray-500">View and download your previous payslips</p>
        </div>

        {/* Filters */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6 flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 min-w-[180px] rounded-full border border-gray-300 px-5 py-3 text-[15px] outline-none focus:border-gray-900"
          />

          <select
            value={monthFilter}
            onChange={(e) => setMonthFilter(e.target.value)}
            className="rounded-full border border-gray-300 px-5 py-3 text-[15px] outline-none focus:border-gray-900"
          >
            <option>All Months</option>
            {MONTHS.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>

          <select
            value={yearFilter}
            onChange={(e) => setYearFilter(e.target.value)}
            className="rounded-full border border-gray-300 px-5 py-3 text-[15px] outline-none focus:border-gray-900"
          >
            <option>All Years</option>
            {years.map((y) => (
              <option key={y}>{y}</option>
            ))}
          </select>

          <button
            onClick={clearFilters}
            className="rounded-full border border-gray-300 px-6 py-3 text-[15px] font-medium hover:bg-gray-50"
          >
            Clear Filter
          </button>
        </div>

        {/* Table */}
        <div className="rounded-3xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold mb-4">
            All Payslips ({filtered.length})
          </h2>

          {filtered.length === 0 ? (
            <p className="text-gray-500 py-10 text-center">No payslips found.</p>
          ) : (
            <table className="w-full text-left">
              <thead>
                <tr className="text-gray-500 text-sm border-b border-gray-200">
                  <th className="py-3 font-medium">Pay Period</th>
                  <th className="py-3 font-medium">Gross Salary</th>
                  <th className="py-3 font-medium">Deductions</th>
                  <th className="py-3 font-medium">Net Pay</th>
                  <th className="py-3 font-medium">Status</th>
                  <th className="py-3 font-medium">Download</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr key={p.id} className="border-b border-gray-100 last:border-0">
                    <td className="py-4 font-medium">{p.month} {p.year}</td>
                    <td className="py-4">${Number(p.gross).toFixed(2)}</td>
                    <td className="py-4">${Number(p.totalDeductions).toFixed(2)}</td>
                    <td className="py-4 text-emerald-600 font-medium">
                      ${Number(p.netPay).toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span className="bg-emerald-600 text-white text-sm px-4 py-1 rounded-full">
                        {p.status || "Paid"}
                      </span>
                    </td>
                    <td className="py-4">
                      <button
                        onClick={() => handleDownload(p)}
                        className="text-blue-600 hover:text-blue-800"
                        title="Download payslip"
                      >
                        ⬇
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Print-only payslip: renders the selected record when Download is clicked */}
      {printing && (
        <div className="hidden print:block p-10 max-w-2xl mx-auto">
          <PayslipDocument data={printing} />
        </div>
      )}
    </div>
  );
}