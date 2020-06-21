import React, { Fragment } from "react";
// import Logo from "../../Logo/Logo";
// import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./SideNav.module.scss";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { NavLink, withRouter } from "react-router-dom";

const SideNav = (props) => {
  let attachedClasses = [classes.SideNav, classes.Close];

  if (props.open) {
    attachedClasses = [classes.SideNav, classes.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedClasses.join(" ")}>
        <nav className={classes.items}>
          <ul>
            <NavLink to="/" onClick={props.closed}>
              <li>Home</li>
            </NavLink>
            <NavLink to="/tools" onClick={props.closed}>
              <li>Activities</li>
            </NavLink>
            <li>Store</li>
            <NavLink to="/pricing-plus/teachers" onClick={props.closed}>
              <li>Pricing</li>
            </NavLink>
            <li>Writing Bee</li>
            <li>Parents</li>
            <li>The Haunt</li>
            <li>More</li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default SideNav;
