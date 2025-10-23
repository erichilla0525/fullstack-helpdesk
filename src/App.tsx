import FAQ from "./components/FAQ/Faq";
import SearchBar from './components/Searchbar/Searchbar';
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import WorkOrder from "./components/Ticket/Ticket";
import StatusList from "./components/status-list/StatusList";
import Footer from "./components/Footer/Footer";
import SubmitTicketForm from "./components/Ticket/SubmitTicketForm";
        
function App() {
   
  return (
    <>
      <Layout>
        <Routes>
          <Route 
            path="/" 
            element={
            <>  
                <Header />
                <SearchBar />
                <WorkOrder />
                <StatusList />
                <FAQ />
            </>
          }/>
          
          <Route 
          path="/workorder" 
          element={
            <>
            <Header />
            <WorkOrder />
            </>
        }/>

          <Route 
          path="/ticketform" 
          element={
          <>
          <Header/>
          <SubmitTicketForm />
          </>
        }/>
          
          <Route path="/faq" element={<FAQ />} />
          
          <Route
            path="/status-tracker" 
            element={
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Status Tracker</h2>
                <p className="mb-4">Track the status of all help desk tickets</p>
               <StatusList />
              </div>
              }
            />
          
          <Route 
            path="/knowledge-base" 
            element={
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Knowledge Base</h2>
                <p>Browse our knowledge base articles and documentation.</p>
              </div>
              } 
            />
          
          <Route 
            path="/profile" 
            element={
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Profile</h2>
                <p className="mb-4">Manage your account settings</p>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h3 className="text-xl font-semibold mb-3">User Information</h3>
                  <p>Username: user@helpdesk.com</p>
                  <p>Role: IT Support Agent</p>
                  <p>Active Tickets: 5</p>
                </div>
              </div>
              } 
            />
          
          <Route 
            path="/login" 
            element={
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <p>Sign in to your account</p>
              </div>
              } 
            />
        </Routes>
        <Footer />
      </Layout>
    </>
  );
}

export default App;

