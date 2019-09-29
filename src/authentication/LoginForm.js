import React from "react";
import { Form } from "../form/Form";
import { useInput } from "../add/useInput";

export function LoginForm({ onSubmit }) {
  const emailInput = useInput();
  const passwordInput = useInput({ type: "password" });

  return (
    <Form>
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
