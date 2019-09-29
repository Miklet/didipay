import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function SignedOutOnly({ children }) {
  const { isSignedIn } = useFirebaseAuth();

  return isSignedIn ? null : children;
}
