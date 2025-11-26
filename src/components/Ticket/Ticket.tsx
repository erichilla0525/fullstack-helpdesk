import { useTickets } from "../../Hooks/ticketFormHook";
import type { Ticket } from "../../Hooks/ticketFormHook";
import { Trash2 } from "lucide-react"

export default function WorkOrder() {

  const { tickets, deleteTicket } = useTickets()

  return(
      <div className="flex flex-col items-center mt-3 mb-3 gap-5">

        <div className='mx-auto space-y-3 border-2'>
          {tickets.map((ticket:Ticket) => (
            <div>
              <div key={ticket.id} className='bg-blue-300 flex justify-between items-center'>
                <div className="w-full">
                  <p>id: {ticket.id}</p>
                  <p>content: {ticket.content}</p>
                  <p>priority: {ticket.priority}</p>
                  <p>status: {ticket.status}</p>
                  
                </div>
                <button type="button" onClick={() => deleteTicket(ticket.id)} className="bg-pink-200 border-2 mt-3 mb-1 mr-1 cursor-pointer">
                  <Trash2 size={20}/>
                </button>
              </div>
              
            </div>
          ))}
        </div>
      </div> 
    );
}