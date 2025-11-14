export interface SystemStatus {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const API_BASE_URL = "http://localhost:3000/api/v1";

export async function fetchSystemStatuses(): Promise<SystemStatus[]> {
  const response = await fetch(`${API_BASE_URL}/statuses`);

  if (!response.ok) {
    throw new Error("Failed to fetch statuses");
  }

  const data = await response.json();
  return data.data;
}

export async function fetchSystemStatusById(id: number): Promise<SystemStatus> {
  const response = await fetch(`${API_BASE_URL}/statuses/${id}`);

  if (!response.ok) {
    throw new Error("Failed to fetch status");
  }

  const data = await response.json();
  return data.data;
}
