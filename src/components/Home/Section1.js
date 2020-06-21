import React from "react";
import classes from "./Sections.module.scss";

const Section1 = (props) => {
  return (
    <div className={classes.Section1}>
      <div></div>
      <div className={classes.Card}>
        <h1 className={classes.Card__heading}>Where Students Love to Write</h1>
        <p className={classes.Card__paragraph}>
          The writing app for teachers to conduct remote learning activities
          with students
        </p>
        <p className={classes.Card__callToAction}>Sign up for free:</p>

        <div className={classes.Card__miniCard}>
          <img
            src="/assets/img/teacher.png"
            alt=""
            className={classes.Card__img}
          />
          <p className={classes.Card__imgParagraph}>Teacher</p>
        </div>
        <div className={classes.Card__miniCard}>
          <img
            src="/assets/img/student.png"
            alt=""
            className={classes.Card__img}
          />
          <p className={classes.Card__imgParagraph}>Student</p>
        </div>
        <div className={classes.Card__miniCard}>
          <img
            src="/assets/img/parent.png"
            alt=""
            className={classes.Card__img}
          />
          <p className={classes.Card__imgParagraph}>Parent</p>
        </div>
      </div>
    </div>
  );
};

export default Section1;
