/**
 * Application entry point
 */

// Dependencies
import React from "react";
import injectTapEventPlugin from "react-tap-event-plugin";

// Components
import App from "components/App";

// https://github.com/zilverline/react-tap-event-plugin
// Needed for MaterialUI
injectTapEventPlugin();

// Render React components to DOM
React.render(<App />, document.getElementById("application"));

