import React from "react";
import { useFirebaseMutation } from "../firebase/useFirebaseMutation";
import styles from "./PaymentRow.module.css";
import { PaymentRemovalConfirmation } from "./PaymentRemovalConfirmation";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function PaymentRow({ id, name, isPaid, amount, date }) {
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
      id,
      name,
      amount,
      date,
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
          checked={isPaid}
          onChange={handleOnIsPaidChange}
        />
      </td>
      <td>{name}</td>
      <td>{numberFormatter.format(amount)}</td>
      <td>{dateFormatter.format(new Date(date))}</td>
      <td>
        <button
          onClick={() => {
            setIsRemoving(true);
          }}
          className={styles.removeBtn}
        >
          <span role="img" aria-label={`Remove payment ${name}`}>
            ❌
          </span>
        </button>
        {isRemoving && (
          <PaymentRemovalConfirmation
            name={name}
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
