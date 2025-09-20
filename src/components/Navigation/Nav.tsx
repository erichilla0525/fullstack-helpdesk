import "./Nav.css";

interface NavProps {}

function Nav({}: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-left">
        <span className="brand">| HelpDesk</span>
      </div>
      <div className="nav-right">
        <button className="nav-button">Knowledge Base</button>
        <button className="nav-button">Profile</button>
        <button className="nav-button">Login</button>
        <button className="nav-button">Share</button>
      </div>
    </nav>
  );
}

export default Nav;
