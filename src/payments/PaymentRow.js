import React from "react";
import { useFirebaseMutation } from "../firebase/useFirebaseMutation";
import styles from "./PaymentRow.module.css";
import { PaymentRemovalConfirmation } from "./PaymentRemovalConfirmation";

export function PaymentRow({ id, ...payment }) {
  const [isRemoving, setIsRemoving] = React.useState(false);

  const updatePaymentMutation = useFirebaseMutation({
    type: "update",
    path: `/payments/${id}`
  });

  const removePaymentMutation = useFirebaseMutation({
    type: "remove",
    path: `/payments/${id}`
  });

  function handleOnIsPaidChange(event) {
    updatePaymentMutation({
      ...payment,
      isPaid: event.target.checked
    });
  }

  async function handleOnRemove() {
    await removePaymentMutation();
    setIsRemoving(false);
  }

  const numberFormatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    currencyDisplay: "code"
  });

  const dateFormatter = new Intl.DateTimeFormat("pl-PL");

  return (
    <tr>
      <td>
        <input
          type="checkbox"
          checked={payment.isPaid}
          onChange={handleOnIsPaidChange}
        />
      </td>
      <td>{payment.name}</td>
      <td>{numberFormatter.format(payment.amount)}</td>
      <td>{dateFormatter.format(new Date(payment.date))}</td>
      <td>
        <button
          onClick={() => {
            setIsRemoving(true);
          }}
          className={styles.removeBtn}
        >
          <span role="img" aria-label={`Remove payment ${payment.name}`}>
            ❌
          </span>
        </button>
        {isRemoving && (
          <PaymentRemovalConfirmation
            onConfirm={handleOnRemove}
            onCancel={() => {
              setIsRemoving(false);
            }}
          >
            Do you really want to remove payment "{payment.name}"?
          </PaymentRemovalConfirmation>
        )}
      </td>
    </tr>
  );
}
