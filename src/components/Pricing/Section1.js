import React, { useState, Fragment } from "react";
import classes from "./Sections.module.scss";

const Section1 = (props) => {
  const [page, setPage] = useState("teachers");
  return (
    <div className={classes.Section1}>
      <div className={classes.Section1__heading}>
        <h1>BoomWriter Pricing</h1>

        <div className={classes.Section1__headingButtons}>
          <button
            style={{
              backgroundColor: page === "teachers" ? "#52b5ff" : "white",
              color: page === "teachers" ? "white" : "#52b5ff",
            }}
            onClick={() => setPage("teachers")}
          >
            Teachers
          </button>
          <button
            style={{
              color: page === "teachers" ? "#52b5ff" : "white",
              backgroundColor: page === "teachers" ? "white" : "#52b5ff",
            }}
            onClick={() => setPage("schools")}
          >
            Schools
          </button>
        </div>
      </div>
      {page === "teachers" ? (
        <Fragment>
          <p className={classes.Section1__paragraph}>
            BoomWriter is committed to providing teachers unlimited free access
            to our tools. We also provide additional feature upgrades to better
            support teachers' in-school and remote teaching efforts.
          </p>
          <div className={classes.Section1__container}>
            <div className={classes.Section1__col}>
              <div className={classes["Section1__col--above-1"]}>Free</div>
              <div className={classes["Section1__col--below-1"]}>
                <ul>
                  <li>
                    Unlimited number of BoomWriter Writing activities (Stories,
                    Assignments, Student Journals)
                  </li>
                  <li>Unlimited number of students</li>
                  <li>Unlimited number of classes</li>
                </ul>

                <button>Get Started</button>
              </div>
            </div>
            <div className={classes.Section1__col}>
              <div className={classes["Section1__col--above-2"]}>
                Basic – $5/month
              </div>
              <div className={classes["Section1__col--below-2"]}>
                <ul>
                  <li>Everything included in the Free version, plus:</li>
                  <li>
                    <img src="/assets/img/icon1.png" alt="" />
                    <p>
                      Standard-based grading system to measure your students’
                      performance View Sample Rubrics
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon2.png" alt="" />
                    <p>
                      PDF creation of student work to digitally share or print
                      PDF Print Sample
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon3.png" alt="" />
                    <p>
                      Duplicate existing assignments to use in your other
                      classes
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon4.png" alt="" />
                    <p>
                      Families receive a 10% discount on purchases of student
                      stories or journals
                    </p>
                  </li>
                  <li>*7-day free trial</li>
                </ul>
                <button>Get Started</button>
              </div>
            </div>
            <div className={classes.Section1__col}>
              <div className={classes["Section1__col--above-3"]}>
                Complete – $10/month
              </div>
              <div className={classes["Section1__col--below-3"]}>
                <ul>
                  <li>Everything included in the Free version, plus:</li>
                  <li>
                    <img src="/assets/img/icon1.png" alt="" />
                    <p>
                      Standard-based grading system to measure your students’
                      performance View Sample Rubrics
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon2.png" alt="" />
                    <p>
                      PDF creation of student work to digitally share or print
                      PDF Print Sample
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon3.png" alt="" />
                    <p>
                      Duplicate existing assignments to use in your other
                      classes
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon4.png" alt="" />
                    <p>
                      Families receive a 10% discount on purchases of student
                      stories or journals
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon5.png" alt="" />
                    <p>
                      In-app chat allowing teachers to communicate with their
                      students in real-time
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon6.png" alt="" />
                    <p>
                      Multiple teachers can collaborate on writing activities.
                    </p>
                  </li>
                  <li>
                    <img src="/assets/img/icon7.png" alt="" />
                    <p>
                      Students can provide teacher guided feedback to other
                      classmates’ work (Coming soon)
                    </p>
                  </li>
                  <li>*7-day free trial</li>
                </ul>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className={classes.Section1__container}>
          <div className={classes.Section1__schools}>
            <h2>BoomWriter Schools</h2>
            <p>Looking to use BoomWriter as a school or district solution?</p>
            <button>Contact us for more information</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Section1;
