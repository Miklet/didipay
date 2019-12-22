import {useInput} from '../form/useInput';
import React from 'react';
import {Form} from '../form/Form';
import {FormLegend} from '../form/FormLegend';
import {Stack} from './../layout/Stack';
import {FormLabel} from './../form/FormLabel';
import {TextInput} from './../form/TextInput';
import {Button} from './../core/Button';
import {Checkbox} from './../core/Checkbox';
import {FormButtons} from '../form/FormButtons';
import {Link} from '../mini-router/Link';

export function AddPaymentForm({onSubmit}) {
	const nameInput = useInput({
		name: 'name',
		defaultValue: process.env.NODE_ENV === 'development' ? 'Test' : undefined,
	});

	const amountInput = useInput({name: 'amount', defaultValue: 0});

	const nowDate = new Date();

	const dateInput = useInput({
		name: 'date',
		defaultValue: `${nowDate.getFullYear()}-${nowDate.getMonth()}-${nowDate.getDate()}`,
	});

	const isPaidCheckbox = useInput({
		type: 'checkbox',
		defaultValue: false,
		name: 'isPaid',
	});

	return (
		<Form onSubmit={onSubmit}>
			<fieldset>
				<FormLegend>Add payment</FormLegend>
				<Stack spacing="large">
					<div>
						<FormLabel htmlFor={nameInput.id}>Name</FormLabel>
						<TextInput {...nameInput} />
					</div>
					<div>
						<FormLabel htmlFor={amountInput.id}>Amount</FormLabel>
						<TextInput type="number" {...amountInput} />
					</div>
					<div>
						<FormLabel htmlFor={dateInput.id}>Date</FormLabel>
						<TextInput type="date" {...dateInput} />
					</div>
					<div className="flex items-center">
						<span>
							<FormLabel inline htmlFor={isPaidCheckbox.id}>
								Paid
							</FormLabel>
						</span>
						<Checkbox {...isPaidCheckbox} />
					</div>
				</Stack>
				<FormButtons>
					<Stack>
						<Button variant="primary" fullWidth type="submit">
							Create
						</Button>
						<Button variant="secondary" fullWidth component={Link} to="/">
							Cancel
						</Button>
					</Stack>
				</FormButtons>
			</fieldset>
		</Form>
	);
}
