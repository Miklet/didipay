import React from "react";
import { FirebaseProvider } from "./firebase/FirebaseProvider";
import { AddPayment } from "./add/AddPayment";
import { Payments } from "./payments/Payments";
import { Route } from "./mini-router/Route";
import { Link } from "./mini-router/Link";
import { MiniRouter } from "./mini-router/MiniRouter";
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
        <main className="min-h-screen bg-gray-800 max-w-6xl flex flex-col">
          <Header>
            <Logo />
            <SignedInOnly>
              <Route path="/">
                <Link to="/add">Add payment</Link>
              </Route>
              <Logout />
            </SignedInOnly>
          </Header>
          <div className="px-4 flex flex-column flex-1">
            <Route path="/">
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
