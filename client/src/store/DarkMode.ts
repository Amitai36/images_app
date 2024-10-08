import { create } from "zustand";

interface DarkModeProps {
  darkMode: "dark" | "light";
  setDarkMode: (mode: "dark" | "light") => void;
}

export const useDarkStore = create<DarkModeProps>((set) => ({
  darkMode:
    (window.localStorage.getItem("mode") as DarkModeProps["darkMode"]) ??
    "dark",
  setDarkMode: (mode) => {
    set(() => ({
      darkMode: mode,
    }));
    window.localStorage.setItem("mode", mode);
  },
}));
