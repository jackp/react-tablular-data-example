/**
 * Sidebar
 * App sidebar
 */
import React from "react";
import Reflux from "reflux";
import { LeftNav, MenuItem } from "material-ui";

import uiStore from "stores/uiStore";

let menuItems = [
  { type: MenuItem.Types.SUBHEADER, text: "Resources Used" },
  {
    type: MenuItem.Types.LINK,
    payload: "https://facebook.github.io/react/",
    text: "React",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "https://github.com/spoike/refluxjs",
    text: "Reflux",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "http://material-ui.com/",
    text: "Material UI",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "http://webpack.github.io/",
    text: "Webpack",
    target: "_blank"
  },
  {
    type: MenuItem.Types.LINK,
    payload: "https://facebook.github.io/jest/",
    text: "Jest",
    target: "_blank"
  }
];

const Sidebar = React.createClass({
  mixins: [Reflux.listenTo(uiStore, "toggleSidebar")],
  render() {
    return (
      <aside>
        <LeftNav ref="sidebar" docked={false} menuItems={menuItems} />
      </aside>
    );
  },
  toggleSidebar(payload) {
    if(payload.toggleSidebar) {
      this.refs.sidebar.toggle();
    }
  }
});

export default Sidebar;
