import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../services/api";
import { toast } from "react-toastify";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    // Add your login logic here using the data object
    console.log("SignUp successfully", data);
    // navigate("/otp");
    let payload = {
      email: data?.emailId,
      password: data?.password,
      username: data?.name,
    };
    console.log("SignUp payload", payload);
    signUp(payload)
      .then((res) => {
        console.log("SignUp Response : ", res?.data);
        if (res?.data) {
          //  localStorage.setItem("AuthToken", res?.data?.access_token);
          //  const decodedToken = jwtDecode(res?.data?.access_token);
          //  console.log("login result decodedToken", decodedToken);
          //  dispatch(UserDetails(decodedToken));
          toast.success("SignUp successful", {
            autoClose: 1000,
          });
          navigate("/emailConfirmation");
        } else {
          toast.error("Something wrong, please try again later", {
            autoClose: 2000,
          });
        }
      })
      .catch((err) => {
        console.log("SignUp Error : ", err);
        toast.error(err?.response?.data?.message, {
          autoClose: 2000,
        });
      });
  };

  // Watch the password field to compare it with confirmPassword
  const password = watch("password");

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white"
    >
      <h2 className="text-2xl font-semibold mb-4">Create An Account</h2>
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">Name :</label>
        <input
          type="text"
          className={`w-full p-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded`}
          {...register("name", {
            required: "First name is required",
            minLength: {
              value: 3,
              message: "Invalid name. Minimum 3 characters required",
            },
            pattern: {
              value: /^[A-Za-z]+$/,
              message: "Please enter a valid name (alphabets only)",
            },
          })}
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

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

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2">
          Password :
        </label>
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
        <label className="block text-gray-700 font-medium mb-2">
          Confirm Password :
        </label>
        <input
          type="password"
          className={`w-full p-2 border ${
            errors.confirmPassword ? "border-red-500" : "border-gray-300"
          } rounded`}
          {...register("confirmPassword", {
            required: "Please confirm your password",
            validate: (value) => value === password || "Passwords do not match",
          })}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
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

export default SignUp;
