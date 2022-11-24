import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeaturedForSell from "./components/FeaturedForSell";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <Hero />
                <Platform />
                <HowItWorks />
                <FeaturedForSell />
                <Testimonials />
              </>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
