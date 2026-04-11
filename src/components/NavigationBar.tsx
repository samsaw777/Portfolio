import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

import "./navigation.css";

function NavigationBar() {
  const [showactive, setShowActive] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: "About Me", id: 1, url: "about" },
    { name: "Experience", id: 2, url: "experience" },
    { name: "Projects", id: 3, url: "projects" },
    { name: "Contact", id: 4, url: "contact" },
  ];

  const [activeclass, setActiveClass] = useState<string>("");

  const clickableevent = (key: string) => {
    setActiveClass(key);
    setShowActive(!showactive);
  };

  return (
    <div className="flex">
      <nav className="flex w-full justify-between items-center pl-5 pr-5 bg-lightNavigationColor dark:bg-navigationColor border-b border-lightBorder dark:border-border">
        <div className="text-lg text-lightPrimaryAccent dark:text-primary font-semibold">
          Sameep Sawant
        </div>
        <ul
          className="navigation-links"
          style={{ transform: showactive ? "translateX(0px)" : "" }}
        >
          {menuItems.map((item) => (
            <li
              key={item.id}
              onClick={() => setShowActive(!showactive)}
              className="border-b border-lightBorder dark:border-border md:border-none"
            >
              <a
                onClick={() => clickableevent(item.url)}
                href={`#${item.url}`}
                className={
                  activeclass === item.url
                    ? "text-lightPrimaryAccent dark:text-primary font-bold"
                    : "text-lightSubtext dark:text-secondColor hover:text-lightPrimaryAccent dark:hover:text-primary"
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu background */}
        <style>{`
          @media (max-width: 768px) {
            .navigation-links {
              background-color: ${
                theme === "dark" ? "#0C0F14" : "#FFFFFF"
              } !important;
            }
          }
        `}</style>

        <button
          onClick={toggleTheme}
          className="theme-toggle text-lightPrimaryAccent dark:text-primary"
          aria-label="Toggle theme"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <MdLightMode size={24} />
          ) : (
            <MdDarkMode size={24} />
          )}
        </button>

        <i
          className="fas fa-bars burger text-lightHeadingText dark:text-mainTextColor"
          onClick={() => setShowActive(!showactive)}
        />
      </nav>
    </div>
  );
}

export default NavigationBar;
