import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12">

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <HiOutlineSparkles className="text-3xl text-blue-600" />
              <h2 className="text-2xl font-bold">Pay Gen</h2>
            </div>

            <ul className="space-y-3 text-lg">
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
          </div>

          {/* Policies */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Policies
            </h3>

            <ul className="space-y-3 text-lg">
              <li className="hover:text-blue-600 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Terms & Conditions
              </li>
              <li className="hover:text-blue-600 cursor-pointer">
                Support
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-lg">
              <li>Android App</li>
              <li>iOS App</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Email */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Email
            </h3>

            <p className="text-lg break-words">
              paygen1234@gmail.com
            </p>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Address
            </h3>

            <p className="text-lg leading-8">
              45, West Street,
              <br />
              Corner 3rd Floor,
              <br />
              Chennai - 600001
            </p>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-600">
            © 2026 Pay Gen. All Rights Reserved.
          </p>

          <div className="flex gap-5 text-2xl">
            <FaFacebook className="cursor-pointer hover:text-blue-600 transition" />
            <FaWhatsapp className="cursor-pointer hover:text-green-500 transition" />
            <FaInstagram className="cursor-pointer hover:text-pink-500 transition" />
            <FaYoutube className="cursor-pointer hover:text-red-600 transition" />
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;