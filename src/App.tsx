import FAQ from "./components/FAQ/Faq";
import Nav from "./components/Navigation/Nav";
import SearchBar from './components/Searchbar/Searchbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Layout from "./components/Layout/Layout";
import Header from "./components/Header/Header";
import WorkOrder from "./components/Ticket/Ticket";
import StatusList from "./components/status-list/StatusList";
import Footer from "./components/Footer/Footer";
import SubmitTicketForm from "./components/Ticket/SubmitTicketForm";
import type { Ticket } from "./components/Ticket/SubmitTicketForm"
import ticketData from "./data/ticket.json"
        
function App() {
 
  const [tickets, setTickets] = useState<Ticket[]>(
        ticketData.tickets.map((ticket) => ({
            id: Number(ticket.id), 
            Content: ticket.Content, 
            Priority: ticket.Priority,
            Status: ticket.Status,
        }))
);
  
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
                <WorkOrder tickets={tickets} setTickets={setTickets} />
                <StatusList />
                <FAQ />
            </>
          }/>
          
          <Route 
          path="/workorder" 
          element={
            <>
            <Header />
            <WorkOrder tickets={tickets} setTickets={setTickets} />
            </>
        }/>

          <Route 
          path="/ticketform" 
          element={
          <>
          <Header/>
          <SubmitTicketForm tickets={tickets} setTickets={setTickets} />
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

