import Header from "../Header/Header";
import Nav from "../Navigation/Nav";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="app-layout">
      <Nav />
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
}

export default Layout;
