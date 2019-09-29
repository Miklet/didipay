import { useFirebaseAuth } from "../firebase/useFirebaseAuth";

export function SignedInOnly({ children }) {
  const { isSignedIn } = useFirebaseAuth();

  return isSignedIn ? children : null;
}
