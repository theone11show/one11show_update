import React, { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";

const NewsLetter = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // success/error message

  // Clear message after 2 seconds automatically
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 2000);
      return () => clearTimeout(timer); // cleanup
    }
  }, [message]);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwJ7c-fzXL261dr5inJkRC5_5Ptfzbns2in6K_k8Gqoe7Xux0xWPWE2VZfpcq5v8vs0kQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
         
    body: JSON.stringify({
      email,
      apiKey: apiKey,
    }),
        }
      );

      setMessage("Thank you, your sign up request was successful!");
      setEmail(""); // clear input
    } catch (err) {
      console.error("Error:", err);
      setMessage("Something went wrong, please try again.");
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-gray-300 to-gray-100 py-10 px-6 shadow-lg">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row items-center justify-between gap-4 w-full"
      >
        {/* Left - Title */}
        <h2 className="text-[56px] font-anton text-white tracking-wide drop-shadow-lg">
          NEWSLETTER
        </h2>

        {/* Center + Right */}
        <div className="flex flex-col flex-1 relative">
          <div className="flex items-center justify-between">
            {/* Input Box */}
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="ml-4 bg-transparent border-none outline-none text-gray-600 
           font-montserrat tracking-wide leading-none flex-1 font-[Poppins] placeholder:font-[Poppins]"
style={{
  fontSize: "clamp(14px, 3vw, 18px)",
}}

            {/* Subscribe Button */}
            <button
              type="submit"
              className="flex items-center gap-2 text-black 
                         text-[16px] md:text-[21px] font-montserrat 
                         px-4 md:px-6 py-2 
                         hover:text-[#d0021a] transition 
                         mr-4 md:mr-20"
            >
              <FiMail className="text-2xl md:text-4xl text-gray-500" />
              Subscribe
            </button>
          </div>

          {/* Divider */}
          <div className="absolute -bottom-2 left-4 right-0 h-[2px] bg-gradient-to-r from-[#d0021a] to-gray-700"></div>
        </div>
      </form>

      {/* Success/Error Message */}
      {message && (
        <p className="mt-4 text-lg text-gray-500 font-montserrat text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default NewsLetter;
