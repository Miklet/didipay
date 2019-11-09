import React from "react";
import { PaymentsTable } from "./PaymentsTable";
import { useFirebaseNode } from "../firebase/useFirebaseNode";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";
import { Button } from "../core/Button";
import { Stack } from "./../core/Stack";
import { Link } from "../mini-router/Link";
import { PaymentsSection } from "./PaymentsSection";
import { PaymentsSectionHeader } from "./PaymentsSectionHeader";

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
      <PaymentsSection>
        <Stack>
          <div className="font-semibold text-center">
            No payments <span aria-hidden="true">🤷‍</span>
          </div>
          <Button variant="primary" component={Link} to="/add">
            Add payment
          </Button>
        </Stack>
      </PaymentsSection>
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
      <Stack>
        <PaymentsSection>
          <PaymentsSectionHeader>
            <h2>Current</h2>
          </PaymentsSectionHeader>
          {paymentsFromCurrentMonth.length > 0 ? (
            <>
              <div>
                {numberFormatter.format(
                  paymentsFromCurrentMonth.reduce(
                    (sum, payment) => sum + Number(payment.amount),
                    0
                  )
                )}
              </div>
              <PaymentsTable payments={paymentsFromCurrentMonth} />
            </>
          ) : (
            <Stack>
              <div className="font-semibold text-center">
                No payments <span aria-hidden="true">🤷‍</span>
              </div>
              <Button variant="primary" fullWidth component={Link} to="/add">
                Add payment
              </Button>
            </Stack>
          )}
        </PaymentsSection>
        {paymentsFromLastMonth.length > 0 && (
          <PaymentsSection>
            <PaymentsSectionHeader>
              <h2>Last month</h2>
            </PaymentsSectionHeader>
            <PaymentsTable payments={paymentsFromLastMonth} />
          </PaymentsSection>
        )}
        {olderPayments.length > 0 && (
          <PaymentsSection>
            <PaymentsSectionHeader>
              <h2>Last month</h2>
            </PaymentsSectionHeader>
            <PaymentsTable payments={olderPayments} />
          </PaymentsSection>
        )}
      </Stack>
    </div>
  );
}
