import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { saveLoginInfo } from "../utils/authStorage";

export default function Login() {
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const inputStyle =
    "w-full rounded-full border border-gray-300 px-5 py-3.5 text-[15px] outline-none focus:border-gray-900";

  function handleLogin(e) {
    e.preventDefault();

    if (!email || !companyName || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setErrorMsg("");
    saveLoginInfo({ email, companyName });
    // TODO: replace with your real authentication call
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 mt-20">
      <div className="mx-auto max-w-3xl flex flex-col gap-6">

        <h1 className="text-2xl font-bold">Employee Log In</h1>

        <form
          onSubmit={handleLogin}
          className="rounded-3xl border border-gray-200 bg-white p-10 flex flex-col gap-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div>
              <label className="block mb-2 text-[15px]">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block mb-2 text-[15px]">Company Name</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Enter Your Company name"
                className={inputStyle}
              />
            </div>
          </div>

          <div className="max-w-md">
            <label className="block mb-2 text-[15px]">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              className={inputStyle}
            />
            <div className="text-right mt-2">
              <a href="/forgot-password" className="text-blue-600 text-sm hover:underline">
                Forgot password?
              </a>
            </div>
          </div>

          {errorMsg && (
            <p className="text-center text-sm text-red-600">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="mx-auto rounded-full bg-blue-600 text-white text-[15px] font-medium px-16 py-3.5 hover:bg-blue-700"
          >
            Log In
          </button>
        </form>

      </div>
    </div>
  );
}