import React from "react";
import clsx from "clsx";
import css from "./Button.module.css";

export function Button({
  component: Component = "button",
  variant,
  fullWidth = false,
  className,
  ...restProps
}) {
  const classNames = clsx(
    "px-6 rounded text-center font-semibold text-base",
    {
      "bg-green-500 py-3 text-black": variant === "primary",
      ["border-solid border border-gray-100 bg-transparent text-gray-100 " +
      css.secondary]: variant === "secondary",
      "w-full": fullWidth
    },
    className
  );

  return <Component {...restProps} className={classNames} />;
}
