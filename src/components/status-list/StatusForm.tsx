import { useStatusForm } from "../../Hooks/useStatusForm";

interface StatusFormProps {
  onAddStatus: (service: string, status: string) => Promise<void>;
}

export function StatusForm({ onAddStatus }: StatusFormProps) {
  const { newService, setNewService, newStatus, setNewStatus, handleSubmit } =
    useStatusForm(onAddStatus);

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-50 rounded-lg">
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
  );
}
