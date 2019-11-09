import React from "react";
import { useInput } from "../form/useInput";
import { Form } from "../form/Form";
import { FormLegend } from "./../form/FormLegend";
import { Stack } from "../core/Stack";
import { TextInput } from "./../form/TextInput";
import { FormLabel } from "./../form/FormLabel";
import { Button } from "./../core/Button";

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
        <FormLegend>Register</FormLegend>
        <Stack spacing="large">
          <div>
            <FormLabel htmlFor={emailInput.id}>Email</FormLabel>
            <TextInput {...emailInput} />
          </div>
          <div>
            <FormLabel htmlFor={passwordInput.id}>Password</FormLabel>
            <TextInput type="password" {...passwordInput} />
          </div>
        </Stack>
        <Button variant="primary" fullWidth type="submit" onSubmit={onSubmit}>
          Register
        </Button>
      </fieldset>
    </Form>
  );
}
