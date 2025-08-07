import React from 'react';

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#1c1c1e] pt-[180px] pb-16 px-6 flex items-center justify-center">
      <div className="max-w-2xl w-full bg-[#2c2c2e] text-[#E2E2E2] rounded-xl shadow-md hover:shadow-[0_0_25px_#ffffff] transition-shadow duration-300 p-10">
        <h1 className="text-4xl font-bold text-center text-white mb-8">
          Terms and Conditions
        </h1>

        <hr className="border-t border-gray-400 mb-6" />

        <p className="mb-5 leading-relaxed text-lg">
          Welcome to our website. By accessing and using this site, you agree to comply with and be bound by the following Terms and Conditions. If you disagree with any part of these terms, please do not use our website.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          The content on this website is for general information and promotional purposes only. We reserve the right to update or modify any content, services, or features at any time without prior notice. It is your responsibility to regularly review these terms to stay informed of any changes.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          You agree to use this site in a lawful manner. You must not misuse the content, introduce malicious software, or attempt to gain unauthorized access to the server or databases connected to the site. Any violation of these terms may result in legal action.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          All trademarks, logos, graphics, and content on this website are the property of their respective owners. Unauthorized copying, reproduction, or redistribution of any material is strictly prohibited unless explicitly permitted in writing.
        </p>

        <hr className="border-t border-gray-400 my-6" />

        <p className="mb-5 leading-relaxed text-lg">
          We may include links to third-party websites for your convenience. These external sites are not under our control, and we are not responsible for their content or practices.
        </p>

        <hr className="border-t border-gray-400 mt-6" />
      </div>
    </div>
  );
};

export default TermsAndConditions;
