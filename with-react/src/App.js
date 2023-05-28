import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/App.css";
import {
  Login,
  Home,
  Shop,
  Courses,
  CourseDetail,
  Signup,
  Cart,
  Instructor,
  Library,
  Wishlist,
  BuyCurrency,
  ResetPassword,
  PurchaseCourse,
} from "./pages";
import AccountInfo from "pages/AccountInfo";
import ScrollToTop from "./scrollToTop";

import { register } from "swiper/element/bundle";
import { Footer, NavBarP } from "components";
import { useRef, useEffect } from "react";
import LiveClasses from "pages/LiveClasses";
import SwitchAccounts from "pages/SwitchAccounts";

import { LoginProvider } from "LoginContext";
import { ToastContainer, Zoom } from "react-toastify";

register();
function App() {
  let menuRef = useRef();
  // let openState;

  return (
    <BrowserRouter>
      <ScrollToTop />
      <LoginProvider>
        <NavBarP />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account_info" element={<AccountInfo />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/courses" element={<Courses />} />
          {/* <Route path="/course_detail" element={<CourseDetail />} /> */}
          <Route path="/course_detail/:id" element={<CourseDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/instructor/:id" element={<Instructor />} />
          <Route path="/library" element={<Library />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/buycurrency" element={<BuyCurrency />} />
          <Route path="/purchase_course/:id" element={<PurchaseCourse />} />
          <Route path="/live_classes" element={<LiveClasses />} />
          <Route path="/switch_accounts" element={<SwitchAccounts />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route
            path="/reset_password/:id/:token"
            element={<ResetPassword />}
          />
        </Routes>
        {/* <Footer /> */}
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Zoom}
        />
      </LoginProvider>
    </BrowserRouter>
  );
}
export default App;
