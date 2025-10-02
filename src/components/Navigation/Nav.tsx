interface NavProps {}
import { Link } from "react-router-dom";

function Nav({}: NavProps) {
  return (
    <nav className="flex justify-between items-center w-full px-10 py-3 bg-white border-b border-gray-300 shadow-sm">
      <div className="nav-left">
        <span className="text-xl font-bold text-gray-800">| HelpDesk</span>
      </div>
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
          Knowledge Base
        </button>
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
          Profile
        </button>
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
          Login
        </button>
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
          Share
        </button>

        <Link to="/ticketform">
          <button className="border bg-wh hover: bg-indigo cursor-pointer px-2 py-1 rounded-md">
            Submit ticket
          </button>
        </Link>

        <Link to="/workorder">
          <button className="border hover: bg-amber-600 cursor-pointer px-2 py-1 rounded-md">
            All tickets
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
