import React from "react";

export function IconButton({
  children,
  component: Component = "button",
  ...restProps
}) {
  return (
    <Component
      className="flex justify-center items-center rounded-full bg-green-600 h-16 w-16 font-semibold fixed text-black"
      {...restProps}
    >
      {children}
    </Component>
  );
}
