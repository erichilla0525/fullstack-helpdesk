import { useState } from "react";

interface StatusItem {
  id: number;
  service: string;
  status: string;
}

interface StatusListProps {}

function StatusList({}: StatusListProps) {
  const initialStatuses: StatusItem[] = [
    { id: 1, service: "Help Desk System", status: "Online" },
    { id: 2, service: "Ticket Database", status: "Connected" },
    { id: 3, service: "Email Service", status: "Active" },
    { id: 4, service: "User Authentication", status: "Working" },
    { id: 5, service: "File Upload", status: "Available" },
  ];

  const [systemStatuses, setSystemStatuses] =
    useState<StatusItem[]>(initialStatuses);

  const [newService, setNewService] = useState<string>("");
  const [newStatus, setNewStatus] = useState<string>("");

  const handleAddStatus = (e: React.FormEvent) => {
    e.preventDefault();

    if (newService.trim() === "" || newStatus.trim() === "") {
      alert("Please fill in both fields");
      return;
    }

    const newItem: StatusItem = {
      id: Date.now(),
      service: newService.trim(),
      status: newStatus.trim(),
    };

    setSystemStatuses([...systemStatuses, newItem]);

    setNewService("");
    setNewStatus("");
  };

  const handleRemoveStatus = (id: number) => {
    setSystemStatuses(systemStatuses.filter((item) => item.id !== id));
  };

  return (
    <section className="status-list p-6">
      <h3 className="text-2xl font-bold mb-4">System Status</h3>

      <form
        onSubmit={handleAddStatus}
        className="mb-6 p-4 bg-gray-50 rounded-lg"
      >
        <h4 className="text-lg font-semibold mb-3">Add New Status</h4>
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
