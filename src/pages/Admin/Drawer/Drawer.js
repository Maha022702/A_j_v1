import { Link, useLocation, useNavigate } from "react-router-dom";
import USER from "../../../assets/images/user.png";

const Drawer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="h-screen w-60 bg-gray-800 text-white fixed pt-10">
      <div className="flex flex-col justify-center items-center">
        <img src={USER} className="h-14 w-14 bg-white p-1 rounded-full" />
        <div className="p-4 font-bold text-xl">Admin</div>
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
            <Link
              to="/DashBoard"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/DashBoard" ? "bg-gray-700" : ""
              }`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/userList"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/userList" ? "bg-gray-700" : ""
              }`}
            >
              User List
            </Link>
          </li>
          <li>
            <Link
              to="/faqList"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/faqList" ? "bg-gray-700" : ""
              }`}
            >
              FAQ List
            </Link>
          </li>
          <li>
            <Link
              to="/courseList"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/courseList" ? "bg-gray-700" : ""
              }`}
            >
              Course List
            </Link>
          </li>
          <li>
            <Link
              to="/contactRequest"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/contactRequest" ? "bg-gray-700" : ""
              }`}
            >
              Contact Request
            </Link>
          </li>
          <li>
            <Link
              to="/adminTermsOfService"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/adminTermsOfService"
                  ? "bg-gray-700"
                  : ""
              }`}
            >
              Terms of service
            </Link>
          </li>
          <li>
            <Link
              to="/adminPrivacyPolicy"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/adminPrivacyPolicy"
                  ? "bg-gray-700"
                  : ""
              }`}
            >
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link
              to="/adminRefundPolicy"
              className={`block px-4 py-2 hover:bg-gray-700 ${
                location?.pathname === "/adminRefundPolicy" ? "bg-gray-700" : ""
              }`}
            >
              Refund Policy
            </Link>
          </li>

          <li>
            <button
              onClick={() => navigate("/courseCards")}
              className="block w-full text-left px-4 py-2 hover:bg-gray-700"
            >
              Back
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Drawer;
