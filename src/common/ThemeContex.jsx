import React, { createContext, useContext, useEffect, useState } from 'react';
import { flushSync } from 'react-dom';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = async (e) => {
    const newTheme = theme === 'light' ? 'dark' : 'light';

    // Fallback for browsers that don't support View Transitions yet
    if (!document.startViewTransition || !e) {
      setTheme(newTheme);
      return;
    }

    // 1. Get the click coordinates for the origin of the circle
    const x = e.clientX;
    const y = e.clientY;

    // 2. Calculate the radius needed to cover the entire screen from the click point
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    // 3. Start the transition and force React to flush the state update synchronously
    const transition = document.startViewTransition(() => {
      flushSync(() => {
        setTheme(newTheme);
      });
    });

    // 4. Wait for the browser to create the pseudo-elements, then animate the circle
    await transition.ready;

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 500,
        easing: 'ease-in-out',
        pseudoElement: '::view-transition-new(root)', // Targets the incoming theme
      }
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
