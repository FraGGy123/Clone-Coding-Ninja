import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Courses from "./components/Courses";
import Footer from "./components/Footer";
import SignUp from "./Pages/SignUp";
import Classroom from "./Pages/Classroom";
import CoursesPage from "./Pages/CoursesPage";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Courses />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:id" element={<CoursesPage />} />
        <Route path="/practice" element={<CoursesPage />} />
        <Route path="/events" element={<CoursesPage />} />
        <Route path="/login" element={<CoursesPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/classroom" element={<Classroom />} />
      </Routes>
    </div>
  );
}