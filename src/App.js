import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your SplashScreen
import SplashScreen from "./components/SplashScreen";

// Your existing imports...
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/scrollToTop";
import Oneshow from "./components/Oneshow";
import Thank_you from "./components/Thank_you";
import Aboutus from "./Pages/Aboutus";
import Gallery from "./Pages/Gallery";
import Updates from "./components/Updates";
import JoinWaitList from "./components/JoinWaitList";
import RegisterForm from "./components/RegisterForm";
import TermsandCondition from "./components/TermsandCondition";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import OurMission from "./components/OurMission";
import InfoSection from "./components/InfoSection";
import MusicBattleEvents from "./Pages/MusicBattleEvents";
import Day1 from "./Pages/Day1";
import Day2 from "./Pages/Day2";
import Event from "./components/Event";
import Footer from "./components/Footer";
import Faq from "./Pages/Faq";
import "./index.css";

function App() {
  return (
    <SplashScreen>
      {/* Top navbar will always show */}
      <Navbar />
      {/* Makes sure page scrolls to top on route change */}
      <ScrollToTop />

      {/* Website routes */}
      <Routes>
        {/* Home page (main landing page) */}
        <Route path="/" element={<Oneshow />} />

        {/* Thank you page (after form submission) */}
        <Route path="/submission-successfully" element={<Thank_you />} />

        {/* About us page */}
        <Route path="/about" element={<Aboutus />} />

        {/* Gallery page (images & media) */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Updates page (latest news/info) */}
        <Route path="/updates" element={<Updates />} />

        {/* Join waitlist page */}
        <Route path="/join" element={<JoinWaitList />} />

       
        {/* Registration form page */}
        <Route path="/register" element={<RegisterForm />} />

        {/* Terms and Conditions page */}
        <Route path="/TermsandCondition" element={<TermsandCondition />} />

        {/* Privacy Policy page */}
        <Route path="/Policy" element={<PrivacyPolicy />} />

        {/* Our Mission page */}
        <Route path="/OurMission" element={<OurMission />} />

       

     

        {/* Music Battle Events (event schedule overview) */}
        <Route path="/eventSchedule" element={<MusicBattleEvents />} />

        {/* Day 1 events schedule */}
        <Route path="/day1-events" element={<Day1 />} />

        {/* Day 2 events schedule */}
        <Route path="/day2-events" element={<Day2 />} />

         {/* Faq page */}
        <Route path="/Faq" element={<Faq/>} />
      </Routes>

      {/* Footer will always show */}
      <Footer />
    </SplashScreen>
  );
}

export default App;
