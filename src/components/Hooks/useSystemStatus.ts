import { useEffect, useState } from "react";
import type { SystemStatus } from "../../data/mockedData/mockedSystemStatusData";
import * as SystemStatusService from "../Services/systemStatusService";

export function useSystemStatus() {
  const [systemStatuses, setSystemStatuses] = useState<SystemStatus[]>([]);
  const [error, setError] = useState<string | null>(null);

  async function fetchStatuses() {
    try {
      const data = await SystemStatusService.fetchSystemStatuses();
      setSystemStatuses(data);
      setError(null);
    } catch (errorObject) {
      setError(`${errorObject}`);
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

  async function deleteStatus(id: string) {
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
    createStatus,
    deleteStatus,
  };
}
