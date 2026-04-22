import React from "react";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "Full Stack Development",
    desc: "Become a full stack developer with MERN stack",
    price: "₹4999",
  },
  {
    title: "Data Structures & Algorithms",
    desc: "Crack coding interviews at top companies",
    price: "₹3999",
  },
  {
    title: "Machine Learning",
    desc: "Build intelligent systems using AI",
    price: "₹5999",
  },
];

export default function Courses() {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-10">
      <h2 className="text-3xl font-bold text-center mb-10">
        Trending Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.title}
            className="p-6 border rounded-2xl hover:shadow-xl transition bg-white"
          >
            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
            <p className="text-gray-600 mb-4">{course.desc}</p>
            <p className="font-bold mb-4">{course.price}</p>
            <button
              onClick={() => navigate("/signup")}
              className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600"
            >
              Enroll Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}