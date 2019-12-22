import React from 'react';
import {Form} from '../form/Form';
import {useInput} from '../form/useInput';
import {Button} from './../core/Button';
import {Stack} from '../layout/Stack';
import {TextInput} from '../form/TextInput';
import {Link} from '../mini-router/Link';
import {FormLegend} from './../form/FormLegend';
import {FormButtons} from './../form/FormButtons';
import {FormLabel} from '../form/FormLabel';

export function LoginForm({onSubmit}) {
	const emailInput = useInput({name: 'email'});
	const passwordInput = useInput({name: 'password', type: 'password'});

	return (
		<Form onSubmit={onSubmit}>
			<fieldset>
				<FormLegend>Login</FormLegend>
				<Stack spacing="large">
					<>
						<FormLabel htmlFor={emailInput.id}>Email</FormLabel>
						<TextInput {...emailInput} />
					</>
					<>
						<FormLabel htmlFor={passwordInput.id}>Password</FormLabel>
						<TextInput type="password" {...passwordInput} />
					</>
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
