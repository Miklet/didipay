import React from "react";

export function FormLabel({ children, htmlFor }) {
  return (
    <label className="text-gray-400 block" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
