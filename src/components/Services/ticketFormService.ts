import * as ticketRepo from "../Repo/ticketFormRepo";

export async function fetchTickets() {
    const tickets = await ticketRepo.getTickets();
    return tickets;
}

export async function createTicket(ticket: { content:string, priority:string, status:string}) {
    return await ticketRepo.createTicket(ticket)
}

export async function deleteTicket(id:string) {
    return await ticketRepo.deleteTicket(id);
}

export async function validateTicket(ticket: { content:string, priority:string, status:string }) {
    const validateErrors = new Map<string, string>();

    if (!ticket.content?.trim()) validateErrors.set("Content", "Ticket content must be defined.");
    
    return validateErrors
}
