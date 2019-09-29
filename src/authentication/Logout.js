import React from "react";
import { useFirebase } from "../firebase/useFirebase";

export function Logout() {
  const firebase = useFirebase();

  function logout() {
    firebase.auth().signOut();
  }

  return (
    <button type="button" onClick={logout}>
      Logout
    </button>
  );
}
