import React from "react";

export function Stack({ children }) {
  return (
    <div className="flex flex-col">
      {React.Children.map(children, child => {
        return React.cloneElement(child, {
          className: "mb-4"
        });
      })}
    </div>
  );
}
