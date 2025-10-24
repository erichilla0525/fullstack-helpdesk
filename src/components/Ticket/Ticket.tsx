import { useTickets } from "../Hooks/ticketFormHook";
import type { Ticket } from "../Hooks/ticketFormHook";

export default function WorkOrder() {

  const { tickets } = useTickets()

  return(
      <div className="flex flex-col justify-center mt-5 mb-5 gap-12 ">

        <div className='mx-auto space-y-3 border-2'>
          {tickets.map((ticket:Ticket) => (
            <div key={ticket.id} className='bg-blue-300'>
              <p>id: {ticket.id}</p>
              <p>content: {ticket.content}</p>
              <p>priority: {ticket.priority}</p>
              <p>status: {ticket.status}</p>
            </div>
          ))
          }
        </div>
      </div> 
    );
}