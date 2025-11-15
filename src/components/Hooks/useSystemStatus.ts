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

  async function createStatus(service: string, status: string) {
    try {
      const newStatus = await SystemStatusService.createSystemStatus({
        service,
        status,
      });
      setSystemStatuses((prev) => [...prev, newStatus]);
      setError(null);
    } catch (errorObject) {
      setError(`${errorObject}`);
    }
  }

  async function deleteStatus(id: number) {
    try {
      await SystemStatusService.deleteSystemStatus(id);
      await fetchStatuses();
      setError(null);
    } catch (errorObject) {
      setError(`${errorObject}`);
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
    createStatus,
    deleteStatus,
  };
}