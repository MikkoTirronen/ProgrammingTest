import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import AnogramPageComponent from "./components/pages/AnogramPageComponent";
import PuppiesComponentPage from "./components/pages/PuppiesComponentPage";
import DashboardPageComponent from "./components/pages/DashboardPageComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AnogramPageComponent />} />
      <Route path="/puppies" element={<PuppiesComponentPage />} />
      <Route path="/dashboard" element={<DashboardPageComponent />} />
    </Routes>
  );
}

export default App;
