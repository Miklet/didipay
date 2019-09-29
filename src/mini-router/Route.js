import { useMiniRouter } from "./MiniRouter";

export function Route({ children, path }) {
  const { pathname } = useMiniRouter();
  return path === pathname ? children : null;
}
