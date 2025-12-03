import * as ticketRepo from "../Repo/ticketFormRepo";

export async function fetchTickets() {
    const tickets = await ticketRepo.getTickets();
    return tickets;
}

export async function createTicket(
    ticket: { content:string, priority:string, status:string},
    sessionToken: string) 
    {
    return await ticketRepo.createTicket(ticket, sessionToken);
}

export async function deleteTicket(id:string, sessionToken: string) {
    return await ticketRepo.deleteTicket(id, sessionToken);
}

export async function validateTicket(ticket: { content:string, priority:string, status:string }) {
    const validateErrors = new Map<string, string>();

    if (!ticket.content?.trim()) validateErrors.set("Content", "Ticket content must be defined.");
    
    return validateErrors
}
