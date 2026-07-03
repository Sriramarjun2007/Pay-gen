import { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";
import { getPayslips } from "../utils/payslipStorage";
import { getProfile } from "../utils/profileStorage";
// One summary card at the top of the dashboard
function StatCard({ label, value, sub }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <span className="text-gray-500">{label}</span>
        <FaSyncAlt className="text-blue-500" size={16} />
      </div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-gray-500 text-sm mt-1">{sub}</p>
    </div>
  );
}

export default function Dashboard() {
  const [payslips] = useState(getPayslips());
  const profile = getProfile();
  // Most recently generated payslip (payslips are saved newest-first)
  const latest = payslips[0];

  // Totals across everything saved so far
  const totalGross = payslips.reduce((sum, p) => sum + Number(p.gross || 0), 0);
  const totalDeductions = payslips.reduce((sum, p) => sum + Number(p.totalDeductions || 0), 0);
  const totalNet = payslips.reduce((sum, p) => sum + Number(p.netPay || 0), 0);

  // Only show the 5 most recent payslips in the list below
  const recent = payslips.slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
      <div className="mx-auto max-w-6xl flex flex-col gap-6">

        {/* Greeting */}
        <div>
          <h1 className="text-2xl font-bold">
            Welcome back,{" "}
            <span className="text-blue-600">
              {profile?.empName || latest?.empName || "there"}
            </span>
          </h1>
          <p className="text-gray-500">Here's an overview of your payroll information</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <StatCard
            label="Latest Payslip"
            value={latest ? `$${Number(latest.netPay).toFixed(2)}` : "—"}
            sub={latest ? `${latest.month} ${latest.year}` : "No payslips yet"}
          />
          <StatCard
            label="Total Gross Earnings"
            value={`$${totalGross.toFixed(2)}`}
            sub={`Across ${payslips.length} payslip${payslips.length === 1 ? "" : "s"}`}
          />
          <StatCard
            label="Total Deductions"
            value={`$${totalDeductions.toFixed(2)}`}
            sub={`Across ${payslips.length} payslip${payslips.length === 1 ? "" : "s"}`}
          />
          <StatCard
            label="Total Net Pay"
            value={`$${totalNet.toFixed(2)}`}
            sub={`Across ${payslips.length} payslip${payslips.length === 1 ? "" : "s"}`}
          />
        </div>

        {/* Recent Payslips */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Payslips</h2>

          {recent.length === 0 ? (
            <p className="text-gray-500 py-10 text-center">
              No payslips generated yet. Head to Generate Payslip to create one.
            </p>
          ) : (
            <div className="flex flex-col gap-4">
              {recent.map((p) => (
                <div
                  key={p.id}
                  className="flex items-center justify-between rounded-2xl border border-gray-200 px-6 py-5"
                >
                  <div>
                    <p className="font-medium text-lg">{p.month} {p.year}</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Gross : ${Number(p.gross).toFixed(2)} \ Deductions: ${Number(p.totalDeductions).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      ${Number(p.netPay).toFixed(2)}
                    </span>
                    <span className="bg-emerald-600 text-white text-sm px-4 py-1 rounded-full">
                      {p.status || "Paid"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}