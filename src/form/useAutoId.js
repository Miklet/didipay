import React from "react";

let id = 0;
const genId = () => ++id;

export function useAutoId() {
  const [id, setId] = React.useState(null);

  React.useEffect(() => {
    setId(genId());
  }, []);

  return id;
}
