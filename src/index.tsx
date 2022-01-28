import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);

// ThemeProvider => A helper component for theming.
// Injects the theme into all styled components anywhere beneath it in the component tree,
// via the context API

// props 는 theme
// theme => An object that will be injected as theme into all interpolations in styled components
// beneath the provider.
