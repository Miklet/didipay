import {useFirebaseAuth} from '../firebase/useFirebaseAuth';

export function SignedInOnly({children}) {
	const {isSignedIn, isAuthVerified} = useFirebaseAuth();

	return isAuthVerified ? (isSignedIn ? children : null) : null;
}
