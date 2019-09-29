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
        <div>
          <label>
            Email:
            <input type="text" {...emailInput} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" {...passwordInput} />
          </label>
        </div>
        <button type="submit" onSubmit={onSubmit}>
          Register
        </button>
      </fieldset>
    </Form>
  );
}
