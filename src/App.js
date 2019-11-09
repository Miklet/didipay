import React from "react";
import { FirebaseProvider } from "./firebase/FirebaseProvider";
import { AddPayment } from "./add/AddPayment";
import { Payments } from "./payments/Payments";
import { Route } from "./mini-router/Route";
import { Link } from "./mini-router/Link";
import { MiniRouter } from "./mini-router/MiniRouter";
import { Redirect } from "./mini-router/Redirect";
import { Register } from "./authentication/Register";
import { SignedInOnly } from "./authentication/SignedInOnly";
import { Login } from "./authentication/Login";
import { SignedOutOnly } from "./authentication/SignedOutOnly";
import { Logout } from "./authentication/Logout";
import { Header } from "./core/Header";
import { Logo } from "./core/Logo";
import { Button } from "./core/Button";
import { Stack } from "./core/Stack";

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
          <div className="container mx-auto px-3">
            <Route path="/">
              <SignedOutOnly>
                <Redirect to="/login" />
              </SignedOutOnly>
              <SignedOutOnly>
                <div className="my-auto w-full">
                  <Stack>
                    <Button
                      variant="primary"
                      fullWidth
                      component={Link}
                      to="/login"
                    >
                      Login
                    </Button>
                    <Button
                      variant="secondary"
                      fullWidth
                      component={Link}
                      to="/register"
                    >
                      Register
                    </Button>
                  </Stack>
                </div>
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
