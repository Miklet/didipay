import React from "react";

export function PaymentsSectionHeader({ children }) {
  return (
    <header className="mb-4 pb-2 text-lg text-black uppercase border-gray-700 border-b border-solid flex justify-between">
      {children}
    </header>
  );
}
