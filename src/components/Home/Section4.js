import React from "react";
import classes from "./Sections.module.scss";

const Section4 = (props) => {
  return (
    <div className={classes.Section4}>
      <div
        onClick={() => props.openModal("writing")}
        className={classes.Section4__box}
      >
        <img src="/assets/img/feat1.png" alt="" />

        <h3 className="heading-tertiary u-margin-bottom-small">Writing</h3>
        <i className="fas fa-play-circle fa-4x"></i>
        <p className="Section4-box__text">
          Get the best from your wirters in <span>any subject</span>
        </p>
      </div>

      <div
        onClick={() => props.openModal("voting")}
        className={classes.Section4__box}
      >
        <img src="/assets/img/feat2.png" alt="" />
        <h3 className="heading-tertiary u-margin-bottom-small">Voting</h3>
        <i className="fas fa-play-circle fa-4x"></i>
        <p className="Section4-box__text">
          Embrace <span>Peer Appraisal</span> in your classroom
        </p>
      </div>

      <div
        onClick={() => props.openModal("reading")}
        className={classes.Section4__box}
      >
        <img src="/assets/img/feat3.png" alt="" />

        <h3 className="heading-tertiary u-margin-bottom-small">Reading</h3>
        <i className="fas fa-play-circle fa-4x"></i>
        <p className="Section4-box__text">
          Writing is only half the literacy challenge. Using our writing app
          will also <span>enhance reading skills</span>
        </p>
      </div>

      <div
        onClick={() => props.openModal("grading")}
        className={classes.Section4__box}
      >
        <img src="/assets/img/feat4.png" alt="" />

        <h3 className="heading-tertiary u-margin-bottom-small">Grading</h3>
        <i className="fas fa-play-circle fa-4x"></i>
        <p className="Section4-box__text">
          <span>Easy to use</span> Gradebook featuring standards-based rubrics
        </p>
      </div>
    </div>
  );
};

export default Section4;
