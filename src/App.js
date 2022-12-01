import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, redirect, Redirect, Route, Routes } from "react-router-dom";
import Buy from "./components/Buy";
import Contact from "./pages/Contact";
import FeaturedForSell from "./components/FeaturedForSell";
import Footer from "./components/Footer";
import ForsellHero from "./components/ForSellHero";
import Forsell from "./components/ForSellHero";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import Platform from "./components/Platform";
import Testimonials from "./components/Testimonials";
import Login from "./pages/Login";
import Profile from './components/Profile'
import Signup from "./pages/Signup";
import Rent from "./components/Rent";

function App() {
  const user = useSelector(state=> state.auth.user)
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
          <Route path="/buy" element={<>
            <ForsellHero/>,
            <Buy/>
          </>}/>
          <Route path="/rent" element={<>
            <ForsellHero/>,
            <Rent/>,
          </>}/>
          <Route path="/profile" element={user?<Profile/> : <Navigate to = '/login'/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
