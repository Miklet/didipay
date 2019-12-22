import React from 'react';
import {RegisterForm} from './RegisterForm';
import {useFirebase} from '../firebase/useFirebase';
import {useMiniRouter} from '../mini-router/MiniRouter';

export function Register() {
	const firebase = useFirebase();
	const {push} = useMiniRouter();

	async function register({email, password}) {
		await firebase.auth().createUserWithEmailAndPassword(email, password);
		push('/');
	}

	return <RegisterForm onSubmit={register} />;
}
