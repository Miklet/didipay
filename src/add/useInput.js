import React from "react";

export function useInput({ defaultValue = "", name, type = "text" } = {}) {
  const [value, setValue] = React.useState(defaultValue);
  const valueProperty =
    type === "text" || type === "password" ? "value" : "checked";

  function onChange(event) {
    let nextValue = event.target[valueProperty];
    setValue(nextValue);
  }

  return {
    [valueProperty]: value,
    onChange,
    name
  };
}
