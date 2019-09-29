import React from "react";
import "./PaymentsTable.css";
import { PaymentRow } from "./PaymentRow";

export function PaymentsTable({ payments }) {
  if (!payments || payments.length === 0) {
    return (
      <div>
        No payments <span aria-hidden="true">🤷‍</span>
      </div>
    );
  }

  return (
    <table className="PaymentsTable">
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
        {Object.entries(payments).map(([key, payment]) => {
          return <PaymentRow key={key} id={key} {...payment} />;
        })}
      </tbody>
    </table>
  );
}
