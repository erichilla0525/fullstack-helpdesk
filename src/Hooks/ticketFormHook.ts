import { useEffect, useState } from "react";
import * as TicketService from "../Services/ticketFormService";
import { useAuth } from "@clerk/clerk-react";

export interface Ticket {
    id:string;
    content:string;
    priority:string;
    status:string;
}

export function useTickets() {
    const [tickets, setTickets] = useState<Ticket[]>([]);
    const [error, setError] = useState<string | null>(null);
    const { getToken } = useAuth();

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
            const sessionToken = await getToken();
            if(!sessionToken) {
                setError('You need to sign in to submit a ticket')
                return
            }
            const newTicket = await TicketService.createTicket(
                { content, priority, status },
                sessionToken
            );
            
            setTickets((prev) => [...prev, newTicket]);
            setError(null);
        } catch(errorObject) {
            setError(`${errorObject}`);
        }
    }

    async function deleteTicket(id:string) {
        try {
            const sessionToken = await getToken();
            if(!sessionToken) {
                setError('You need to sign in to delete a ticket')
                return
            }
            await TicketService.deleteTicket(id, sessionToken);
            await fetchTickets();
        } catch (errorObject) {
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
        deleteTicket  
    }
}
