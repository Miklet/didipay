import React from "react";
import { useFirebaseNode } from "../firebase/useFirebaseNode";
import { useFirebaseAuth } from "../firebase/useFirebaseAuth";
import { Button } from "../core/Button";
import { Stack } from "./../layout/Stack";
import { Link } from "../mini-router/Link";
import { PaymentsSection } from "./PaymentsSection";
import { PaymentsSectionHeader } from "./PaymentsSectionHeader";
import { PaymentsSectionFooter } from "./PaymentsSectionFooter";
import { PaymentsList } from "./PaymentsList";
import { FiPlusCircle } from 'react-icons/fi';

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

  let sortByPaymentDate = (payment1, payment2) =>
    new Date(payment1.date).getTime() < new Date(payment2.date).getTime();

  const paymentsFromCurrentMonth = paymentsList
    .filter(payment => new Date(payment.date).getMonth() === currentMonth)
    .sort(sortByPaymentDate);

  const paymentsFromLastMonth = paymentsList
    .filter(payment => new Date(payment.date).getMonth() === currentMonth - 1)
    .sort(sortByPaymentDate);

  const olderPayments = paymentsList
    .filter(
      payment =>
        new Date(payment.date).getMonth() !== currentMonth &&
        new Date(payment.date).getMonth() !== currentMonth - 1
    )
    .sort(sortByPaymentDate);

  const numberFormatter = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    currencyDisplay: "code"
  });

  return (
    <div>
      <Stack spacing="large">
        <>
          <PaymentsSectionHeader>
            <h2>Current</h2>
            <Button icon={FiPlusCircle} variant="primary" component={Link} to="/add">
              Add payment
            </Button>
          </PaymentsSectionHeader>
          <PaymentsSection>
            {paymentsFromCurrentMonth.length > 0 ? (
              <PaymentsList payments={paymentsFromCurrentMonth} />
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
            <PaymentsSectionFooter>
              <div className="font-bold text-right mr-8">
                {numberFormatter.format(
                  paymentsFromCurrentMonth.reduce(
                    (sum, payment) => sum + Number(payment.amount),
                    0
                  )
                )}
              </div>
            </PaymentsSectionFooter>
          </PaymentsSection>
        </>
        {paymentsFromLastMonth.length > 0 && (
          <>
            <PaymentsSectionHeader>
              <h2>Last month</h2>
            </PaymentsSectionHeader>
            <PaymentsSection>
              <PaymentsList payments={paymentsFromLastMonth} />
            </PaymentsSection>
          </>
        )}
        {olderPayments.length > 0 && (
          <>
            <PaymentsSectionHeader>
              <h2>Older</h2>
            </PaymentsSectionHeader>
            <PaymentsSection>
              <PaymentsList payments={olderPayments} />
            </PaymentsSection>
          </>
        )}
      </Stack>
    </div>
  );
}
