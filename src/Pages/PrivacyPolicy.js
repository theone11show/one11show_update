import React from "react";

const Privacypolicy = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white px-6 py-16"
      style={{
        backgroundImage: "url('/privacybg.webp')", 
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Title */}
      <h1
        className="text-center font-bold mt-24"
        style={{
          fontSize: "clamp(40px, 8vw, 80px)",
          fontFamily: "'Anton', sans-serif",
        }}
      >
        Privacy Policy
      </h1>

      {/* Content */}
      <div
        className="max-w-4xl  p-8 rounded-xl"
        style={{
          fontFamily: "'Poppins', sans-serif",
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
            Your privacy is important to us. This Privacy Policy outlines how
            we collect, use, and protect your personal information when you
            interact with our website.
          </li>
          <li>
            When you visit our site, we may collect certain data such as your
            name, email address, IP address, and device information. This
            information helps us improve the user experience, personalize
            content, and analyze site performance.
          </li>
          <li>
            We do not sell, rent, or share your personal information with third
            parties unless required by law or if you give us explicit
            permission. We may use secure third-party services (such as
            analytics tools) to better understand our audience, and these tools
            may use cookies or tracking technologies.
          </li>
          <li>
            Cookies are small data files stored on your device to enhance site
            functionality. You may disable cookies in your browser settings,
            but some features of the site may not function as intended without
            them.
          </li>
          <li>
            We take data security seriously and use standard measures to
            protect your information from unauthorized access. However, please
            understand that no internet-based system is 100% secure.
          </li>
          <li>
            By continuing to use our website, you consent to the terms of this
            privacy policy. If you have any questions or requests regarding your
            data, feel free to contact us through the information provided on
            our site.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Privacypolicy;
