export interface SystemStatus {
  id: string;
  service: string;
  status: string;
}

export const mockedSystemStatusData: SystemStatus[] = [
  { id: "1", service: "Help Desk System", status: "Online" },
  { id: "2", service: "Ticket Database", status: "Connected" },
  { id: "3", service: "Email Service", status: "Active" },
  { id: "4", service: "User Authentication", status: "Working" },
  { id: "5", service: "File Upload", status: "Available" },
  { id: "6", service: "Notification Service", status: "Running" },
  { id: "7", service: "Backup System", status: "Online" },
  { id: "8", service: "API Gateway", status: "Active" },
  { id: "9", service: "Cache Server", status: "Connected" },
  { id: "10", service: "Load Balancer", status: "Healthy" },
];
