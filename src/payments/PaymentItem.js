import React from 'react';
import {Checkbox} from './../core/Checkbox';
import {useFirebaseMutation} from './../firebase/useFirebaseMutation';
import {useFirebaseAuth} from './../firebase/useFirebaseAuth';
import {PaymentRemovalConfirmation} from './PaymentRemovalConfirmation';
import {FiX} from 'react-icons/fi';

export function PaymentItem({id, name, isPaid, date, amount}) {
	const [isRemoving, setIsRemoving] = React.useState(false);
	const {currentUser} = useFirebaseAuth();

	const updatePaymentMutation = useFirebaseMutation({
		type: 'update',
		path: `/payments/${currentUser.uid}/${id}`,
	});

	const removePaymentMutation = useFirebaseMutation({
		type: 'remove',
		path: `/payments/${currentUser.uid}/${id}`,
	});

	function handleOnIsPaidChange(event) {
		updatePaymentMutation({
			id,
			name,
			amount,
			date,
			isPaid: event.target.checked,
		});
	}

	async function handleOnRemove() {
		await removePaymentMutation();
	}

	const numberFormatter = new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: 'PLN',
		currencyDisplay: 'code',
	});

	const dateFormatter = new Intl.DateTimeFormat('pl-PL');

	return (
		<div className="flex items-center justify-between -ml-3">
			<div className="flex items-center">
				<Checkbox checked={isPaid} onChange={handleOnIsPaidChange} />
				<div>
					<div className="font-semibold">{name}</div>
					<div>{dateFormatter.format(date)}</div>
				</div>
			</div>
			<div className="font-bold flex items-center">
				<span className="inline-block mr-2">
					{numberFormatter.format(amount)}
				</span>
				<button
					onClick={() => {
						setIsRemoving(true);
					}}
				>
					<FiX
						className="text-2xl text-red-700 fill-current"
						aria-label={`Remove payment ${name}`}
					/>
				</button>
			</div>
			{isRemoving && (
				<PaymentRemovalConfirmation
					name={name}
					onConfirm={handleOnRemove}
					onCancel={() => {
						setIsRemoving(false);
					}}
				/>
			)}
		</div>
	);
}
