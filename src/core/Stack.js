import React from "react";
import clsx from "clsx";

export function Stack({ children, spacing = "medium" }) {
  let childrenCount = React.Children.count(children);

  return (
    <div className="flex flex-col">
      {React.Children.map(children, (child, index) => {
        if (child == null) {
          return null;
        }

        return React.cloneElement(child, {
          className: clsx(
            child.props.className,
            index < childrenCount - 1 && {
              "mb-2": spacing === "small",
              "mb-4": spacing === "medium",
              "mb-6": spacing === "large"
            }
          )
        });
      })}
    </div>
  );
}
