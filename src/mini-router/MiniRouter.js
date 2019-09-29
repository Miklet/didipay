import React from "react";
import { MiniRouterContext, MiniRouterProvider } from "./MiniRouterContext";

export function MiniRouter({ children }) {
  return <MiniRouterProvider>{children}</MiniRouterProvider>;
}

export function useMiniRouter() {
  const miniRouterContext = React.useContext(MiniRouterContext);
  return miniRouterContext;
}
