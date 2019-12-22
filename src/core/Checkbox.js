import React from "react";
import {FiCheck} from 'react-icons/fi'

export function Checkbox(props) {
  return (
    <div className="relative p-3 leading-none">
      <input
        type="checkbox"
        className="absolute opacity-0 top-0 left-0 h-full w-full z-10"
        {...props}
      />
      <span className="inline-block border-2 border-solid rounded leading-none h-6 w-6 text-center text-white" aria-hidden="true">
        <span
          className="inline-flex items-center justify-center leading-none text-lg h-full w-full"
        >
          <FiCheck stroke="#fff" hidden={!props.checked} />
        </span>
      </span>
    </div>
  );
}
