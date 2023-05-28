import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/App.css";

import ScrollToTop from "./scrollToTop";

import { register } from "swiper/element/bundle";
import { useRef, useEffect } from "react";

import { LoginProvider } from "LoginContext";
import { ToastContainer, Zoom } from "react-toastify";
import ThemeProvider from "theme";
import { theme } from "styles/theme";
import Router from "./routes";

register();
function App() {
  let menuRef = useRef();
  // let openState;

  return (
    <HelmetProvider>
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
            <LoginProvider>
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
              <Router />
            </LoginProvider>
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
}
export default App;
