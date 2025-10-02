import { useState } from "react"

export interface Ticket {
  id: number;
  Content: string;
  Priority: string;
  Status: string;
}

interface SubmitTicketFormProps {
  tickets: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>

}

export default function SubmitTicketForm({ tickets, setTickets}: SubmitTicketFormProps) {
  const [content, setText] = useState("");
  const [priority,  setPriority] = useState("low");
  const [status, setStatus] = useState("open");

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTicket: Ticket = {
      id: tickets.length + 1,
      Content: content,
      Priority: priority,
      Status: status,
    };

    setTickets([...tickets, newTicket]);

    setText("");
    setPriority("low");
    setStatus("open");
  };

  return (
    <form onSubmit={formSubmit} className="w-1/5 mx-auto flex flex-col border font-semibold items-center mt-3 mb-3 ">
      <input
        type="text"
        placeholder="Waiting for input"
        value={content}
        onChange={(event) => setText(event.target.value)}
        className="border mt-5 text-center"/>

      <select value={priority} onChange={(event) => setPriority(event.target.value)} className="text-center border mt-3">
        <option>low</option>
        <option>Medium</option>
        <option>High</option>

      </select>

      <select value={status} onChange={(event) => setStatus(event.target.value)} className="text-center border mt-3">
        <option>Open</option>
        <option>Closed</option>
        <option>Pending</option>

      </select>

      <button type="submit" className="text-center border mt-3 mb-5 px-4 py-0.25 hover:bg-indigo">
        submit
      </button>
    </form>
  );

}