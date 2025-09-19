import ticketData from '../../data/ticket.json'
import { BsTicketDetailedFill } from "react-icons/bs";


export default function WorkOrder() {
  const submitTicket=() => {
    console.log("submit a ticket");
  }
  const viewTicket=() => {
    console.log("View existing tickets")
  };

  return(
      <div className="flex flex-col justify-center mt-20 gap-12">
        <button className="flex mx-auto border-2" onClick={submitTicket}>
          <div className='relative inline-block'>
            <BsTicketDetailedFill className='text-2xl top-0.5 absolute translate-y-0.5' />
            <div className="ticket-content">
              <h3 className="text-lg font-bold">Submit a work order</h3>
              <p className="text-base">Submit a new issue to our department</p>
            </div>
          </div>
        </button>

        <button className="flex mx-auto border-2 hover:bg-indigo-500" onClick={viewTicket}>
          <div className='relative inline-block'>
            <BsTicketDetailedFill className='text-2xl top-0.5 absolute translate-y-0.5' />
            <div className="ticket-content">
              <h3 className="text-lg font-bold">View existing work order</h3>
              <p className="text-base">View the history work order been submitted</p>
            </div>
          </div>
        </button>

        <div className='mx-auto space-y-3 border-2'>
          {ticketData.tickets.map(ticket => (
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