interface StatusListProps {}

function StatusList({}: StatusListProps) {
  const systemStatuses = [
    { id: 1, service: "Help Desk System", status: "Online" },
    { id: 2, service: "Ticket Database", status: "Connected" },
    { id: 3, service: "Email Service", status: "Active" },
    { id: 4, service: "User Authentication", status: "Working" },
    { id: 5, service: "File Upload", status: "Available" },
  ];

  return (
    <section className="status-list">
      <h3>System Status</h3>
      <ul>
        {systemStatuses.map((item) => (
          <li key={item.id}>
            <strong>{item.service}:</strong> {item.status}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatusList;
