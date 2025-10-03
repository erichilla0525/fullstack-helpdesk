import Nav from "../Navigation/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <Nav />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
