import React from "react";

export default function Stats() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-4 text-center py-10 bg-gray-50">
      <div>
        <h3 className="text-2xl font-bold">1M+</h3>
        <p className="text-gray-500">Students</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">100+</h3>
        <p className="text-gray-500">Courses</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">500+</h3>
        <p className="text-gray-500">Mentors</p>
      </div>
      <div>
        <h3 className="text-2xl font-bold">95%</h3>
        <p className="text-gray-500">Success Rate</p>
      </div>
    </section>
  );
}