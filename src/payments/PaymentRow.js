import React from "react";
import { useFirebaseMutation } from "../firebase/useFirebaseMutation";
import styles from "./PaymentRow.module.css";
import { PaymentRemovalConfirmation } from "./PaymentRemovalConfirmation";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function PaymentRow({ id, ...payment }) {
  const [isRemoving, setIsRemoving] = React.useState(false);
  const { currentUser } = useFirebaseAuth();

  const updatePaymentMutation = useFirebaseMutation({
    type: "update",
    path: `/payments/${currentUser.uid}/${id}`
  });

  const removePaymentMutation = useFirebaseMutation({
    type: "remove",
    path: `/payments/${currentUser.uid}/${id}`
  });

  function handleOnIsPaidChange(event) {
    updatePaymentMutation({
      ...payment,
      isPaid: event.target.checked
    });
  }

  async function handleOnRemove() {
    await removePaymentMutation();
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
            name={payment.name}
            onConfirm={handleOnRemove}
            onCancel={() => {
              setIsRemoving(false);
            }}
          />
        )}
      </td>
    </tr>
  );
}
