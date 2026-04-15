"use client"

import Link from "next/link";

const ErrorPage = () => {
  return (
     <div className="min-h-screen flex items-center justify-center bg-white px-4">
      
      <div className="text-center space-y-6">
        
        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-green-800">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
          Page Not Found
        </h2>

        {/* Description */}
        <p className="text-gray-500 max-w-md mx-auto">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-4 px-6 py-3 rounded-xl bg-green-800 text-white hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Go Back Home
          </button>
        </Link>

      </div>
    </div>
  );
};

export default ErrorPage;