const data_base = "http://localhost:4000/api/tickets"

export async function getTickets() {
    const res = await fetch(data_base)
    if (!res) throw new Error("Failed to fetch tickets from database")
    const result = await res.json()
    return result.data;
}

export async function createTicket(newTicket: { content:string, priority:string, status:string }) {
    const res = await fetch(data_base, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTicket)
    })

    const result = await res.json()
    return result.data;
}

export async function deleteTicket(id:string) {
    const res = await fetch(`${data_base}/${id}`, {
        method: "DELETE",

    });
    const result = await res.json();
    return result.data
}
