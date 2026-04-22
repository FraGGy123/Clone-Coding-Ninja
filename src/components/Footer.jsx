import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-10 mt-16">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-3">Coding Ninjas</h3>
          <p className="text-gray-400">Learn coding the smart way.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <p className="text-gray-400">About</p>
          <p className="text-gray-400">Careers</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <p className="text-gray-400">Help Center</p>
          <p className="text-gray-400">Contact</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-8">
        © 2026 Coding Ninjas Clone
      </p>
    </footer>
  );
}