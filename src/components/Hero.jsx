import React from "react";
import { useNavigate } from "react-router-dom";
import ninjaLogo from "../assets/pngkit_ninja-logo.png";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10 py-16 bg-gradient-to-r from-orange-50 to-white">
      <div className="max-w-xl">
        <h2 className="text-5xl font-bold leading-tight mb-6">
          Become a <span className="text-orange-500">Job-Ready Developer</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Learn coding with structured courses, mentorship & real projects.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/courses")}
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
          >
            Explore Courses
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="border px-6 py-3 rounded-lg hover:bg-gray-50"
          >
            View Programs
          </button>
        </div>
      </div>

      <img
        src={ninjaLogo}
        alt="Coding Ninja Logo"
        className="w-80 mt-10 md:mt-0"
      />
    </section>
  );
}