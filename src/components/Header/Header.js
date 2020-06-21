import React, { useState, useEffect } from "react";
import classes from "./Header.module.scss";
import icon from "../../assets/img/icon.png";
import SideNav from "../../components/Header/SideNav/SideNav";
import Toolbar from "./Toolbar/Toolbar";
import { NavLink, withRouter } from "react-router-dom";

const Header = (props) => {
  const [drawer, setDrawer] = useState(false);
  const [location, setLocation] = useState(false);
  const sideDrawerClosedDrawer = () => {
    setDrawer(false);
  };

  const sideDrawerToggleHandler = () => {
    setDrawer((prevState) => {
      return true;
    });
  };

  useEffect(() => {
    if (props) {
      setLocation(
        props.history.location.pathname ? props.history.location.pathname : ""
      );
    }
  }, [props]);

  return (
    <header className={classes.Header}>
      <nav id={classes.Navigation} className={classes.Navigation}>
        <div className={classes.Navigation__container}>
          <div className={classes.Navigation__left}>
            <div className={classes.Navigation__logo}>
              <NavLink to="/">
                <img src={icon} alt="BoomWriter Logo" />
              </NavLink>
            </div>
            <Toolbar drawerToggleClicked={sideDrawerToggleHandler}></Toolbar>
            <SideNav open={drawer} closed={sideDrawerClosedDrawer}></SideNav>
            <ul>
              <NavLink to="/tools">
                <li
                  className={location === "/tools" ? classes.activeTag : null}
                >
                  <p>Activities</p>
                </li>
              </NavLink>

              <li>Store</li>
              <NavLink to="/pricing-plus/teachers">
                <li
                  className={
                    location === "/pricing-plus/teachers"
                      ? classes.activeTag
                      : null
                  }
                >
                  <p>Pricing</p>
                </li>
              </NavLink>

              <li>Writing Bee</li>
              <li>Parents</li>
              <li>The Haunt</li>
              <li>More</li>
            </ul>
          </div>
          <ul className={classes.Navigation__right}>
            <li onClick={() => props.openModal("login")}>
              <p className="current">Login</p>
            </li>
            <li onClick={() => props.openModal("join")}>
              <p className="current">Join</p>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default withRouter(Header);
