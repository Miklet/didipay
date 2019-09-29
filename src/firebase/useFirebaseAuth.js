import { useFirebase } from "./useFirebase";
import React from "react";

export function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = React.useState(null);
  const firebase = useFirebase();

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      setCurrentUser(authUser);
    });

    return unsubscribe;
  });

  return { currentUser, isSignedIn: currentUser != null };
}
