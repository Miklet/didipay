import React from "react";
import styles from "./PaymentsTable.module.css";
import { PaymentRow } from "./PaymentRow";

export function PaymentsTable({ payments }) {
  return (
    <table className={styles.root}>
      <thead>
        <tr>
          <th>Paid</th>
          <th>Name</th>
          <th>Amount</th>
          <th>Payment date</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {payments.map(payment => {
          return <PaymentRow key={payment.id} {...payment} />;
        })}
      </tbody>
    </table>
  );
}
