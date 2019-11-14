import React from "react";
import { FirebaseProvider } from "./firebase/FirebaseProvider";
import { AddPayment } from "./add/AddPayment";
import { Payments } from "./payments/Payments";
import { Route } from "./mini-router/Route";
import { MiniRouter } from "./mini-router/MiniRouter";
import { Redirect } from "./mini-router/Redirect";
import { Register } from "./authentication/Register";
import { SignedInOnly } from "./authentication/SignedInOnly";
import { Login } from "./authentication/Login";
import { SignedOutOnly } from "./authentication/SignedOutOnly";
import { Logout } from "./authentication/Logout";
import { Header } from "./core/Header";
import { Logo } from "./core/Logo";

function App({ firebase }) {
  return (
    <FirebaseProvider firebase={firebase}>
      <MiniRouter>
        <main className="min-h-screen bg-gray-800 flex flex-col">
          <Header>
            <Logo />
            <SignedInOnly>
              <Logout />
            </SignedInOnly>
          </Header>
          <div className="container mx-auto px-4">
            <Route path="/">
              <SignedOutOnly>
                <Redirect to="/login" />
              </SignedOutOnly>
            </Route>

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
