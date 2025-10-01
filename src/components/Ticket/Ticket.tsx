import type { Ticket } from './SubmitTicketForm';

interface WorkOrderProps {
  tickets: Ticket[];
  setTickets: React.Dispatch<React.SetStateAction<Ticket[]>>

}

export default function WorkOrder({ tickets}: WorkOrderProps) {

  return(
      <div className="flex flex-col justify-center mt-5 mb-5 gap-12">

        <div className='mx-auto space-y-3 border-2'>
          {tickets.map(ticket => (
            <div key={ticket.id}>
              <p>id: {ticket.id}</p>
              <p>content: {ticket.Content}</p>
              <p>priority: {ticket.Priority}</p>
              <p>status: {ticket.Status}</p>
            </div>
          ))
          }
        </div>
      </div> 
    );
}