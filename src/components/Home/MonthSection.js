import React from "react";
import classes from "./Sections.module.scss";

const MonthSection = (props) => {
  console.log(props);
  return (
    <div className={classes.MonthSection}>
      <div className={classes.MonthSection__Container2}>
        <div className={classes.MonthSection__card}>
          <div className={classes.MonthSection__img2}>
            {/* <img src="/assets/img/char2.png" alt="" /> */}
            <i className="fas fa-pen fa-3x"></i>
            <div className={classes.MonthSection__circle1}></div>
          </div>

          <p className={classes.MonthSection__paraNumber}>
            {props.monthData.writers}
          </p>
          <p>Writers</p>
        </div>

        <div className={classes.MonthSection__card}>
          <div className={classes.MonthSection__img2}>
            {/* <img src="/assets/img/char3.png" alt="" /> */}
            <i className="fas fa-book fa-3x"></i>
            <div className={classes.MonthSection__circle2}></div>
          </div>
          <p className={classes.MonthSection__paraNumber}>
            {props.monthData.activities}
          </p>
          <p>Activities</p>
        </div>
        <div className={classes.MonthSection__card}>
          <div className={classes.MonthSection__img2}>
            {/* <img src="/assets/img/char4.png" alt="" /> */}

            <i className="fas fa-location-arrow fa-3x"></i>
            <div className={classes.MonthSection__circle3}></div>
          </div>
          <p className={classes.MonthSection__paraNumber}>
            {props.monthData.countries}
          </p>
          <p>Countries</p>
        </div>
      </div>
    </div>
  );
};

export default MonthSection;
