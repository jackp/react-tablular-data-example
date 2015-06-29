/**
 * HomeView
 * /
 */
import React from "react";
import { AppBar } from "material-ui";

import uiActions from "actions/uiActions";

const Header = React.createClass({
  render() {
    return (
      <header>
        <AppBar
          title="React Tabular Data Example: Salary Tool"
          onLeftIconButtonTouchTap={ uiActions.toggleSidebar } />
      </header>
    );
  }
});

export default Header;
