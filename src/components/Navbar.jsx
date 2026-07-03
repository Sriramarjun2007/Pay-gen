import webicon from "../assets/webicon.png";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="print:hidden bg-text-white shadow-lg fixed top-0 left-0 w-full">
      <div className="w-full  p-6 flex items-center gap-6">
        
        {/* Logo */}
        <div >
          <img src={webicon} />
        </div>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-xl font-medium ml-55">
          <Link to="/">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Home
          </li>
          </Link>

          <Link to="/dashboard">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Dashboard
          </li>
          </Link>

          <Link to="/generateslip">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Generate Payslip
          </li>
          </Link>

          <Link to="/history">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Payslip History
          </li>
          </Link>
          <Link to="/help">
          <li className="cursor-pointer hover:text-blue-400 transition duration-300">
            Help
          </li>
          </Link>
        </ul>

        <Link to="/profile">
          <div className="ml-50">
            <FaUser size={20} />
          </div>
        </Link>

        {/* Profile Button */}
        <Link to="/login">
          <button className="bg-blue-600 text-white ml-5 hover:bg-blue-700 px-9 py-2 rounded-lg font-medium transition duration-300">
            Login
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;