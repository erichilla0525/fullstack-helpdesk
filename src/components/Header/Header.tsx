interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header className="header">
      <h1 className="text-4xl font-bold mb-2">Technical Help Desk</h1>
      <p>Your IT support solution - Submit tickets, track progress, get help</p>
    </header>
  );
}

export default Header;
