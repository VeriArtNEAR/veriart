// Components

// Others
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import HowItWorksPage from "./pages/Guide/Guide";
import AboutPage from "./pages/About/About";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
