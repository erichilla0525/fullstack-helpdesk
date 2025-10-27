import { useState } from "react"
import { useTickets } from "../Hooks/ticketFormHook";
import { useHover } from "../Hooks/hoverHook";

export default function SubmitTicketForm() {
  const { createTicket } = useTickets();
  const hoverStatus = useHover();

  const [content, setText] = useState("");
  const [priority,  setPriority] = useState("low");
  const [status, setStatus] = useState("open");

  const formSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    await createTicket(content,priority,status)

    setText("");
    setPriority("low");
    setStatus("open");
  };

  return (
    <main>
      <form onSubmit={formSubmit} className="w-1/5 mx-auto flex flex-col border font-semibold items-center mt-3 mb-3 bg-blue-50">
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

        <button type="submit" 
        onMouseEnter={hoverStatus.onMouseEnter}
        onMouseLeave={hoverStatus.onMouseLeave}
        className={`text-center border mt-3 mb-5 px-4 py-1 cursor-pointer
          ${hoverStatus.isHovered ? "bg-blue-400" : "bg-pink-300"}`}>
          submit
        </button>

      </form>
    </main>

    
  );

}