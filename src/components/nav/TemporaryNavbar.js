import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
//
import AppIcon from "../../assets/images/bull.png";
import Language from "../../assets/images/language.png";
import SelectLang from "../lang/SelectLang";
import { lang } from "../../redux/selector";
import { useDispatch, useSelector } from "react-redux";
import PROFILE from "../../assets/images/profile-img.png";
import LogOutModal from "../../pages/AuthPages/LogOutModal";
import { AuthToken, UserDetails, UserRole } from "../../redux/slices/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isSelectLanguage, setIsSelectLanguage] = useState(false);
  const language = useSelector(lang);
  const User_Role = useSelector((state) => state?.auth?.userRole);
  const User_Details = useSelector((state) => state?.auth?.userDetails);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
  const dispatch = useDispatch();

  // console.log("User Details : ", User_Details);
  // console.log("User_Role", User_Role);

  // console.log("  location?.pathname", location?.pathname);
  // console.log("isOpen", isOpen);

  // useEffect(() => {
  //   console.log("window.innerWidth", window.innerWidth);
  //   const handleResize = () => {
  //     // Check if the screen width is large (md breakpoint or larger)
  //     if (window.innerWidth >= 764) {
  //       setIsOpen(false); // Close menu on large screens
  //     }
  //   };

  //   // Add resize event listener
  //   window.addEventListener("resize", handleResize);

  //   // Run the function once to set the initial state
  //   handleResize();

  //   // Cleanup the event listener
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [window]);

  const handleLogout = () => {
    // Perform logout actions here, like clearing tokens or redirecting
    console.log("Logged out");
    localStorage.removeItem("AuthToken");
    dispatch(UserDetails(null));
    dispatch(UserRole(null));
    dispatch(AuthToken(null));
    setLogoutModalOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-gray-100 fixed top-0 left-0 w-full z-50 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-shrink-0 flex-row items-center order-2 md:order-1 py-4">
            <img
              src={AppIcon}
              alt="AppIcon"
              className="h-12 w-12 mr-2"
              // onClick={() => setShowPassword((prev) => !prev)}
            />
            <a href="/" className="text-red-500 font-bold text-xl">
              TheGreatBulls
            </a>
          </div>

          <div className="flex flex-row order-1 md:order-2 relative">
            {/* Menu Button for Mobile */}
            <div className="flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-black hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div
              className={`w-48 md:w-fit rounded md:flex ${
                isOpen ? "block" : "hidden"
              } absolute top-8 left-0 md:relative md:top-0`}
            >
              <div className="flex flex-col md:flex-row md:ml-6 space-y-2 md:space-y-0 bg-slate-300 md:bg-transparent">
                {/* User Info / Login Button */}
                {User_Role === "admin" && (
                  <div className="flex flex-col flex-wrap md:flex-row order-2 md:order-1 ">
                    <Link
                      to="/dashBoard"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      DashBoard
                    </Link>
                    <Link
                      to="/userList"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      User List
                    </Link>
                    <Link
                      to="/faqList"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      FAQ List
                    </Link>
                    <Link
                      to="/courseList"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Course List
                    </Link>
                    <Link
                      to="/contactRequest"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Requests
                    </Link>
                    <Link
                      to="/adminTermsOfService"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Terms of Service
                    </Link>
                    <Link
                      to="/adminPrivacyPolicy"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Privacy Policy
                    </Link>
                    <Link
                      to="/adminRefundPolicy"
                      className="text-black hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium"
                      onClick={() => setIsOpen(false)}
                    >
                      Admin Refund Policy
                    </Link>
                  </div>
                )}
                <div
                  className={`items-center px-3 py-2 md:px-0 md:py-0 md:ml-4 order-1 md:order-2 flex ${
                    User_Details ? `md:w-60` : ""
                  }`}
                >
                  {User_Details ? (
                    <div className="flex flex-col md:flex-row md:items-center md:w-96">
                      <div
                        className="flex items-center space-x-3 cursor-pointer relative group"
                        onClick={() => {
                          navigate("/myProfile");
                          setIsOpen(!isOpen);
                        }}
                      >
                        <img
                          src={PROFILE}
                          alt={"Profile img"}
                          className="w-8 h-8 rounded-full"
                        />
                        <span className="font-medium">
                          {User_Details?.username}
                        </span>
                        <span className="absolute top-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm px-2 py-1 rounded w-32">
                          Go to My Profile
                        </span>
                      </div>
                      <button
                        className="mt-4 md:mt-0 bg-black text-white hover:bg-blue-600 md:mx-3 px-3 py-2 rounded-md text-sm font-bold border border-black hover:border-blue-600"
                        onClick={() => setLogoutModalOpen(true)}
                      >
                        {language?.LogOut}
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col md:flex-row md:items-center">
                      <button
                        className={`${
                          location?.pathname === "/logIn"
                            ? `cursor-default bg-blue-600 border-blue-600`
                            : ""
                        }bg-black text-white hover:bg-blue-600 md:mx-3 my-2 md:my-0 px-3 py-2 rounded-md text-sm font-bold border border-black hover:border-blue-600`}
                        onClick={() => {
                          if (location?.pathname !== "/logIn") {
                            navigate("/logIn");
                            setIsOpen(!isOpen);
                          }
                        }}
                      >
                        {language?.Login}
                      </button>
                      <button
                        className={`${
                          location?.pathname === "/signUp"
                            ? `cursor-default bg-blue-600 border-blue-600`
                            : ""
                        }bg-black text-white hover:bg-blue-600 md:mx-3 my-2 md:my-0 px-3 py-2 rounded-md text-sm font-bold border border-black hover:border-blue-600`}
                        onClick={() => {
                          if (location?.pathname !== "/signUp") {
                            navigate("/signUp");
                            setIsOpen(!isOpen);
                          }
                        }}
                      >
                        {language?.SignUp}
                      </button>

                      <div
                        className="flex items-center justify-center cursor-pointer hover:bg-blue-600 border-2 border-black hover:border-blue-600 p-1 rounded-lg font-semibold"
                        onClick={() => {
                          setIsSelectLanguage((prev) => !prev);
                          // setIsOpen(!isOpen);
                        }}
                      >
                        language
                        <img
                          src={Language}
                          alt="Language"
                          className="h-5 w-5"
                        />
                      </div>
                    </div>
                  )}
                  <SelectLang
                    open={isSelectLanguage}
                    onClose={() => setIsSelectLanguage(false)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LogOutModal
        isOpen={isLogoutModalOpen}
        onClose={() => setLogoutModalOpen(false)}
        onConfirm={handleLogout}
      />
    </nav>
  );
};

export default Navbar;
