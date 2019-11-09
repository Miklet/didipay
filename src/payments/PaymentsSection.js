import React from "react";
import clsx from "clsx";

export function PaymentsSection({ children, className }) {
  return (
    <section className={clsx("p-4 bg-gray-600 rounded-lg", className)}>
      {children}
    </section>
  );
}
