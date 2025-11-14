import { useSystemStatus } from "../Hooks/useSystemStatus";
import { StatusItem } from "./StatusItem";

interface StatusListProps {}

function StatusList({}: StatusListProps) {
  const { systemStatuses, error, loading } = useSystemStatus();

  if (loading) {
    return (
      <section className="status-list p-6">
        <h3 className="text-2xl font-bold mb-4">System Status</h3>
        <p>Loading statuses...</p>
      </section>
    );
  }

  return (
    <section className="status-list p-6">
      <h3 className="text-2xl font-bold mb-4">System Status</h3>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700">
          Error: {error}
        </div>
      )}

      <ul className="space-y-2">
        {systemStatuses.map((status) => (
          <StatusItem key={status.id} status={status} />
        ))}
      </ul>
    </section>
  );
}

export default StatusList;
