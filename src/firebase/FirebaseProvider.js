import {FirebaseContext} from './firebaseContext';
import React from 'react';

export function FirebaseProvider({children, firebase}) {
	return (
		<FirebaseContext.Provider value={firebase}>
			{children}
		</FirebaseContext.Provider>
	);
}
