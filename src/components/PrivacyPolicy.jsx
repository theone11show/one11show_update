import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-[#2c2c2e] text-[#E2E2E2] rounded-xl shadow-md hover:shadow-[0_0_25px_#ffffff] transition-shadow duration-300 p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Privacy Policy
        </h1>

        <hr className="border-t border-gray-400 mb-6" />

        <p className="mb-5 leading-relaxed text-lg">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you interact with our website.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          When you visit our site, we may collect certain data such as your name, email address, IP address, and device information. This information helps us improve the user experience, personalize content, and analyze site performance.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          We do not sell, rent, or share your personal information with third parties unless required by law or if you give us explicit permission. We may use secure third-party services (such as analytics tools) to better understand our audience, and these tools may use cookies or tracking technologies.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          Cookies are small data files stored on your device to enhance site functionality. You may disable cookies in your browser settings, but some features of the site may not function as intended without them.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          We take data security seriously and use standard measures to protect your information from unauthorized access. However, please understand that no internet-based system is 100% secure.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="leading-relaxed text-lg">
          By continuing to use our website, you consent to the terms of this privacy policy. If you have any questions or requests regarding your data, feel free to contact us through the information provided on our site.
        </p>

        <hr className="border-t border-gray-400 mt-6" />
      </div>
    </div>
  );
};

export default PrivacyPolicy;
