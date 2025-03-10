import { useForm } from "react-hook-form";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const OTP = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    setValue,
    clearErrors,
  } = useForm({
    mode: "onChange", // Validate on change
  });
  const otpRefs = useRef([]);

  const onSubmit = (data) => {
    const otp = Object.values(data).join("");
    console.log("OTP entered:", otp);
    // Further OTP processing logic here
    navigate('/confirmPassword')
  };

  const handleInputChange = (e, index) => {
    const value = e.target.value;
    console.log("value=>", value, "index=>", index);
    console.log("IF condition", /^\d?$/.test(value));

    if (/^\d?$/.test(value)) {
      // Allow only numbers and prevent alphabet or special characters
      clearErrors(`otp${index}`);
      setValue(`otp${index}`, value);

      // Move to the next input if there is one
      if (index < otpRefs.current.length - 1 && value !== "") {
        otpRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      clearErrors(`otp${index}`);
      setValue(`otp${index}`, value);
    }
  };

  const handleKeyDown = (e, index) => {
    console.log("index=>", index);

    if (e.key === "Backspace" && index > 0) {
      otpRefs.current[index - 1].focus();
    }
  };

  useEffect(() => {
    otpRefs.current[0]?.focus(); // Set initial focus on first input
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-2xl bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Enter OTP</h2>
      <p className="text-sm font-thin mb-4">
        Enter the 6-digit OTP sent to your registered email address.
      </p>

      <div className="flex justify-between mb-4">
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            type="text"
            maxLength="1"
            className={`w-12 h-12 text-center border ${
              errors[`otp${index}`] ? "border-red-500" : "border-gray-300"
            } rounded`}
            {...register(`otp${index}`, {
              required: "Each OTP field is required",
              validate: (value) =>
                /^[0-9]$/.test(value) || "Only numbers are allowed",
            })}
            ref={(el) => (otpRefs.current[index] = el)}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          />
        ))}
      </div>

      {Object.keys(errors).some((key) => key.startsWith("otp")) && (
        <p className="text-red-500 text-sm mb-4">
          {errors[
            `otp${Object.keys(errors).find((key) => key.startsWith("otp"))}`
          ]?.message || "Please fill out all OTP fields correctly."}
        </p>
      )}

      <button
        type="submit"
        className={`w-full ${!isValid ?  'bg-gray-500': 'bg-blue-500'} text-white py-2 rounded hover:bg-blue-600 transition-colors`}
        disabled={!isValid} // Disable button if form is invalid
      >
        Verify OTP
      </button>
    </form>
  );
};

export default OTP;
