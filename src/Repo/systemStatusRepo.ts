export interface SystemStatus {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api`;

export async function fetchSystemStatuses(): Promise<SystemStatus[]> {
  const response = await fetch(`${BASE_URL}/statuses`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch statuses");
  }
  
  const data = await response.json();
  return data.data;
}

export async function fetchSystemStatusById(id: number): Promise<SystemStatus> {
  const response = await fetch(`${BASE_URL}/statuses/${id}`);
  
  if (!response.ok) {
    throw new Error("Failed to fetch status");
  }
  
  const data = await response.json();
  return data.data;
}

export async function createSystemStatus(
  status: Omit<SystemStatus, "id" | "createdAt" | "updatedAt">
): Promise<SystemStatus> {
  const response = await fetch(`${BASE_URL}/statuses`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(status),
  });
  
  if (!response.ok) {
    throw new Error("Failed to create status");
  }
  
  const data = await response.json();
  return data.data;
}

export async function deleteSystemStatus(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/statuses/${id}`, {
    method: "DELETE",
  });
  
  if (!response.ok) {
    throw new Error("Failed to delete status");
  }
}