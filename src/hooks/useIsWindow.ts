import { useEffect, useState } from "react";

const useIsWindow = () => {
  const [isWindow, setIsWindow] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setIsWindow(true);
  }, []);

  return isWindow;
};

export default useIsWindow;
