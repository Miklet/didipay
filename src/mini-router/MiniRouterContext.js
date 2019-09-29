import React from "react";

export const MiniRouterContext = React.createContext({
  pathname: "/",
  push() {}
});

export function MiniRouterProvider({ children }) {
  const [pathname, setPathname] = React.useState(window.location.pathname);

  React.useEffect(() => {
    function handleOnPopState(event) {
      setPathname(event.target.location.pathname);
    }

    window.addEventListener("popstate", handleOnPopState);

    return () => {
      window.removeEventListener("popstate", handleOnPopState);
    };
  }, []);

  return (
    <MiniRouterContext.Provider
      value={{
        pathname,
        push(pathname) {
          setPathname(pathname);
          window.history.pushState(null, null, pathname);
        }
      }}
    >
      {children}
    </MiniRouterContext.Provider>
  );
}
