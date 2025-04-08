import { useEffect, useState } from "react";

export const usePublicJson = (path: string) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(path)
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, [path]);

  return data;
};
