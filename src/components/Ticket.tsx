export default function WorkOrder() {
  const submitTicket=() => {
    console.log("submit a ticket");
  };
  return(
    <>
      <div className="ticket-container">
        <button className="ticket-block" onClick={submitTicket}>
          <span className="ticket-icon">🧾</span>
          <div className="ticket-content">
            <h3 className="ticket-title">Submit a work order</h3>
            <p className="ticket-description">Submit a new issue to our department</p>
          </div>
          
        </button>
      </div>   
    </>  
    );
}