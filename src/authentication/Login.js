import React from 'react';
import {useFirebase} from '../firebase/useFirebase';
import {LoginForm} from './LoginForm';
import {useMiniRouter} from '../mini-router/MiniRouter';

export function Login() {
	const firebase = useFirebase();
	const {push} = useMiniRouter();

	async function login({email, password}) {
		await firebase.auth().signInWithEmailAndPassword(email, password);
		push('/');
	}

	return <LoginForm onSubmit={login} />;
}
