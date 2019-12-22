import React from 'react';
import {useInput} from '../form/useInput';
import {Form} from '../form/Form';
import {FormLegend} from './../form/FormLegend';
import {Stack} from '../layout/Stack';
import {TextInput} from './../form/TextInput';
import {FormLabel} from './../form/FormLabel';
import {Button} from './../core/Button';
import {FormButtons} from '../form/FormButtons';

export function RegisterForm({onSubmit}) {
	const emailInput = useInput({
		name: 'email',
	});

	const passwordInput = useInput({
		name: 'password',
		type: 'password',
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
				<FormButtons>
					<Button variant="primary" fullWidth type="submit" onSubmit={onSubmit}>
						Register
					</Button>
				</FormButtons>
			</fieldset>
		</Form>
	);
}
