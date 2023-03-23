import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./styles/theme";
import { Login, Register } from "./pages";
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
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}
export default App;
