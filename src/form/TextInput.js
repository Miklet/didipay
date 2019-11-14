import React from "react";

export function TextInput({ value, onChange, id, name, type = "text" }) {
  return (
    <input
      type={type}
      className="rounded py-2 pl-2 bg-gray-500 text-black w-full h-12"
      value={value}
      onChange={onChange}
      id={id}
      name={name}
    />
  );
}
