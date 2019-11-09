import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function SignedOutOnly({ children }) {
  const { isSignedIn, isAuthVerified } = useFirebaseAuth();

  return isAuthVerified ? (isSignedIn ? null : children) : null;
}
