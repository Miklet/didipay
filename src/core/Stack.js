import React from "react";
import clsx from "clsx";

export function Stack({ children, spacing = "medium" }) {
  return (
    <div className="flex flex-col">
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: clsx({
            "mb-2": spacing === "small",
            "mb-4": spacing === "medium",
            "mb-6": spacing === "large"
          })
        });
      })}
    </div>
  );
}
