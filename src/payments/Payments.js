import React from "react";
import { PaymentsTable } from "./PaymentsTable";
import { useFirebaseNode } from "../firebase/useFirebaseNode";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";
import styles from "./Payments.module.css";

export function Payments() {
  const { currentUser } = useFirebaseAuth();

  const [payments, loading] = useFirebaseNode({
    path: `/payments/${currentUser != null ? currentUser.uid : ""}`
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!payments || payments.length === 0) {
    return (
      <div>
        No payments <span aria-hidden="true">🤷‍</span>
      </div>
    );
  }

  const paymentsList = Object.entries(payments).map(([id, entry]) => ({
    ...entry,
    id
  }));

  const currentMonth = new Date().getMonth();

  const paymentsFromCurrentMonth = paymentsList.filter(
    payment => new Date(payment.date).getMonth() === currentMonth
  );

  const paymentsFromLastMonth = paymentsList.filter(
    payment => new Date(payment.date).getMonth() === currentMonth - 1
  );

  const olderPayments = paymentsList.filter(
    payment =>
      new Date(payment.date).getMonth() !== currentMonth &&
      new Date(payment.date).getMonth() !== currentMonth - 1
  );

  const numberFormatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    currencyDisplay: "code"
  });

  return (
    <div>
      <section className={styles.section}>
        <header className={styles.header}>
          <h2>CURRENT MONTH</h2>
          <div>
            {numberFormatter.format(
              paymentsFromCurrentMonth.reduce(
                (sum, payment) => sum + Number(payment.amount),
                0
              )
            )}
          </div>
        </header>
        <PaymentsTable payments={paymentsFromCurrentMonth} />
      </section>
      {paymentsFromLastMonth.length > 0 && (
        <section className={styles.section}>
          <header className={styles.header}>
            <h2>LAST MONTH</h2>
          </header>
          <PaymentsTable payments={paymentsFromLastMonth} />
        </section>
      )}
      {olderPayments.length > 0 && (
        <section className={styles.section}>
          <header className={styles.header}>
            <h2>OLDER</h2>
          </header>
          <PaymentsTable payments={olderPayments} />
        </section>
      )}
    </div>
  );
}
