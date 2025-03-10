import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AppIcon from "../assets/images/bull.png";
import { getFAQ } from "../services/api";
import { useDispatch, useSelector } from "react-redux";
import { FQA_List } from "../redux/slices/dashSlice";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const FQA_Data_List = useSelector((state) => state?.dashboard?.FQA_Data_List);

  useEffect(() => {
    getFAQ()
      .then((res) => {
        // console.log("Get FAQ Response : ", res);
        if (res?.status === 200) {
          dispatch(FQA_List(res?.data));
        }
      })
      .catch((error) => {
        console.log("Get FAQ Error : ", error);
      });
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center bg-gray-50 text-gray-800 min-h-screen">
      {/* Header Section */}
      <header className="w-full bg-gradient-to-b from-slate-500 to-slate-800 p-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center">
            <img src={AppIcon} alt="App Icon" className="h-12 w-12 mr-2" />
            <p className="text-red-500 font-bold text-2xl">TheGreatBulls</p>
          </div>
          <div className="text-white mt-2 md:mt-0">
            <p>
              Subscribe on YouTube:{" "}
              <span className="font-bold">10k Subscribers</span>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center max-w-7xl w-full px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Welcome to TheGreatBulls
        </h1>
        <p className="text-center text-lg mb-6">
          Your go-to platform for learning, development, and growth. Explore our
          courses and start your journey today!
        </p>
        <button
          onClick={() => navigate("/courseCards")}
          className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700"
        >
          Enroll Now
        </button>
      </main>

      {/* FAQ Section */}
      <section className="w-full bg-white py-8 px-4">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {FQA_Data_List?.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <p className="text-lg font-semibold">{faq.question}</p>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full bg-gradient-to-b from-slate-700 to-slate-400 text-white py-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-center md:text-left text-sm">
            © {new Date().getFullYear()} TheGreatBulls. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="/privacyPolicy"
              className="text-white hover:underline mx-2"
            >
              Privacy Policy
            </a>
            <a href="/refundPolicy" className="text-white hover:underline mx-2">
              Refund Policy
            </a>
            <a
              href="/termsOfService"
              className="text-white hover:underline mx-2"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
