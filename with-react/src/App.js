import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
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
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="App"
      >
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/account-info" element={<AccountInfo />} />
            <Route path="/home1" element={<Home1 />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course_detail" element={<CourseDetail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
