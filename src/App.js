import React from "react";
import { FirebaseProvider } from "./firebase/FirebaseProvider";
import { AddPayment } from "./add/AddPayment";
import { Payments } from "./payments/Payments";
import { Route } from "./mini-router/Route";
import { Link } from "./mini-router/Link";
import { MiniRouter } from "./mini-router/MiniRouter";
import styles from "./App.module.css";
import { Register } from "./authentication/Register";
import { SignedInOnly } from "./authentication/SignedInOnly";

function App({ firebase }) {
  return (
    <FirebaseProvider firebase={firebase}>
      <MiniRouter>
        <main className={styles.root}>
          <header>
            <h1>Did I pay?!</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </header>

          <Route path="/register">
            <Register />
          </Route>

          <SignedInOnly>
            <Route path="/">
              <Link to="/add">Add payment</Link>
              <Payments />
            </Route>
          </SignedInOnly>

          <SignedInOnly>
            <Route path="/add">
              <Link to="/">Back to payments</Link>
              <AddPayment />
            </Route>
          </SignedInOnly>
        </main>
      </MiniRouter>
    </FirebaseProvider>
  );
}

export default App;
