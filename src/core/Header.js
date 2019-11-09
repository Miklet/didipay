import React from "react";

export function Header({ children }) {
  return (
    <header className="flex justify-between items-center px-6 py-3 mb-8">
      {children}
    </header>
  );
}
