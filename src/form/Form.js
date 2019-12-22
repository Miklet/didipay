import React from 'react';

export function Form({children, onSubmit}) {
	function handleOnFormSubmit(event) {
		event.preventDefault();

		const formData = new FormData(event.target);
		const formValues = {};

		for (let key of formData.keys()) {
			formValues[key] = formData.get(key);
		}

		onSubmit(formValues);
	}

	return (
		<form className="container" onSubmit={handleOnFormSubmit}>
			{children}
		</form>
	);
}
