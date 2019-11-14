import React from "react";

export function Header({ children }) {
  return (
    <header className="flex justify-between items-center px-3 py-3 mb-8 bg-gray-800 shadow-lg">
      {children}
    </header>
  );
}
