import React from "react";

export function FormLegend({ children }) {
  return (
    <legend className="text-gray-400 text-xl font-bold tracking-wider mb-4 uppercase">
      {children}
    </legend>
  );
}
