import type { SystemStatus } from "../Repo/systemStatusRepo";
import * as SystemStatusRepo from "../Repo/systemStatusRepo";

export async function fetchSystemStatuses(): Promise<SystemStatus[]> {
  return await SystemStatusRepo.fetchSystemStatuses();
}

export async function fetchSystemStatusById(id: number): Promise<SystemStatus> {
  return await SystemStatusRepo.fetchSystemStatusById(id);
}

export async function createSystemStatus(statusData: {
  service: string;
  status: string;
}): Promise<SystemStatus> {
  if (!statusData.service.trim() || !statusData.status.trim()) {
    throw new Error("Service and status are required");
  }
  return await SystemStatusRepo.createSystemStatus(statusData);
}

export async function deleteSystemStatus(id: string): Promise<void> {
  if (!id) {
    throw new Error("ID is required to delete a system status");
  }
  return await SystemStatusRepo.deleteSystemStatus(id);
}