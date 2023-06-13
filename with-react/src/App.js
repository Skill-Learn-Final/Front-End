import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./styles/App.css";

import ScrollToTop from "./scrollToTop";

import { register } from "swiper/element/bundle";
import { useRef, useEffect, useContext } from "react";

import { LoginContext, LoginProvider } from "LoginContext";
import { ToastContainer, Zoom } from "react-toastify";
import ThemeProvider from "theme";
import { theme } from "styles/theme";
import Router from "./routes";
import { useLocalStorage } from "hooks/useLocalStorage";
import { useUser } from "hooks/useUser";

register();
function App() {
  let menuRef = useRef();
  const { addUser } = useUser();
  const { getItem } = useLocalStorage();
  // let openState;
  // const {user} = useContext(LoginContext);

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(user);
    }
  }, []);

  return (
    <LoginProvider>
      {/* <Footer /> */}
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
            </BrowserRouter>
          </div>
        </ThemeProvider>
      </HelmetProvider>
    </LoginProvider>
  );
}
export default App;
