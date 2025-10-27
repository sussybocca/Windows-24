import { useState } from "react";

export default function useProcessManager() {
  const [processes, setProcesses] = useState([]);

  const startProcess = (name, content) => {
    const id = Date.now();
    setProcesses(prev => [...prev, { id, name, content }]);
    return id;
  };

  const closeProcess = (id) => {
    setProcesses(prev => prev.filter(p => p.id !== id));
  };

  const getProcesses = () => processes;

  return { processes, startProcess, closeProcess, getProcesses };
}
