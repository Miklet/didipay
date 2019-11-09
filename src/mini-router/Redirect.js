import React from "react";
import { useMiniRouter } from "./MiniRouter";

export function Redirect({ to }) {
  const { push } = useMiniRouter();

  React.useEffect(() => {
    push(to);
  }, [push, to]);

  return null;
}
