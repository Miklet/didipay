import React from "react";
import { useMiniRouter } from "./MiniRouter";

export function Link({ children, to, as = "a" }) {
  const { push } = useMiniRouter();

  return React.createElement(as, {
    href: to,
    onClick: e => {
      e.preventDefault();
      push(to);
    },
    children
  });
}
