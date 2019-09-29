import React from "react";
import { Form } from "../form/Form";
import { useInput } from "../form/useInput";

export function LoginForm({ onSubmit }) {
  const emailInput = useInput({ name: "email" });
  const passwordInput = useInput({ name: "password", type: "password" });

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <legend>Login</legend>
        <div>
          <label>
            Email: <input type="text" {...emailInput} />
          </label>
        </div>
        <div>
          <label>
            Password: <input type="password" {...passwordInput} />
          </label>
        </div>
        <button type="submit">Login</button>
      </fieldset>
    </Form>
  );
}
