import React from "react";
import { PaymentsTable } from "./PaymentsTable";
import { useFirebaseNode } from "../firebase/useFirebaseNode";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function Payments() {
  const { currentUser } = useFirebaseAuth();

  const [payments, loading] = useFirebaseNode({
    path: `/payments/${currentUser != null ? currentUser.uid : ""}`
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  return <PaymentsTable payments={payments} />;
}
