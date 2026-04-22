import React from "react";
import { Link } from "react-router-dom";

export default function Classroom() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 border-b shadow-sm">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm">C</span>
            <span className="font-semibold text-gray-800">Classroom</span>
          </div>
          <div className="flex items-center gap-1 text-gray-700 font-medium cursor-pointer hover:text-orange-500">
            <span>Code 360</span>
            <span className="text-xs">↗</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-orange-600">
            🎉 New
          </button>
          <button className="text-gray-600 text-sm flex items-center gap-1 hover:text-orange-500">
            ❓ Help & support
          </button>
          <button className="text-gray-600 text-xl">🔔</button>
          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium cursor-pointer">
            U
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
        
        {/* Illustration */}
        <div className="mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6598/6598519.png"
            alt="Student learning"
            className="w-72 mx-auto opacity-90"
          />
        </div>

        {/* Text */}
        <p className="text-xl text-gray-800 font-medium max-w-lg mb-8 leading-relaxed">
          Boost your career with in-demand coding skills. Explore our coding courses.
        </p>

        {/* Button */}
        <Link to="/courses/fullstack">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-orange-600 transition flex items-center gap-2">
            Explore our courses ↗
          </button>
        </Link>
      </div>

      {/* Right Sidebar Icons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 bg-white border-l py-6 px-3 shadow-md">
        <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-500 hover:text-orange-500">
          <span className="text-xl">🔄</span>
          <span className="text-xs">Refer & earn</span>
        </div>
        <div className="flex flex-col items-center gap-1 cursor-pointer text-gray-500 hover:text-orange-500">
          <span className="text-xl">💬</span>
          <span className="text-xs">Feedback</span>
        </div>
      </div>

    </div>
  );
}