"use client"

import Link from "next/link";

const NotFoundPage = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <div className="text-center space-y-6">
        
        {/* Emoji / Icon */}
        <div className="text-6xl">🚫</div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-green-800">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          The page you’re trying to access doesn’t exist or might have been removed.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-4 px-6 py-3 rounded-xl bg-green-800 text-white hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105">
            Back to Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default NotFoundPage;