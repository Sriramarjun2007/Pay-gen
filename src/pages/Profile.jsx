import { useState } from "react";
import { getLoginInfo } from "../utils/authStorage";
import { saveProfile } from "../utils/profileStorage";
export default function Profile() {
  // Only "email" comes from Login — everything else has no source yet,
  // so it starts blank instead of fake sample data.
  const loginInfo = getLoginInfo();

  const [empName, setEmpName] = useState("");
  const [empId, setEmpId] = useState("");
  const [designation, setDesignation] = useState("");
  const [department, setDepartment] = useState("");
  const [phone, setPhone] = useState("");
  const [emailId, setEmailId] = useState(loginInfo?.email || "");
  const [companyName, setCompanyName] = useState(loginInfo?.companyName || "");

  const inputStyle =
    "w-full rounded-full border border-gray-300 px-5 py-3.5 text-[15px] outline-none focus:border-gray-900";

  // Builds initials from the employee name, e.g. "GAYATHIRI S" -> "GS".
  // Falls back to "?" if there's no name yet.
  function getInitials(name) {
    if (!name.trim()) return "?";
    return name
      .trim()
      .split(/\s+/)
      .map((word) => word[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  }

 function handleUpdate() {
  saveProfile({
    empName,
    empId,
    designation,
    department,
    phone,
    emailId,
    companyName,
  });

  alert("Profile updated successfully!");
}

  return (
    <div className="min-h-screen bg-gray-50 mt-30">
      <div className="mx-auto max-w-4xl">

        {/* Header banner */}
        <div className="bg-blue-100 rounded-b-2xl px-8 py-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg shrink-0">
            {getInitials(empName)}
          </div>
          <div>
            <p className="font-bold text-lg">{empName || "Employee Name"}</p>
            <p className="text-gray-600">{designation || "Designation"}</p>
          </div>
        </div>

        {/* Profile form */}
        <div className="p-8 flex flex-col gap-8">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-[15px]">Employee Name</label>
              <input
                type="text"
                value={empName}
                onChange={(e) => setEmpName(e.target.value)}
                placeholder="Enter Employee Name"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block mb-2 text-[15px]">Employee ID</label>
              <input
                type="text"
                value={empId}
                onChange={(e) => setEmpId(e.target.value)}
                placeholder="Enter Employee ID"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-[15px]">Designation</label>
              <input
                type="text"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Enter Designation"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block mb-2 text-[15px]">Department</label>
              <input
                type="text"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Enter Department"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-[15px]">Phone Number</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter Phone Number"
                className={inputStyle}
              />
            </div>
            <div>
              <label className="block mb-2 text-[15px]">Email Id</label>
              <input
                type="email"
                value={emailId}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Enter Email"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-[15px]">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter Company Name"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="flex justify-end border-t border-gray-200 pt-6">
            <button
              onClick={handleUpdate}
              className="rounded-full bg-blue-600 text-white text-[15px] font-medium px-10 py-3.5 hover:bg-blue-700"
            >
              Update Profile
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}