// React core library import kar rahe hain (React components banane ke liye)
import React from 'react';

// Browser routing ke liye Routes aur Route import kar rahe hain
import { Routes, Route } from 'react-router-dom';

// Navbar component import kar rahe hain (top navigation bar ke liye)
import Navbar from './components/Navbar';

// Homepage component ya main show form component
import Oneshow from './components/Oneshow';

// Form submit hone ke baad dikhne wala thank you page
import Thank_you from './components/Thank_you';

// indexe.css file link hui hai iss line se 
import "./index.css";

// About page ka component (project ke baare me info)
import About from './Pages/About';

// Gallery page jisme images ya media show hote hain
import Gallery from './Pages/Gallery';

// Footer component (page ke neeche dikhne wala section)
import Footer from './components/Footer';

// Info section component (middle section ke liye ho sakta hai)
import InfoSection from './components/InfoSection';

// Site under development notice ya alert dikhata hoga
/*import DevelopmentNotice from './components/DevelopmentNotice';*/

// Updates component — ye latest updates show karta hai
import Updates from './components/Updates';

// Payment instructions page — kaise payment karna hai uski detail
import PaymentInstructions from './components/PaymentInstructions';

// Join waitlist page — interested log waitlist join kar sakein
import JoinWaitList from './components/JoinWaitList'; // Make sure file yahi naam ka ho

// PopupModal — agar koi popup modal ya alert show karna ho
import PopupModal from './PopupModal';

// Main App function jo pura layout render karta hai
function App() {
  return (
    <>
      {/* Top navbar show hoga har page par */}
      <Navbar />

      {/* Development notice ya maintenance alert */}
     {/* <DevelopmentNotice />*/}

      {/* Routing configuration */}
      <Routes>
        {/* Home page route ("/") */}
        <Route path="/" element={<Oneshow />} />

        {/* Form submit hone ke baad thank you page */}
        <Route path="/submission-successfully" element={<Thank_you />} />

        {/* About page */}
        <Route path="/about" element={<About />} />

        {/* Gallery page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Updates page */}
        <Route path="/updates" element={<Updates />} />

        {/* Waitlist join karne ka page */}
        <Route path="/join" element={<JoinWaitList />} />

        {/* Payment instructions page */}
        <Route path="/payment-instructions" element={<PaymentInstructions />} />
      </Routes>

      {/* Extra information section - kisi bhi informative content ke liye */}
      <InfoSection />

      {/* Footer - har page ke bottom me show hoga */}
      <Footer />

    </>
  );
}

// App component ko export kar rahe hain taaki ye index.js me use ho sake
export default App;
