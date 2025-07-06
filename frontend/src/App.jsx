// Components

// Others
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowItWorksPage from "./pages/Guide/Guide";
import AboutPage from "./pages/About/About";
import ArtworkRegistrationPage from "./pages/ArtworkRegistration/ArtworkRegistration";
import ArtistDashboardPage from "./pages/Dashboard/Dashboard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<ArtworkRegistrationPage />} />
        <Route path="/dashboard" element={<ArtistDashboardPage />} />
      </Routes>
    </>
  );
}

export default App;
