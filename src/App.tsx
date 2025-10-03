import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import SearchBar from "./components/Searchbar/Searchbar";
import WorkOrder from "./components/Ticket/Ticket";
import StatusList from "./components/status-list/StatusList";
import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";

function HomePage() {
  return (
    <div>
      <Header />
      <SearchBar />
      <WorkOrder />
      <StatusList />
      <FAQ />
    </div>
  );
}

function StatusTrackerPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Status Tracker</h2>
      <p className="mb-4">Track the status of all help desk tickets</p>
      <StatusList />
    </div>
  );
}

function KnowledgeBasePage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Knowledge Base</h2>
      <FAQ />
    </div>
  );
}

function ProfilePage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <p>Manage your account settings</p>
      <StatusList />
    </div>
  );
}

function LoginPage() {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <p>Sign in to your account</p>
    </div>
  );
}

function App() {
  const [sharedMessage, setSharedMessage] = useState<string>(
    "Welcome to HelpDesk!"
  );

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/status-tracker" element={<StatusTrackerPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        <Footer />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
