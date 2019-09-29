import React from "react";

export function PaymentRemovalConfirmation({ onConfirm, onCancel, children }) {
  React.useEffect(() => {
    const confirmationResult = window.confirm(children);
    if (confirmationResult) {
      onConfirm();
    } else {
      onCancel();
    }
  }, [children, onCancel, onConfirm]);

  return null;
}
