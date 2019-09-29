import React from "react";
import { useFirebaseDatabase } from "./useFirebaseDatabase";

export function useFirebaseNode({ path }) {
  const [node, setNode] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const database = useFirebaseDatabase();

  React.useEffect(() => {
    setLoading(true);

    database.ref(path).on("value", snapshot => {
      const snapshotValue = snapshot.val();
      setNode(snapshotValue);
      setLoading(false);
    });

    return () => {
      database.ref(path).off("value");
    };
  }, [path, database]);

  return [node, loading];
}
