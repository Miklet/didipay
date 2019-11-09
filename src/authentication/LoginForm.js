import React from "react";
import { Form } from "../form/Form";
import { useInput } from "../form/useInput";
import { Button } from "./../core/Button";
import { Stack } from "./../core/Stack";
import { TextInput } from "../form/TextInput";
import { Link } from "../mini-router/Link";
import { FormLegend } from "./../form/FormLegend";
import { FormButtons } from "./../form/FormButtons";

export function LoginForm({ onSubmit }) {
  const emailInput = useInput({ name: "email" });
  const passwordInput = useInput({ name: "password", type: "password" });

  return (
    <Form onSubmit={onSubmit}>
      <fieldset>
        <FormLegend>Login</FormLegend>
        <Stack spacing="large">
          <div>
            <label className="text-gray-400 block" htmlFor={emailInput.id}>
              Email
            </label>
            <TextInput {...emailInput} />
          </div>
          <div>
            <label className="text-gray-400 block" htmlFor={passwordInput.id}>
              Password
            </label>
            <TextInput type="password" {...passwordInput} />
          </div>
        </Stack>
        <FormButtons>
          <Stack spacing="small">
            <Button variant="primary" type="submit" fullWidth>
              Login
            </Button>
            <Button
              variant="secondary"
              component={Link}
              to="/register"
              type="button"
              fullWidth
            >
              Register
            </Button>
          </Stack>
        </FormButtons>
      </fieldset>
    </Form>
  );
}
