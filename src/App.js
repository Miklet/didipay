// @ts-check
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
import { Login } from "./authentication/Login";
import { SignedOutOnly } from "./authentication/SignedOutOnly";
import { Logout } from "./authentication/Logout";

function App({ firebase }) {
  return (
    <FirebaseProvider firebase={firebase}>
      <MiniRouter>
        <main className={styles.root}>
          <header className={styles.header}>
            <h1>Did I pay?!</h1>
            <SignedOutOnly>
              <div className={styles.actions}>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </div>
            </SignedOutOnly>
            <SignedInOnly>
              <div className={styles.actions}>
                <Route path="/">
                  <Link to="/add">Add payment</Link>
                </Route>
                <Logout />
              </div>
            </SignedInOnly>
          </header>
          <div className={styles.container}>
            <Route path="/register">
              <Register />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <SignedInOnly>
              <Route path="/">
                <Payments />
              </Route>
            </SignedInOnly>

            <SignedInOnly>
              <Route path="/add">
                <Link to="/">Back to payments</Link>
                <AddPayment />
              </Route>
            </SignedInOnly>
          </div>
        </main>
      </MiniRouter>
    </FirebaseProvider>
  );
}

export default App;
