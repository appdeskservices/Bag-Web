import React from "react";
import DashboardPage from "./pages/Dashboard";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleOrderPage from "./pages/SingleOrderPage";
import SignInComponent from "./component/SignInComponent/SignInComponent";
import { ToastContainer } from "react-toastify";
import SignUpComponent from "./component/SignUpComponent/SignUpComponent";
import ForgotPasswordComponent from "./component/ForgotPasswordComponent/ForgotPasswordComponent";
import VerificationComponent from "./component/VerificationComponent/VerificationComponent";
import ResetPasswordComponent from "./component/ResetPasswordComponent/ResetPasswordComponent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInComponent />} />
        <Route path="/sign-in" element={<SignInComponent />} />
        <Route path="/sign-up" element={<SignUpComponent />} />
        <Route path="/forgot-password" element={<ForgotPasswordComponent />} />
        <Route
          path="/verify-email"
          element={<VerificationComponent page={"verifyEmail"} />}
        />
        <Route
          path="/verify-password-reset-code"
          element={<VerificationComponent page={"verifyPasswordResetCode"} />}
        />
        <Route path="/reset-password" element={<ResetPasswordComponent />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/order/:id" element={<SingleOrderPage />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;
