import { useInput } from "./useInput";
import React from "react";
import { Form } from "../form/Form";

export function AddPaymentForm({ onSubmit }) {
  const nameInput = useInput({
    name: "name",
    defaultValue: process.env.NODE_ENV === "development" ? "Test" : undefined
  });
  const amountInput = useInput({ name: "amount", defaultValue: 0 });
  const dateInput = useInput({
    name: "date",
    defaultValue:
      process.env.NODE_ENV === "development" ? "2019-09-25" : undefined
  });
  const isPaidCheckbox = useInput({
    type: "checkbox",
    defaultValue: false,
    name: "isPaid"
  });

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Add payment</legend>
        <div>
          <label>
            Name:
            <input type="text" {...nameInput} />
          </label>
        </div>
        <div>
          <label>
            Amount:
            <input type="number" {...amountInput} />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input type="date" {...dateInput} />
          </label>
        </div>
        <div>
          <label>
            Paid:
            <input type="checkbox" {...isPaidCheckbox} />
          </label>
        </div>
        <button type="submit">Create</button>
      </fieldset>
    </Form>
  );
}
