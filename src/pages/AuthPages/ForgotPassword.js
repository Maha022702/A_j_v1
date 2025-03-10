import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("Login successful", data);
    navigate('/otp')
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-2xl bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
      <p className="text-sm font-thin mb-4">
      Enter your registered email address to receive an OTP and securely reset your password
      </p>
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Email Id</label>
        <input
          type="text"
          className={`w-full p-2 border ${
            errors.emailId ? "border-red-500" : "border-gray-300"
          } rounded`}
          {...register("emailId", {
            required: "Email Id is required",
            minLength: {
              value: 3,
              message: "InValid Email ID",
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
          })}
        />
        {errors.emailId && (
          <p className="text-red-500 text-sm mt-1">{errors.emailId.message}</p>
        )}
      </div>
      

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Send OTP{" "}
      </button>
      <div className="text-center mt-4">
       
        <div className="mt-2">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Don’t have an account? Sign Up
          </a>
        </div>
      </div>
    </form>
  );
};

export default ForgotPassword;



{/* <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password</label>
        <input
          type="password"
          className={`w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters',
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div> */}