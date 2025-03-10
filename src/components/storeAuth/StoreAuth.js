import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import { AuthToken, UserDetails, UserRole } from "../../redux/slices/authSlice";

export const StoreAuth = ({ checkAuth, setCheckAuth, setLoadLang }) => {
  const dispatch = useDispatch();
  const routeName = useSelector((state) => state);

  useEffect(() => {
    const auth_token = localStorage.getItem("AuthToken");
    // console.log(" store AuthToken", AuthToken);

    if (auth_token) {
      dispatch(AuthToken(auth_token));
      const decodedAuthToken = jwtDecode(auth_token);
      // console.log("decodedAuthToken", decodedAuthToken);
      // dispatch(UserDetails(decodedAuthToken));
      if (decodedAuthToken?.role === "student") {
        dispatch(UserRole("student"));
        setCheckAuth("student");
      } else {
        dispatch(UserRole("admin"));
        setCheckAuth("admin");
      }
    } else {
      setCheckAuth("student");
    }
    setTimeout(() => {
      setLoadLang(false);
    }, 100);
  }, [checkAuth, dispatch, setLoadLang, routeName]);

  useEffect(() => {
    const AuthToken = localStorage.getItem("AuthToken");
    if (AuthToken) {
      const decodedAuthToken = jwtDecode(AuthToken);
      dispatch(UserDetails(decodedAuthToken));
    }
  }, []);

  return null;
};
