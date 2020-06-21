import React from "react";

import DrawerToggle from "../DrawerToggle/DrawerToggle";
const Toolbar = (props) => {
  return <DrawerToggle clicked={props.drawerToggleClicked} />;
};

export default Toolbar;
