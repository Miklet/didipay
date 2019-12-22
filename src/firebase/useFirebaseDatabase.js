import {useFirebase} from './useFirebase';
import React from 'react';

export function useFirebaseDatabase() {
	const firebase = useFirebase();
	const databaseRef = React.useRef(firebase.database());

	React.useEffect(() => {
		databaseRef.current = firebase.database();
	}, [firebase]);

	return databaseRef.current;
}
