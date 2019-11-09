import React from "react";
import clsx from "clsx";

export function FormLabel({ children, htmlFor, inline }) {
  return (
    <label
      className={clsx("text-gray-400", {
        "inline-block": inline,
        block: !inline
      })}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}
