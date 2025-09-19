import ticketData from '../data/ticket.json'

export default function WorkOrder() {
  const submitTicket=() => {
    console.log("submit a ticket");
  }
  const viewTicket=() => {
    console.log("View existing tickets")
  };

  return(
      <div className="ticket-container">
        <button className="ticket-block" onClick={submitTicket}>
          <span className="ticket-icon">🧾</span>
          <div className="ticket-content">
            <h3 className="ticket-title">Submit a work order</h3>
            <p className="ticket-description">Submit a new issue to our department</p>
          </div>
        </button>

        <button className="existing-ticket-block" onClick={viewTicket}>
          <span className="ticket-icon">🧾</span>
          <div className="ticket-content">
            <h3 className="ticket-title">View existing work order</h3>
            <p className="ticket-description">View the history work order been submitted</p>
          </div>
        </button>

        <div className='ticket-list'>
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