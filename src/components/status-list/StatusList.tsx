import { useState } from "react";
import { useTickets } from "../Hooks/ticketFormHook";
import { useSystemStatus } from "../Hooks/useSystemStatus";

interface StatusListProps {}

function StatusList({}: StatusListProps) {
  const { tickets, error: ticketError, deleteTicket } = useTickets();
  const {
    systemStatuses,
    error: statusError,
    createStatus,
    deleteStatus,
  } = useSystemStatus();

  const [newService, setNewService] = useState<string>("");
  const [newStatus, setNewStatus] = useState<string>("");

  const handleAddStatus = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newService.trim() === "" || newStatus.trim() === "") {
      alert("Please fill in both fields");
      return;
    }

    await createStatus(newService.trim(), newStatus.trim());
    setNewService("");
    setNewStatus("");
  };

  const handleRemoveStatus = async (id: string) => {
    await deleteStatus(id);
  };

  const totalTickets = tickets.length;
  const openTickets = tickets.filter(
    (t) => t.status.toLowerCase() === "open"
  ).length;
  const pendingTickets = tickets.filter(
    (t) => t.status.toLowerCase() === "pending"
  ).length;
  const closedTickets = tickets.filter(
    (t) => t.status.toLowerCase() === "closed"
  ).length;

  const handleClearAllTickets = async () => {
    if (window.confirm("Are you sure you want to clear all tickets?")) {
      try {
        const deletePromises = tickets.map((ticket) => deleteTicket(ticket.id));
        await Promise.all(deletePromises);
      } catch (err) {
        console.error("Error clearing tickets:", err);
      }
    }
  };

  return (
    <section className="status-list p-6">
      <h3 className="text-2xl font-bold mb-4">System Status</h3>

      {ticketError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
          Ticket Error: {ticketError}
        </div>
      )}

      {statusError && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
          Status Error: {statusError}
        </div>
      )}

      <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
        <h4 className="text-lg font-semibold mb-3 text-blue-800">
          Ticket Statistics
        </h4>
        <div className="grid grid-cols-4 gap-3">
          <div className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Total Tickets</p>
            <p className="text-2xl font-bold text-gray-800">{totalTickets}</p>
          </div>
          <div className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Open</p>
            <p className="text-2xl font-bold text-green-600">{openTickets}</p>
          </div>
          <div className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Pending</p>
            <p className="text-2xl font-bold text-yellow-600">
              {pendingTickets}
            </p>
          </div>
          <div className="p-3 bg-white rounded-md shadow-sm">
            <p className="text-sm text-gray-600">Closed</p>
            <p className="text-2xl font-bold text-gray-600">{closedTickets}</p>
          </div>
        </div>
        <button
          onClick={handleClearAllTickets}
          className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
        >
          Clear All Tickets
        </button>
      </div>

      <form
        onSubmit={handleAddStatus}
        className="mb-6 p-4 bg-gray-50 rounded-lg"
      >
        <h4 className="text-lg font-semibold mb-3">Add New System Status</h4>
        <div className="flex gap-3 mb-3">
          <input
            type="text"
            placeholder="Service name"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="text"
            placeholder="Status"
            value={newStatus}
            onChange={(e) => setNewStatus(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Add Status
        </button>
      </form>

      <ul className="space-y-2">
        {systemStatuses.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-md"
          >
            <span>
              <strong>{item.service}:</strong> {item.status}
            </span>
            <button
              onClick={() => handleRemoveStatus(item.id)}
              className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default StatusList;
