import React, { useState } from "react";
import { Link } from "react-router-dom";

const domains = ["Data Analytics", "Generative AI", "Software Development", "Data Science"];

const coursesData = {
  "Data Analytics": {
    certifications: [
      { institute: "IITM Pravartak, TIH IIT Madras", title: "Professional Certification in Data Analytics with GenAI", tag: null },
      { institute: "IIT Mandi - TIH (Technology & Innovation Hub)", title: "Professional Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
      { institute: "Vishlesan i-hub, IIT Patna", title: "Professional Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
      { institute: "E&ICT Academy, IIT Guwahati", title: "PG Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
    ],
    bootcamps: [
      { institute: "Coding Ninjas", title: "Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp", tag: null },
      { institute: "IBM and Microsoft PL-300 Certification", title: "Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp", tag: null },
    ],
  },
  "Generative AI": {
    certifications: [
      { institute: "IIT Delhi", title: "Professional Certification in Generative AI", tag: null },
      { institute: "IIT Bombay", title: "Advanced GenAI Program", tag: "Enrolment closed" },
    ],
    bootcamps: [
      { institute: "Coding Ninjas", title: "GenAI Bootcamp with Industry Projects", tag: null },
    ],
  },
  "Software Development": {
    certifications: [
      { institute: "IIT Madras", title: "Professional Certification in Full Stack Development", tag: null },
      { institute: "IIT Kanpur", title: "Backend Engineering with Cloud", tag: "Enrolment closed" },
    ],
    bootcamps: [
      { institute: "Coding Ninjas", title: "Full Stack Development Job Bootcamp", tag: null },
      { institute: "Microsoft Certification", title: "Azure Developer Bootcamp", tag: null },
    ],
  },
  "Data Science": {
    certifications: [
      { institute: "IIT Roorkee", title: "Professional Certification in Data Science & ML", tag: null },
      { institute: "IIT Kharagpur", title: "PG Program in Data Science", tag: "Enrolment closed" },
    ],
    bootcamps: [
      { institute: "Coding Ninjas", title: "Data Science Job Bootcamp with Placement", tag: null },
    ],
  },
};

const instituteIcons = {
  "IITM Pravartak, TIH IIT Madras": "🏛",
  "IIT Mandi - TIH (Technology & Innovation Hub)": "🔷",
  "Vishlesan i-hub, IIT Patna": "⚙️",
  "E&ICT Academy, IIT Guwahati": "🌐",
  "Coding Ninjas": "🥷",
  "IBM and Microsoft PL-300 Certification": "💼",
  "IIT Delhi": "🏛",
  "IIT Bombay": "🏛",
  "IIT Madras": "🏛",
  "IIT Kanpur": "🏛",
  "IIT Roorkee": "🏛",
  "IIT Kharagpur": "🏛",
  "Microsoft Certification": "💼",
};

export default function CoursesPage() {
  const [activeDomain, setActiveDomain] = useState("Data Analytics");
  const current = coursesData[activeDomain];

  return (
    <div className="min-h-screen bg-white">

      {/* Top Banner */}
      <div className="bg-gradient-to-r from-pink-100 to-blue-100 text-center py-2 text-sm">
        ✨ Become AI ready —{" "}
        <span className="underline font-semibold cursor-pointer">check our AI courses</span>
      </div>

      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 bg-white border-b sticky top-0 z-50">
        <Link to="/"><h1 className="text-2xl font-bold text-orange-500">coding<span className="text-gray-900">ninjas</span></h1></Link>
        <div className="flex gap-8 text-sm font-medium text-gray-700">
          <span className="cursor-pointer hover:text-orange-500">For working professionals ▾</span>
          <span className="cursor-pointer hover:text-orange-500">For College Students ▾</span>
        </div>
        <Link to="/classroom">
          <button className="border border-gray-800 px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-100">My Classroom</button>
        </Link>
      </nav>

      {/* Big Background Text */}
      <div className="relative overflow-hidden">
        <h1 className="text-center text-8xl md:text-9xl font-extrabold text-gray-100 tracking-widest uppercase select-none py-6">
          OUR COURSES
        </h1>
      </div>

      {/* Main Content */}
      <div className="flex border-t border-gray-100 min-h-screen">

        {/* Sidebar */}
        <div className="w-64 border-r border-gray-100 py-6 flex-shrink-0">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-6 mb-4">Domain</p>
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`w-full flex items-center justify-between px-6 py-3 text-sm font-medium transition-all ${
                activeDomain === domain
                  ? "bg-orange-50 text-orange-500 border-r-2 border-orange-500"
                  : "text-gray-700 hover:bg-gray-50 hover:text-orange-500"
              }`}
            >
              {domain}
              <span className="text-gray-400">›</span>
            </button>
          ))}
        </div>

        {/* Course Listings */}
        <div className="flex-1 p-10">
          <div className="grid grid-cols-2 gap-10">

            {/* Certification with IIT */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Certification with IIT
              </p>
              <div className="flex flex-col gap-6">
                {current.certifications.map((course, i) => (
                  <div key={i} className="flex items-start gap-4 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-orange-100 transition">
                      {instituteIcons[course.institute] || "🏛"}
                    </div>
                    <div>
                      <p className="text-orange-500 text-sm font-semibold group-hover:underline">
                        {course.institute}
                      </p>
                      <p className="text-gray-700 text-sm mt-1">{course.title}</p>
                      {course.tag && (
                        <span className="inline-block mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                          {course.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Bootcamp */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-6">
                Job bootcamp
              </p>
              <div className="flex flex-col gap-6">
                {current.bootcamps.map((course, i) => (
                  <div key={i} className="flex items-start gap-4 cursor-pointer group">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-lg flex-shrink-0 group-hover:bg-orange-100 transition">
                      {instituteIcons[course.institute] || "🥷"}
                    </div>
                    <div>
                      <p className="text-orange-500 text-sm font-semibold group-hover:underline">
                        {course.institute}
                      </p>
                      <p className="text-gray-700 text-sm mt-1">{course.title}</p>
                      {course.tag && (
                        <span className="inline-block mt-2 bg-gray-900 text-white text-xs px-3 py-1 rounded-full">
                          {course.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Bottom Dark Section */}
      <div className="bg-gray-950 text-white py-10 px-10 text-center">
        <p className="text-5xl font-extrabold text-gray-700 tracking-widest uppercase mb-6">
          Coding Ninjas
        </p>
        <div className="flex justify-center gap-6">
          <Link to="/signup">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">
              Explore Job Bootcamp
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600">
              Explore IIT Certifications
            </button>
          </Link>
        </div>
      </div>

    </div>
  );
}