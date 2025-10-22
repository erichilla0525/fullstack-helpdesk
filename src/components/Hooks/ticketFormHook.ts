import { useEffect, useState } from "react";
import * as TicketService from "../Services/ticketFormService";

export interface Ticket {
    id:string;
    content:string;
    priority:string;
    status:string;
}

export function useTickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [error, setError] = useState<string | null>(null);

    async function fetchTickets() {
        try {
            const data = await TicketService.fetchTickets();
            setTickets(data);
            setError(null);
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    async function createTicket(content:string, priority:string, status:string) {
        if (!content.trim()) {
            setError("Ticket content is required here.");
            return;
        }

        try {
            const newTicket = await TicketService.createTicket({ content, priority, status });
            setTickets((prev) => [...prev, newTicket]);
            setError(null);
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    useEffect(() => {
        fetchTickets();
    }, []);

    return {
        tickets,
        error,
        createTicket,
        
    }


}