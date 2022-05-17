import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { Context } from "./context/index";
import { ErrorPage } from "./pages/ErrorPage/index";
import { HomePage } from "./pages/HomePage";
import "./app.css";
import { PassengerAgePage } from "./pages/PassengerAgePage";
import { PassengerSexPage } from "./pages/PassengerSexPage";
import { PassengerClassesPage } from "./pages/PassengerClassesPage";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { LoginPage } from "./pages/LoginPage/index";

const App = () => {
  return (
    <Context.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route exact path="/login" element={<LoginPage />} />
            <Route
              exact
              path="/"
              element={<AuthenticatedRoute component={HomePage} />}
            />
            <Route
              exact
              path="/age"
              element={<AuthenticatedRoute component={PassengerAgePage} />}
            />
            <Route
              exact
              path="/sex"
              element={<AuthenticatedRoute component={PassengerSexPage} />}
            />
            <Route
              exact
              path="/classes"
              element={<AuthenticatedRoute component={PassengerClassesPage} />}
            />
            <Route exact path="*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Context.Provider>
  );
};

export default App;
