import { ThemeContext } from "@/app/context/ThemeContext";
import { useContext } from "react";

export function useTheme() {
  return useContext(ThemeContext);
}