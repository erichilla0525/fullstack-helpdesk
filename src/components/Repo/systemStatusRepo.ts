import type { SystemStatus } from "../../data/mockedData/mockedSystemStatusData";
import { mockedSystemStatusData } from "../../data/mockedData/mockedSystemStatusData";

let systemStatuses: SystemStatus[] = [...mockedSystemStatusData];

export async function fetchSystemStatuses(): Promise<SystemStatus[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...systemStatuses]);
    }, 100);
  });
}

export async function createSystemStatus(
  status: Omit<SystemStatus, "id">
): Promise<SystemStatus> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newStatus: SystemStatus = {
        id: Date.now().toString(),
        ...status,
      };
      systemStatuses.push(newStatus);
      resolve(newStatus);
    }, 100);
  });
}

export async function deleteSystemStatus(id: string): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(() => {
      systemStatuses = systemStatuses.filter((status) => status.id !== id);
      resolve();
    }, 100);
  });
}
