import React from "react";
import classes from "./Sections.module.scss";

const Section3 = (props) => {
  return (
    <div className={classes.Section3}>
      <div className={classes.Section3__container}>
        <div className={classes.Section3__left}>
          <h2>BoomWriter inspires students to write on any subject.</h2>
          <p>
            Try it for ELA, Social Studies/History, Science and even Math. Plus,
            it can be used on any device.
          </p>
          <button>Sign up for free as a teacher</button>
        </div>
        <div className={classes.Section3__right}>
          <img src="/assets/img/section3img.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
