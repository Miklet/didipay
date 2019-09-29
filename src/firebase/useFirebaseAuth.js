import { useFirebase } from "./useFirebase";
import React from "react";

export function useFirebaseAuth() {
  const firebase = useFirebase();
  const [currentUser, setCurrentUser] = React.useState(
    firebase.auth().currentUser
  );

  React.useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(authUser => {
      setCurrentUser(authUser);
    });

    return () => {
      unsubscribe();
    };
  }, [firebase]);

  return { currentUser, isSignedIn: currentUser != null };
}
