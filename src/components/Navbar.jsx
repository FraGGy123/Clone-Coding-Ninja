import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const professionalsMenu = {
  domains: ["Data Analytics", "Generative AI", "Software Development", "Data Science"],
  certifications: {
    "Data Analytics": [
      { institute: "IITM Pravartak, TIH IIT Madras", title: "Professional Certification in Data Analytics with GenAI", tag: null },
      { institute: "IIT Mandi - TIH (Technology & Innovation Hub)", title: "Professional Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
      { institute: "Vishlesan i-hub, IIT Patna", title: "Professional Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
      { institute: "E&ICT Academy, IIT Guwahati", title: "PG Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
    ],
    "Generative AI": [
      { institute: "IIT Delhi", title: "Professional Certification in Generative AI", tag: null },
      { institute: "IIT Bombay", title: "Advanced GenAI Program", tag: "Enrolment closed" },
    ],
    "Software Development": [
      { institute: "IIT Madras", title: "Professional Certification in Full Stack Development", tag: null },
      { institute: "IIT Kanpur", title: "Backend Engineering with Cloud", tag: "Enrolment closed" },
    ],
    "Data Science": [
      { institute: "IIT Roorkee", title: "Professional Certification in Data Science & ML", tag: null },
      { institute: "IIT Kharagpur", title: "PG Program in Data Science", tag: "Enrolment closed" },
    ],
  },
  bootcamps: {
    "Data Analytics": [
      { institute: "Coding Ninjas", title: "Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp" },
      { institute: "IBM and Microsoft PL-300 Certification", title: "Data Analytics with GenAI Program by Coding Ninjas Job Bootcamp" },
    ],
    "Generative AI": [
      { institute: "Coding Ninjas", title: "GenAI Bootcamp with Industry Projects" },
    ],
    "Software Development": [
      { institute: "Coding Ninjas", title: "Full Stack Development Job Bootcamp" },
      { institute: "Microsoft Certification", title: "Azure Developer Bootcamp" },
    ],
    "Data Science": [
      { institute: "Coding Ninjas", title: "Data Science Job Bootcamp with Placement" },
    ],
  },
};

const collegeMenu = {
  domains: ["Data Analytics", "Generative AI", "Software Development", "Data Structures and Algorithms"],
  certifications: {
    "Data Analytics": [
      { institute: "IIT Mandi - TIH (Technology & Innovation Hub)", title: "Advanced Certification in Data Analytics with GenAI", tag: null },
      { institute: "Vishlesan i-hub, IIT Patna", title: "Training and Internship Certification in Data Analytics with GenAI", tag: "Enrolment closed" },
    ],
    "Generative AI": [
      { institute: "IIT Delhi", title: "Generative AI for College Students", tag: null },
    ],
    "Software Development": [
      { institute: "IIT Bombay", title: "Full Stack Development for Students", tag: null },
    ],
    "Data Structures and Algorithms": [
      { institute: "Coding Ninjas", title: "DSA Mastery Program", tag: null },
      { institute: "IIT Kanpur", title: "Competitive Programming Certification", tag: "Enrolment closed" },
    ],
  },
  bootcamps: {
    "Data Analytics": [],
    "Generative AI": [],
    "Software Development": [{ institute: "Coding Ninjas", title: "College Bootcamp for Web Dev" }],
    "Data Structures and Algorithms": [{ institute: "Coding Ninjas", title: "Placement Bootcamp for Students" }],
  },
};

function MegaMenu({ menu, onClose }) {
  const [activeDomain, setActiveDomain] = useState(menu.domains[0]);
  const navigate = useNavigate();
  const certs = menu.certifications[activeDomain] || [];
  const boots = menu.bootcamps[activeDomain] || [];

  return (
    <div className="absolute top-10 left-0 bg-white shadow-2xl rounded-xl z-50 flex overflow-hidden"
      style={{ width: "700px" }}>

      {/* Sidebar */}
      <div className="w-52 border-r border-gray-100 py-4 flex-shrink-0">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest px-4 mb-3">Domain</p>
        {menu.domains.map((domain) => (
          <button
            key={domain}
            onMouseEnter={() => setActiveDomain(domain)}
            className={`w-full flex items-center justify-between px-4 py-2.5 text-sm transition-all ${
              activeDomain === domain
                ? "bg-orange-50 text-orange-500 border-r-2 border-orange-500 font-medium"
                : "text-gray-700 hover:bg-gray-50"
            }`}
          >
            {domain}
            <span className="text-gray-400 text-xs">›</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 p-6 grid grid-cols-2 gap-6 overflow-y-auto max-h-96">

        {/* Certifications */}
        {certs.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Certification with IIT</p>
            <div className="flex flex-col gap-4">
              {certs.map((course, i) => (
                <div
                  key={i}
                  onClick={() => { navigate("/courses"); onClose(); }}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-orange-100 transition">
                    🏛
                  </div>
                  <div>
                    <p className="text-orange-500 text-xs font-semibold group-hover:underline">{course.institute}</p>
                    <p className="text-gray-600 text-xs mt-0.5 leading-snug">{course.title}</p>
                    {course.tag && (
                      <span className="inline-block mt-1 bg-gray-900 text-white text-xs px-2 py-0.5 rounded-full">{course.tag}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bootcamps */}
        {boots.length > 0 && (
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Job bootcamp</p>
            <div className="flex flex-col gap-4">
              {boots.map((course, i) => (
                <div
                  key={i}
                  onClick={() => { navigate("/courses"); onClose(); }}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm flex-shrink-0 group-hover:bg-orange-100 transition">
                    🥷
                  </div>
                  <div>
                    <p className="text-orange-500 text-xs font-semibold group-hover:underline">{course.institute}</p>
                    <p className="text-gray-600 text-xs mt-0.5 leading-snug">{course.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-white z-50">

      <Link to="/">
        <h1 className="text-2xl font-bold text-orange-500">Coding Ninjas</h1>
      </Link>

      <div className="hidden md:flex gap-8 text-sm font-medium items-center">

        {/* For working professionals */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("professionals")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className={`hover:text-orange-500 ${openMenu === "professionals" ? "text-orange-500" : ""}`}>
            For working professionals ▾
          </button>
          {openMenu === "professionals" && (
            <MegaMenu menu={professionalsMenu} onClose={() => setOpenMenu(null)} />
          )}
        </div>

        {/* For College Students */}
        <div
          className="relative"
          onMouseEnter={() => setOpenMenu("college")}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <button className={`hover:text-orange-500 ${openMenu === "college" ? "text-orange-500" : ""}`}>
            For College Students ▾
          </button>
          {openMenu === "college" && (
            <MegaMenu menu={collegeMenu} onClose={() => setOpenMenu(null)} />
          )}
        </div>

        <Link to="/practice" className="hover:text-orange-500">Practice</Link>
        <Link to="/events" className="hover:text-orange-500">Events</Link>
        <Link to="/login" className="hover:text-orange-500">Login</Link>
      </div>

      <Link to="/signup">
        <button className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600">
          Sign Up
        </button>
      </Link>

    </nav>
  );
}