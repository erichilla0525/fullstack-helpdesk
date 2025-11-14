import { useEffect, useState } from "react";
import type { SystemStatus } from "../Repo/systemStatusRepo";
import * as SystemStatusService from "../Services/systemStatusService";

export function useSystemStatus() {
  const [systemStatuses, setSystemStatuses] = useState<SystemStatus[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  async function fetchStatuses() {
    try {
      setLoading(true);
      const data = await SystemStatusService.fetchSystemStatuses();
      setSystemStatuses(data);
      setError(null);
    } catch (errorObject) {
      setError(`${errorObject}`);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchStatuses();
  }, []);

  return {
    systemStatuses,
    error,
    loading,
    refetch: fetchStatuses,
  };
}
