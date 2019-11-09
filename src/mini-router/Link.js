import React from "react";
import { useMiniRouter } from "./MiniRouter";

export function Link({ children, to, className }) {
  const { push } = useMiniRouter();

  return (
    <a
      href={to}
      onClick={e => {
        e.preventDefault();
        push(to);
      }}
      className={className}
    >
      {children}
    </a>
  );
}
