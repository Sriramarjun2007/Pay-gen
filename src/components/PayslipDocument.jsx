const COMPANY_NAME = "Pay Gen";
const COMPANY_ADDRESS = "132, Business street, suite 100";

// A small 3-square logo mark
function LogoMark() {
  return (
    <div className="relative w-6 h-6 shrink-0">
      <div className="absolute top-0 left-0 w-3.5 h-3.5 border-2 border-red-500 rounded-sm" />
      <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-2 border-emerald-500 rounded-sm" />
      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-2 border-amber-500 rounded-sm" />
    </div>
  );
}

// One label/value row
function Row({ label, value, bold }) {
  return (
    <div className={"flex justify-between py-2 text-[15px] " + (bold ? "font-semibold" : "")}>
      <span className={bold ? "text-gray-900" : "text-gray-700"}>{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

// data: { empName, empId, designation, department, month, year,
//         basicPay, hra, allowances, bonus, pf, professionalTax,
//         otherDeductions, gross, totalDeductions, netPay }
export default function PayslipDocument({ data }) {
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
      <Row label="Employee Name :" value={data.empName} />
      <Row label="Employee ID :" value={data.empId} />
      <Row label="Designation :" value={data.designation} />
      <Row label="Department :" value={data.department} />
      <Row label="Pay Period :" value={`${data.month} ${data.year}`} />

      <hr className="border-gray-300 my-5" />

      {/* Earnings */}
      <h2 className="font-semibold mb-2">Earnings</h2>
      <Row label="Basic pay ($)" value={`$ ${Number(data.basicPay || 0).toFixed(2)}`} />
      <Row label="HRA ($)" value={`$ ${Number(data.hra || 0).toFixed(2)}`} />
      <Row label="Allowances ($)" value={`$ ${Number(data.allowances || 0).toFixed(2)}`} />
      <Row label="Bonus (Optional) ($)" value={`$ ${Number(data.bonus || 0).toFixed(2)}`} />
      <hr className="border-gray-300 my-2" />
      <Row label="Total Earnings" value={`$ ${Number(data.gross || 0).toFixed(2)}`} bold />

      {/* Deductions */}
      <h2 className="font-semibold mt-5 mb-2">Deductions</h2>
      <Row label="Provident Fund (PF) ($)" value={`$ ${Number(data.pf || 0).toFixed(2)}`} />
      <Row label="Professional Tax ($)" value={`$ ${Number(data.professionalTax || 0).toFixed(2)}`} />
      <Row label="Other Deductions ($)" value={`$ ${Number(data.otherDeductions || 0).toFixed(2)}`} />
      <hr className="border-gray-300 my-2" />
      <Row label="Total Deductions" value={`$ ${Number(data.totalDeductions || 0).toFixed(2)}`} bold />

      {/* Net Pay band */}
      <div className="flex justify-between items-center bg-emerald-600 text-white rounded-xl px-5 py-4 mt-5">
        <span className="font-semibold">Net Pay</span>
        <span className="font-semibold">$ {Number(data.netPay || 0).toFixed(2)}</span>
      </div>

      <hr className="border-gray-300 my-5" />
      <p className="text-center text-gray-500 text-sm">
        This System - Generate Payslip
      </p>
    </div>
  );
}