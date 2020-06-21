import React from "react";
import classes from "./Sections.module.scss";

const Section1 = (props) => {
  return (
    <div className={classes.Section1}>
      <h1 className={classes.Section1__heading}>
        BoomWriter Activities and Features
      </h1>
      <div className={classes.Section1__container}>
        <div className={classes.Section1__left}>
          <div>
            <p>S</p>
            <p>Stories</p>
          </div>
          <div>
            <p>A</p>
            <p>Assignments</p>
          </div>
          <div>
            <p>J</p>
            <p>Journals</p>
          </div>
          <div>
            <p>G</p>
            <p>Grading</p>
          </div>
        </div>
        <div className={classes.Section1__right}>
          <div className={classes.Section1__box}>
            <div>
              <p>Stories</p>
            </div>
            <div className={classes.Section1__boxBottom}>
              <p>
                Interactive group and individual story writing that gets
                published!
              </p>
              <img src="/assets/img/storyactivity.png" alt="" />
            </div>
          </div>
          <div className={classes.Section1__box}>
            <div>
              {" "}
              <p>Assignments</p>
            </div>
            <div className={classes.Section1__boxBottom}>
              <p>
                A customizable and easy-to-use tool to create group or
                individual writing assignments!
              </p>
              <img src="/assets/img/activity1.png" alt="" />
            </div>
          </div>
          <div className={classes.Section1__box}>
            <div>
              {" "}
              <p>Journals</p>
            </div>
            <div className={classes.Section1__boxBottom}>
              <p>
                The place where students can write consistently about anything
                and everything.
              </p>
              <img src="/assets/img/journalactivity.png" alt="" />
            </div>
          </div>
          <div className={classes.Section1__box}>
            <div>
              <p>Grading</p>
            </div>
            <div className={classes.Section1__boxBottom}>
              {" "}
              <p>Built-in Grading System</p>
              <img src="/assets/img/gradingactivity.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
