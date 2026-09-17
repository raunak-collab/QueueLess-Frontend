"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

export const ThemeContext = createContext();

export function ThemeContextProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("dark");

    const isDark = savedTheme === "true";

    setDark(isDark);

    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const ToggleTheme = () => {
    setDark((prev) => {
      const nextTheme = !prev;

      document.documentElement.classList.toggle(
        "dark",
        nextTheme
      );

      localStorage.setItem(
        "dark",
        String(nextTheme)
      );

      return nextTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ ToggleTheme, dark }}>
      {children}
    </ThemeContext.Provider>
  );
}

