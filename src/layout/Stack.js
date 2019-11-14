import React from "react";
import clsx from "clsx";

export function Stack({ children, spacing = "medium" }) {
  let childrenCount = React.Children.count(children);

  return (
    <div>
      {React.Children.map(children, (child, index) => {
        if (child == null) {
          return null;
        }

        let isLastChild = index === childrenCount - 1;

        let className = clsx(
          !isLastChild && {
            "mb-2": spacing === "small",
            "mb-4": spacing === "medium",
            "mb-6": spacing === "large"
          }
        );

        return <div className={className}>{child}</div>;
      })}
    </div>
  );
}
