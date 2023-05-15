import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import {
  Login,
  Register,
  Home,
  Home1,
  Shop,
  Courses,
  CourseDetail,
  Signup,
} from "./pages";
import AccountInfo from "pages/AccountInfo";
import ScrollToTop from "./scrollToTop";

import { register } from "swiper/element/bundle";
register();
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/account_info" element={<AccountInfo />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course_detail" element={<CourseDetail />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
export default App;
