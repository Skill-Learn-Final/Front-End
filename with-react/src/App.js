import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "./styles/App.css";
// import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { Login, Signup, Home, Home1 } from "./pages";
// routes
import Router from './routes';

// layouts
import DashboardLayout from './layouts/dashboard';
import ThemeProvider from './theme';

// components
import { StyledChart } from './components/chart';
import ScrollToTop from './components/scroll-to-top';

function App() {
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
          {/* <Routes>
            <Route path="/" element={<Login theme={theme} />} />
            <Route path="/login" element={<Login theme={theme} />} />
            <Route path="/Signup" element={<Signup theme={theme} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<DashboardLayout />} />
            <Route path="/home1" element={<Home1 />} />
          </Routes> */}
          <Router />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    </HelmetProvider>


    // <HelmetProvider>
    //   <BrowserRouter>
    //     <ThemeProvider>
    //       <ScrollToTop />
    //       <StyledChart />
    //       <Router />
    //     </ThemeProvider>
    //   </BrowserRouter>
    // </HelmetProvider>
  );
}
export default App;
