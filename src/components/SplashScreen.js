import { useEffect, useState } from "react";
import Logo from "../assets/one11showlogo.png"; // adjust path if needed

export default function SplashScreen({ children }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <div className="fixed inset-0 flex items-center justify-center bg-neutral-900 z-50 transition-opacity duration-700">
          <img
            src={Logo}
            alt="One11 Show Logo"
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72 object-contain animate-pulse"
          />
        </div>
      ) : (
        children
      )}
    </>
  );
}
