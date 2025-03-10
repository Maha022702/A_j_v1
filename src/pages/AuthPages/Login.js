import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import EyeOffIcon from "../../assets/images/hide.png";
import EyeIcon from "../../assets/images/view.png";
import { useDispatch, useSelector } from "react-redux";
import { lang } from "../../redux/selector";
import {
  AuthToken,
  loginRequest,
  UserDetails,
} from "../../redux/slices/authSlice";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { login } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const language = useSelector(lang);
  const dispatch = useDispatch();
  const Auth = useSelector((state) => state?.auth);
  // console.log("Redux Auth : ", Auth);

  const [showPassword, setShowPassword] = useState(false); // Set default to false for hidden password
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    toast.dismiss();
    let payload = {
      email: data?.emailId,
      password: data?.password,
    };
    // console.log("Login payload", payload);
    login(payload)
      .then((res) => {
        // console.log("Login Response : ", res?.data);
        if (res?.data?.access_token) {
          dispatch(AuthToken(res?.data?.access_token));
          localStorage.setItem("AuthToken", res?.data?.access_token);
          const decodedToken = jwtDecode(res?.data?.access_token);
          console.log("login result decodedToken", decodedToken);
          dispatch(UserDetails(decodedToken));
          toast.success("Login successful", {
            autoClose: 1000,
          });
          navigate("/courseCards");
        } else {
          toast.error("Something wrong, please try again later", {
            autoClose: 2000,
          });
        }
      })
      .catch((err) => {
        console.log("Login Error : ", err);
        toast.error(err?.response?.data?.message ?? err?.name, {
          autoClose: 2000,
        });
      });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-6 rounded-lg shadow-lg bg-white"
    >
      <h1 className="text-2xl font-bold mb-4 justify-center items-center flex">
        {language?.Login}
      </h1>
      <h6 className="mb-4 justify-center items-center flex">
        {
          language?.ToKeepConnectedWithUsPleaseLoginWithYourPersonalInformationByEmailAddressAndPassword
        }
      </h6>

      <div className="mb-4">
        <label className="block text-black font-medium mb-2">
          {language?.EmailId}
        </label>
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
          {language?.Password}
        </label>
        <div className="relative">
          <input
            // type={showPassword ? "text" : "password"}
            type="password"
            className={`w-full p-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded pr-10`} // Add padding for the icon
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          {/* <img
            src={showPassword ? EyeOffIcon : EyeIcon}
            alt="toggle visibility"
            className="h-5 w-5 absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer"
            onClick={() => setShowPassword((prev) => !prev)}
          /> */}
        </div>
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          {...register("rememberMe")}
          className="mr-2 text-primary focus:ring-0"
        />
        <label className="text-gray-700">{language?.RememberMe}</label>
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
      >
        {language?.Login}
      </button>
      <div className="text-center mt-4">
        <p
          href="#"
          className="text-sm text-blue-500 hover:underline"
          onClick={(e) => {
            e.preventDefault();
            navigate("/forgotPassword");
          }}
        >
          {language?.ForgotPassword}?
        </p>
        <div className="mt-2">
          <p
            href="#"
            className="text-sm text-blue-500 hover:underline"
            onClick={() => {
              navigate("/signUp");
            }}
          >
            {language?.DontHaveAnAccount}? {language?.SignUp}
          </p>
        </div>
      </div>
    </form>
  );
};

export default Login;
