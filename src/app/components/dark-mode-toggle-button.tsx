"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Providers } from "./provider";

const DarkModeToggleButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  console.log(theme);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex gap-3">
      <button onClick={() => setTheme("light")}>Light Mode</button>
      <button onClick={() => setTheme("dark")}>Dark Mode</button>
      {theme === "dark" ? "dark" : "light"}
    </div>
  );
};

export default DarkModeToggleButton;
