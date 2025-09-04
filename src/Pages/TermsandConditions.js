import React from "react";

const TermsandConditions = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
      style={{
        backgroundImage: "url('/TermsandCondition.webp')",
        backgroundSize: "Cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <h1
        className="text-center font-bold mt-32"
        style={{
          fontSize: "clamp(40px, 8vw, 80px)",
          fontFamily: "'Anton', sans-serif",
        }}
      >
        TERMS AND CONDITIONS
      </h1>

      {/* Content */}
      <div
        className="max-w-4xl p-8 rounded-xl"
        style={{
          fontFamily: "'Montserrat', sans-serif",
        }}
      >
        <ul
          className="list-disc pl-6 space-y-4"
          style={{
            fontSize: "clamp(16px, 2vw, 19px)",
            color: "white",
          }}
        >
          <li>
            Welcome to our website. By accessing and using this site, you agree
            to comply with and be bound by the following Terms and Conditions.
            If you disagree with any part of these terms, please do not use our
            website.
          </li>
          <li>
            The content on this website is for general information and
            promotional purposes only. We reserve the right to update or modify
            any content, services, or features at any time without prior notice.
            It is your responsibility to regularly review these terms to stay
            informed of any changes.
          </li>
          <li>
            You agree to use this site in a lawful manner. You must not misuse
            the content, introduce malicious software, or attempt to gain
            unauthorized access to the server or databases connected to the
            site. Any violation of these terms may result in legal action.
          </li>
          <li>
            Cookies are small data files stored on your device to enhance site
            functionality. You may disable cookies in your browser settings, but
            some features of the site may not function as intended without them.
          </li>
          <li>
            All trademarks, logos, graphics, and content on this website are the
            property of their respective owners. Unauthorized copying,
            reproduction, or redistribution of any material is strictly
            prohibited unless explicitly permitted in writing.
          </li>
          <li>
            We may include links to third-party websites for your convenience.
            These external sites are not under our control, and we are not
            responsible for their content or practices.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsandConditions;
