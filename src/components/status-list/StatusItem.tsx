import type { SystemStatus } from "../Repo/systemStatusRepo";

interface StatusItemProps {
  status: SystemStatus;
}

export function StatusItem({ status }: StatusItemProps) {
  return (
    <li className="flex justify-between items-center p-3 bg-white border border-gray-200 rounded-md">
      <div>
        <span className="font-semibold">{status.name}</span>
        <div
          className="inline-block ml-3 w-4 h-4 rounded-full"
          style={{ backgroundColor: status.color }}
        ></div>
      </div>
    </li>
  );
}
