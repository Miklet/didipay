import { AddPaymentForm } from "./AddPaymentForm";
import React from "react";
import { useFirebaseMutation } from "../firebase/useFirebaseMutation";
import { useMiniRouter } from "../mini-router/MiniRouter";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function AddPayment() {
  const { currentUser } = useFirebaseAuth();

  const createPaymentMutation = useFirebaseMutation({
    path: `/payments/${currentUser.uid}`,
    type: "push"
  });

  const { push } = useMiniRouter();

  async function createPayment({ name, amount, date, isPaid }) {
    await createPaymentMutation({
      name,
      amount,
      date,
      isPaid: Boolean(isPaid)
    });

    push("/");
  }

  return <AddPaymentForm onSubmit={createPayment} />;
}
