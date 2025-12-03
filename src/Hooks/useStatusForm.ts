import { useState } from "react";

export const useStatusForm = (
  onSubmit: (service: string, status: string) => Promise<void>
) => {
  const [newService, setNewService] = useState<string>("");
  const [newStatus, setNewStatus] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (newService.trim() === "" || newStatus.trim() === "") {
      alert("Please fill in both fields");
      return;
    }

    await onSubmit(newService.trim(), newStatus.trim());
    setNewService("");
    setNewStatus("");
  };

  return {
    newService,
    setNewService,
    newStatus,
    setNewStatus,
    handleSubmit,
  };
};
