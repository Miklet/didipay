import {useFirebaseDatabase} from './useFirebaseDatabase';
import React from 'react';

export function useFirebaseMutation({path, type}) {
	const database = useFirebaseDatabase();

	const runMutation = React.useCallback(
		params => {
			if (type === 'push') {
				return database
					.ref(path)
					.push()
					.set(params);
			} else if (type === 'update') {
				return database.ref().update({
					[path]: params,
				});
			} else if (type === 'remove') {
				return database.ref(path).set(null);
			} else {
				throw new Error(`Unknown action type ${type}`);
			}
		},
		[type, database, path],
	);

	return runMutation;
}
