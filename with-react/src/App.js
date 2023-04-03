import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { Login, Signup, Home, Home1 } from "./pages";

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
          <Routes>
            <Route path="/" element={<Login theme={theme} />} />
            <Route path="/login" element={<Login theme={theme} />} />
            <Route path="/Signup" element={<Signup theme={theme} />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/home1" element={<Home1 />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
