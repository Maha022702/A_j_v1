import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { postContactRequest } from "../../services/api";

const ContactForm = () => {
  const userDetails = useSelector((state) => state?.auth?.userDetails);
  const authToken = useSelector((state) => state?.auth?.AuthTokenData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    toast.dismiss();
    const requestData = {
      ...data,
      name: userDetails?.username,
      email: userDetails?.email,
    };
    if (authToken) {
      console.log("Form Data:", requestData);
      postContactRequest(requestData, authToken)
        .then((res) => {
          if (res?.status === 201) {
            console.log("Contact Request Response : ", res);
            reset();
            toast.success("Contact Request Sent");
          } else {
            toast.error("Something went wrong please try again later");
          }
        })
        .catch((error) => {
          console.log("Contact Request Error : ", error);
          toast.error("Something went wrong please try again later");
        });
    } else {
      toast.error("Login into your account");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-blue-50 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="name">
            Name
          </label>
          <input
            disabled
            value={userDetails?.username || ""}
            id="name"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email
          </label>
          <input
            disabled
            value={userDetails?.email || ""}
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Mobile Number Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="mobile">
            Mobile Number
          </label>
          <input
            id="mobile"
            type="text"
            inputMode="numeric"
            maxLength="10"
            className={`w-full px-4 py-2 border ${
              errors.mobile ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              errors.mobile ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
            {...register("mobile", {
              required: "Mobile number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Mobile number must be exactly 10 digits",
              },
            })}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
            }}
          />
          {errors.mobile && (
            <p className="text-red-500 text-sm mt-1">{errors.mobile.message}</p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows="4"
            className={`w-full px-4 py-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 ${
              errors.message ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
            {...register("message", { required: "Message is required" })}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
