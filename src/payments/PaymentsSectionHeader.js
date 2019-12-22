import React from 'react';

export function PaymentsSectionHeader({children}) {
	return (
		<header className="mb-4 text-2xl text-gray-500 font-bold flex justify-between items-end">
			{children}
		</header>
	);
}
