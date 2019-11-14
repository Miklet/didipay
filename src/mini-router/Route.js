import { useMiniRouter } from "./MiniRouter";
import React from "react";

export function Route({ children, path, component: Component }) {
  const { pathname } = useMiniRouter();
  const isMatch = path === pathname;

  if (!isMatch) {
    return null;
  }

  if (Component) {
    return <Component />;
  }

  return children;
}
