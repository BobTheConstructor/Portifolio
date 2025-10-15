import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const TrocaTema = () => {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "light") {
      setIsLightMode(true);
      document.documentElement.classList.add("light");
    } else {
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    }
  }, []);

  const trocaTema = () => {
    if (isLightMode) {
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
      setIsLightMode(false);
    } else {
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
      setIsLightMode(true);
    }
  };

  return (
    <button
      onClick={trocaTema}
      className={cn(
        "transition-colors duration-300 focus:outlin-hidden",
        "max-md:pt-30"
      )}
    >
      {" "}
      {isLightMode ? (
        <Moon className="h-6 w-6 text-blue-900" />
      ) : (
        <Sun className=" h-6 w-6 text-yellow-300" />
      )}
    </button>
  );
};
