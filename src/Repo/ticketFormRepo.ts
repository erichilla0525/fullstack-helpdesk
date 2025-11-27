const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/tickets`;

export async function getTickets() {
    const res = await fetch(BASE_URL)
    if (!res) throw new Error("Failed to fetch tickets from database")
    const result = await res.json()
    return result;
}

export async function createTicket(newTicket: { content:string, priority:string, status:string }, sessionToken: string) {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Authorization: `Bearer ${sessionToken}`,
        },
        body: JSON.stringify(newTicket)
    })

    const result = await res.json()
    return result;
}

export async function deleteTicket(id:string, sessionToken: string) {
    const res = await fetch(`${BASE_URL}/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${sessionToken}`,
        }

    });
    const result = await res.json();
    return result;
}
