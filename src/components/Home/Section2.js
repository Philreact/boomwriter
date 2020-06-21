import React from "react";
import classes from "./Sections.module.scss";

const Section2 = (props) => {
  return (
    <div className={classes.Section2}>
      <div className={classes.Section2__Container1}>
        <img
          src="/assets/img/char1.png"
          alt=""
          className={classes.Section2__img1}
        />
        <h2 className={classes.Section2__heading1}>Our writing app tool kit</h2>
        <p className={classes.Section2__para1}>
          For all fiction, non-fiction and vocabulary-focused writing activities
        </p>
      </div>
      <div className={classes.Section2__Container2}>
        <div className={classes.Section2__card}>
          <div className={classes.Section2__img2}>
            <img src="/assets/img/char2.png" alt="" />
            <div className={classes.Section2__circle1}></div>
          </div>

          <h3>Stories</h3>
          <p>
            Let your class collaborate to create an original story that can be
            published into a softcover book and personalized for each student!
          </p>
        </div>

        <div className={classes.Section2__card}>
          <div className={classes.Section2__img2}>
            <img src="/assets/img/char3.png" alt="" />
            <div className={classes.Section2__circle2}></div>
          </div>
          <h3>Assignment</h3>
          <p>
            Use this flexible writing app to engage students while conducting
            short or long-term group writing activities in any subject.
          </p>
        </div>
        <div className={classes.Section2__card}>
          <div className={classes.Section2__img2}>
            <img src="/assets/img/char4.png" alt="" />
            <div className={classes.Section2__circle3}></div>
          </div>
          <h3>Journals</h3>
          <p>
            Engage your students in consistent writing. BoomWriter Student
            Journals are your 'go-to' place for students to write about anything
            and everything!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
