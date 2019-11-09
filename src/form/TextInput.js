import React from "react";

export function TextInput({ value, onChange, id, name, type = "text" }) {
  return (
    <input
      type={type}
      className="rounded py-2 pl-2 bg-gray-400 text-black w-full"
      value={value}
      onChange={onChange}
      id={id}
      name={name}
    />
  );
}
