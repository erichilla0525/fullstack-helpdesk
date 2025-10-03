import FAQ from "./components/FAQ/Faq";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Nav from "./components/Navigation/Nav";
import { useState } from 'react'
import SearchBar from './components/Searchbar/Searchbar';
import WorkOrder from './components/Ticket/Ticket'
import StatusList from "./components/status-list/StatusList";
import { Routes, Route} from "react-router-dom"
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
    
    return(
        <div>
            <Header />
            <Nav />
            <SearchBar />
            <Routes>
                <Route path="/" element={
                    <>
                        <WorkOrder tickets={tickets} setTickets={setTickets} />
                        <StatusList />
                        <FAQ />
                    </>
                
                }/>
                <Route 
                path="/workorder" 
                element={<WorkOrder tickets={tickets} setTickets={setTickets} />}/>
                <Route 
                path="/ticketform" 
                element={<SubmitTicketForm tickets={tickets} setTickets={setTickets} />}/>
            </Routes>
            <Footer />
        </div>
        
  );
}

export default App;

