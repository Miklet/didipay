import React from "react";

export function PaymentRemovalConfirmation({
  name,
  onConfirm,
  onCancel,
  children
}) {
  React.useEffect(() => {
    const confirmationResult = window.confirm(
      `Do you really want to remove payment ${name}?`
    );
    if (confirmationResult) {
      onConfirm();
    } else {
      onCancel();
    }
  }, [children, name, onCancel, onConfirm]);

  return null;
}
