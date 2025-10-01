import { Link, useLocation } from "react-router-dom";

interface NavProps {}

function Nav({}: NavProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="flex justify-between items-center w-full px-10 py-3 bg-white border-b border-gray-300 shadow-sm">
      <div className="nav-left">
        <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
          | HelpDesk
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link
          to="/knowledge-base"
          className={`px-4 py-2 border border-gray-300 text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 no-underline ${
            isActive("/knowledge-base")
              ? "bg-gray-100 border-gray-400 font-semibold"
              : "bg-white"
          }`}
        >
          Knowledge Base
        </Link>
        <Link
          to="/profile"
          className={`px-4 py-2 border border-gray-300 text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 no-underline ${
            isActive("/profile")
              ? "bg-gray-100 border-gray-400 font-semibold"
              : "bg-white"
          }`}
        >
          Profile
        </Link>
        <Link
          to="/login"
          className={`px-4 py-2 border border-gray-300 text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400 no-underline ${
            isActive("/login")
              ? "bg-gray-100 border-gray-400 font-semibold"
              : "bg-white"
          }`}
        >
          Login
        </Link>
        <button className="px-4 py-2 border border-gray-300 bg-white text-gray-700 cursor-pointer rounded-md text-sm transition-all duration-200 hover:bg-gray-50 hover:border-gray-400">
          Share
        </button>
      </div>
    </nav>
  );
}

export default Nav;
