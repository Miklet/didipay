import React from "react";
import { useInput } from "../form/useInput";
import { Form } from "../form/Form";

export function RegisterForm({ onSubmit }) {
  const emailInput = useInput({
    name: "email"
  });

  const passwordInput = useInput({
    name: "password",
    type: "password"
  });

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Register</legend>
        <label>
          Email:
          <input type="text" {...emailInput} />
        </label>
        <label>
          Password:
          <input type="password" {...passwordInput} />
        </label>
        <button type="submit" onSubmit={onSubmit}>
          Register
        </button>
      </fieldset>
    </Form>
  );
}
