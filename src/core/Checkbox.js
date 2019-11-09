import React from "react";

export function Checkbox(props) {
  return (
    <div className="relative p-3 leading-none">
      <input
        type="checkbox"
        className="absolute opacity-0 top-0 left-0 h-full w-full z-10"
        {...props}
      />
      <span className="inline-block border border-solid rounded leading-none h-6 w-6 text-center text-white">
        <span
          className="inline-block leading-none text-xl h-full w-full"
          aria-hidden="true"
        >
          {props.checked ? "✔" : null}
        </span>
      </span>
    </div>
  );
}
