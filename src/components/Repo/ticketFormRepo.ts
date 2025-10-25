import { ticketData } from "../../data/mockedData/mockedTicketFormData";

export function getTickets() {
    return ticketData;
}

export async function createTicket(newTicket: { content:string, priority:string, status:string }) {
    const id = (ticketData.length + 1).toString();
    const ticket = { id, ...newTicket };
    ticketData.push(ticket)
    return ticket
}

export async function deleteTicket(id:string) {
    const index = ticketData.findIndex((e) => e.id === id);
    if (index === -1) {
        throw new Error(`Failed to delete ticket with id ${id}`);
    }
    ticketData.splice(index, 1);
    return ticketData
}
