import { saveData, loadData } from "../libs/storage";

export default function useFileSystem() {
  const [files, setFiles] = useState(loadData("filesystem") || {});

  const writeFile = (path, content) => {
    setFiles(prev => {
      const updated = { ...prev, [path]: content };
      saveData("filesystem", updated);
      return updated;
    });
  };

  const readFile = (path) => files[path] || null;

  const deleteFile = (path) => {
    setFiles(prev => {
      const updated = { ...prev };
      delete updated[path];
      saveData("filesystem", updated);
      return updated;
    });
  };

  return { files, writeFile, readFile, deleteFile };
}
