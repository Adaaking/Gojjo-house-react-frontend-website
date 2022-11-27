import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import FeaturedForSell from "./components/FeaturedForSell";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Profile from "./components/Profile";
import Signup from "./components/Signup";
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
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
