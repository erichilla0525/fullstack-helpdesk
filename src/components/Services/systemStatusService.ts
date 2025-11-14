import type { SystemStatus } from "../Repo/systemStatusRepo";
import * as SystemStatusRepo from "../Repo/systemStatusRepo";

export async function fetchSystemStatuses(): Promise<SystemStatus[]> {
  return await SystemStatusRepo.fetchSystemStatuses();
}

export async function fetchSystemStatusById(id: number): Promise<SystemStatus> {
  return await SystemStatusRepo.fetchSystemStatusById(id);
}
