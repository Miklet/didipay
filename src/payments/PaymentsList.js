import React from "react";
import { PaymentItem } from "./PaymentItem";
import { Stack } from "./../layout/Stack";

export function PaymentsList({ payments }) {
  return (
    <ul>
      <Stack>
        {payments.map(payment => {
          return <PaymentItem {...payment} key={payment.id} />;
        })}
      </Stack>
    </ul>
  );
}
