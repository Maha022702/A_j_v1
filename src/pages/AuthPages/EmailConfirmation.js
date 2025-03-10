import React from "react";
import APPIcon from "../../assets/images/bull.png";

const EmailConfirmation = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          Registration Successful!
        </h1>
        <p className="text-gray-700 mt-4 text-center">
          A confirmation email has been sent to your registered email address.
          Please check your inbox and click the link to verify your account.
        </p>
        <div className="flex justify-center mt-6">
          <img src={APPIcon} alt="Email Illustration" className="w-32 h-32" />
        </div>
        <p className="text-gray-600 mt-4 text-center">
          Once verified, you can log in to your account and start using the app.
        </p>
        <div className="mt-6 flex flex-col space-y-4">
          <button
            onClick={() => alert("Resend email functionality goes here!")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Resend Email
          </button>
          <button
            onClick={() => (window.location.href = "/login")}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium"
          >
            Go to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;
