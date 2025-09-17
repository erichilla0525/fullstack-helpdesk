import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        {/* Left Side: Tech Help Desk */}
        <div>
          <h3 className="text-lg font-semibold text-cyan-400 mb-2">
            Tech Help Desk
          </h3>
          <p className="text-sm max-w-sm">
            Providing 24/7 technical assistance to simplify your digital life.
            Our team is committed to delivering fast and reliable solutions.
          </p>
        </div>

        {/* Right Side: Team */}
        <div>
          <h4 className="text-md font-semibold text-cyan-300 mb-2">
            Team: 3 Musketeers
          </h4>
          <ul className="text-sm space-y-1 list-disc list-inside">
            <li>Tong Xu</li>
            <li>Harnoor Gili</li>
            <li>Mowmita Yasmin Eite</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 text-center py-4 text-xs text-gray-400">
        © {new Date().getFullYear()} Tech Help Desk. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;