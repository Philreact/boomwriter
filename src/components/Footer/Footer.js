import React from "react";
import classes from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Footer__container}>
        <div className={classes.Footer__logo}>
          <img src="/assets/img/icon.png" alt="" />
        </div>
        <div className={classes.Footer__links}>
          <ul>
            <li>About Us</li>
            <li>Blog</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div>
          <a
            href="http://www.boomwriter.media/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/assets/img/boomwritermedia.png" alt="" />
          </a>
          <p>
            BoomWriter Media Inc. - info@boomwriter.com | Website and contents ©
            2010-2020 BoomWriter Media Inc. All rights reserved.
          </p>
          <p>Patent Pending (62/029,115)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
