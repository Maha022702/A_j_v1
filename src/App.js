import { React, useState } from "react";
import "./index.css";
import CourseCards from "./pages/coursecards/CourseCards";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { persistor, store } from "./redux/store";
import Login from "./pages/AuthPages/Login";
import ForgotPassword from "./pages/AuthPages/ForgotPassword";
import OTP from "./pages/AuthPages/OTP";
import ConfirmPassword from "./pages/AuthPages/ConfirmPassword";
import SignUp from "./pages/AuthPages/SignUp";
import BuyCourse from "./pages/buyCourse/BuyCourse";
import { StoreAuth } from "./components/storeAuth/StoreAuth";
import ContactForm from "./pages/contact/ContactForm";
import RefundPolicy from "./pages/refundPolicy/RefundPolicy";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import TermsOfService from "./pages/termsOfService/TermsOfService";
import Home from "./pages/Home";
import MainLayout from "./MainLayout";
import DashBoard from "./pages/Admin/DashBoard/DashBoard";
import UserList from "./pages/Admin/UserList/UserList";
import UploadVideo from "./pages/Admin/UploadVideo.js/UploadVideo";
import FaqList from "./pages/Admin/Faq/FaqList";
import AddNewFaq from "./pages/Admin/Faq/AddNewFaq";
import AdminTermsOfService from "./pages/Admin/AdminTermsOfService/AdminTermsOfService";
import CourseList from "./pages/Admin/CourseList/CourseList";
import AddNewCourse from "./pages/Admin/CourseList/AddNewCourse";
import AdminPrivacyPolicy from "./pages/Admin/AdminPrivacyPolicy/AdminPrivacyPolicy";
import AdminRefundPolicy from "./pages/Admin/AdminRefundPolicy/AdminRefundPolicy";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import MyProfile from "./components/profile/MyProfile";
import { ProtectedRoute } from "./ProtectedRoute";
import EmailConfirmation from "./pages/AuthPages/EmailConfirmation";
import ShowFaqList from "./pages/ShowFaqList/ShowFaqList";
import ContactRequestList from "./pages/Admin/ContactReq/ContactRequestList";

function App() {
  const [checkAuth, setCheckAuth] = useState("");
  const [loadLan, setLoadLang] = useState(true);
  // console.log("checkAuth", checkAuth);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <StoreAuth
          checkAuth={checkAuth}
          setCheckAuth={setCheckAuth}
          setLoadLang={setLoadLang}
        />

        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route
            path="*"
            element={
              <>
                <MainLayout>
                  <Routes>
                    <Route path="/signUp" element={<SignUp />} />
                    <Route
                      path="/emailConfirmation"
                      element={<EmailConfirmation />}
                    />
                    <Route path="/logIn" element={<Login />} />
                    <Route
                      path="/forgotPassword"
                      element={<ForgotPassword />}
                    />
                    <Route path="/otp" element={<OTP />} />
                    <Route
                      path="/confirmPassword"
                      element={<ConfirmPassword />}
                    />
                    <Route path="/courseCards" element={<CourseCards />} />
                    <Route path="/uploadVideo" element={<UploadVideo />} />
                    <Route path="/buyCourse" element={<BuyCourse />} />
                    <Route path="/contactForm" element={<ContactForm />} />
                    <Route path="/refundPolicy" element={<RefundPolicy />} />
                    <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
                    <Route path="/showFaqList" element={<ShowFaqList />} />
                    <Route
                      path="/termsOfService"
                      element={<TermsOfService />}
                    />
                    <Route path="/myProfile" element={<MyProfile />} />

                    {/*  */}
                    {/*  */}
                    {/*  */}
                    {/*  */}

                    <Route
                      path="/dashBoard"
                      element={
                        <ProtectedRoute role="admin">
                          <DashBoard />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/userList"
                      element={
                        <ProtectedRoute role="admin">
                          <UserList />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/faqList"
                      element={
                        <ProtectedRoute role="admin">
                          <FaqList />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/addNewFaq"
                      element={
                        <ProtectedRoute role="admin">
                          <AddNewFaq />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/courseList"
                      element={
                        <ProtectedRoute role="admin">
                          <CourseList />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/addNewCourse"
                      element={
                        <ProtectedRoute role="admin">
                          <AddNewCourse />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/contactRequest"
                      element={
                        <ProtectedRoute role="admin">
                          <ContactRequestList />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/adminTermsOfService"
                      element={
                        <ProtectedRoute role="admin">
                          <AdminTermsOfService />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/adminPrivacyPolicy"
                      element={
                        <ProtectedRoute role="admin">
                          <AdminPrivacyPolicy />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/adminRefundPolicy"
                      element={
                        <ProtectedRoute role="admin">
                          <AdminRefundPolicy />
                        </ProtectedRoute>
                      }
                    />
                    <Route
                      path="/myProfile"
                      element={
                        <ProtectedRoute role="admin">
                          <MyProfile />
                        </ProtectedRoute>
                      }
                    />
                    <Route path="*" element={<PageNotFound />} />
                  </Routes>
                </MainLayout>
              </>
            }
          />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
