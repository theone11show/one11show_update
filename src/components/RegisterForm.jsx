import React from 'react';

const RegisterForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-white/10 border border-white/20 backdrop-blur-sm text-white rounded-2xl shadow-xl p-8 max-w-xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500 mb-4">
          Registration Closed
        </h2>
        <p className="text-lg md:text-xl text-gray-200">
          Please wait for future updates. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
