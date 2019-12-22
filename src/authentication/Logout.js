import React from 'react';
import {useFirebase} from '../firebase/useFirebase';
import {Button} from '../core/Button';

export function Logout() {
	const firebase = useFirebase();

	function logout() {
		firebase.auth().signOut();
	}

	return (
		<Button variant="secondary" onClick={logout}>
			Logout
		</Button>
	);
}
