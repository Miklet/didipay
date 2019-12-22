import React from 'react';
import {useAutoId} from './useAutoId';

export function useInput({defaultValue = '', name, type = 'text'} = {}) {
	const [value, setValue] = React.useState(defaultValue);
	const id = useAutoId();

	const valueProperty =
		type === 'text' || type === 'password' ? 'value' : 'checked';

	function onChange(event) {
		let nextValue = event.target[valueProperty];
		setValue(nextValue);
	}

	return {
		[valueProperty]: value,
		onChange,
		name,
		id,
	};
}
