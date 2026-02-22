import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Initialize theme on document immediately
function initializeTheme() {
  const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
  const html = document.documentElement;
  
  if (savedTheme === "light") {
    html.classList.add("light-mode");
    html.classList.remove("dark-mode");
  } else {
    html.classList.add("dark-mode");
    html.classList.remove("light-mode");
  }
  
  return savedTheme;
}

// Initialize theme immediately
initializeTheme();

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Get saved theme from localStorage
    const savedTheme = (localStorage.getItem("theme") as Theme) || "dark";
    setTheme(savedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    
    // Save theme to localStorage
    localStorage.setItem("theme", theme);
    
    // Apply theme to document
    const html = document.documentElement;
    if (theme === "light") {
      html.classList.add("light-mode");
      html.classList.remove("dark-mode");
    } else {
      html.classList.add("dark-mode");
      html.classList.remove("light-mode");
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
