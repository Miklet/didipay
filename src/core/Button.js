import React from "react";
import clsx from "clsx";

export function Button({
  component: Component = "button",
  variant,
  fullWidth = false,
  className,
  icon: Icon,
  children,
  ...restProps
}) {
  const classNames = clsx(
    "px-6 rounded text-center font-semibold text-base py-3 h-12 inline-flex items-center justify-center",
    {
      "bg-green-600 text-black": variant === "primary",
      "border-solid border border-gray-100 bg-transparent text-gray-100":
        variant === "secondary",
      "w-full": fullWidth
    },
    className
  );

return (
  <Component {...restProps} className={classNames}>
    {Icon && <Icon className="mr-2 text-xl stroke-current" />}
    {children}
  </Component>
  );
}