import React from 'react';
import {FirebaseContext} from './firebaseContext';

export function useFirebase() {
	const firebase = React.useContext(FirebaseContext);

	return firebase;
}
