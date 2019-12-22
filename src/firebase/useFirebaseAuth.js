import {useFirebase} from './useFirebase';
import React from 'react';

export function useFirebaseAuth() {
	const firebase = useFirebase();
	const [currentUser, setCurrentUser] = React.useState(
		firebase.auth().currentUser,
	);
	const [isAuthVerified, setIsAuthVerified] = React.useState(false);

	React.useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
			setCurrentUser(authUser);
			setIsAuthVerified(true);
		});

		return () => {
			unsubscribe();
		};
	}, [firebase]);

	return {isAuthVerified, currentUser, isSignedIn: currentUser != null};
}
