import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { ErrorBoundary } from "react-error-boundary";
import { I18nextProvider } from "react-i18next";
import ErrorPage from "./pages/misc/error/error.component";
import Router from "./router/router.component";
import i18n from "./utils/i18n";

//Globally add react
window.React = React;

ReactDOM.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <ErrorBoundary FallbackComponent={ErrorPage}>
        <Suspense fallback={"Loading..."}>
          <Router />
        </Suspense>
      </ErrorBoundary>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
