import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const ConfirmPassword = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("Password set successfully", data?.password);
    navigate('/logIn')
  };

  // Watch the password field to compare it with confirmPassword
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Set New Password</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Password :</label>
        <input
          type="password"
          className={`w-full p-2 border ${
            errors.password ? "border-red-500" : "border-gray-300"
          } rounded`}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">Confirm Password :</label>
        <input
          type="password"
          className={`w-full p-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded`}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
        )}
      </div>
    
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Submit
      </button>
    </form>
  );
};

export default ConfirmPassword;
