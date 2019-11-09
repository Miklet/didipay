import React from "react";

export function IconButton({
  children,
  component: Component = "button",
  ...restProps
}) {
  return (
    <Component
      className="rounded-full bg-green-600 p-4 text-center font-semibold fixed text-black"
      {...restProps}
    >
      {children}
    </Component>
  );
}
