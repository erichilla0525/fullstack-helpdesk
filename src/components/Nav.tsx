interface NavProps {}

function Nav({}: NavProps) {
  return (
    <nav className="nav">
      <div className="nav-brand">
        <h2>HelpDesk</h2>
      </div>
      <ul className="nav-links">
        <li>
          <a href="#dashboard">Dashboard</a>
        </li>
        <li>
          <a href="#tickets">My Tickets</a>
        </li>
        <li>
          <a href="#submit">Submit Ticket</a>
        </li>
        <li>
          <a href="#knowledge">Knowledge Base</a>
        </li>
        <li>
          <a href="#profile">Profile</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
