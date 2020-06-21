import React, { useEffect, useState, Fragment } from "react";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";
import Section4 from "../../components/Home/Section4";
import MonthSection from "../../components/Home/MonthSection";
import axios from "axios";
import Modal from "../../components/UI/Modal/Modal";
import classes from "./Home.module.scss";
const Home = () => {
  const [monthData, setMonthData] = useState({
    writers: "",
    activities: "",
    countries: "",
    error: false,
    loading: true,
  });
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");

  const getMonthData = async () => {
    try {
      const res = await axios.get(
        "https://sand-schools.boomwriter.com/home/ping"
      );

      const data = res.data;

      setMonthData((prevState) => {
        return {
          ...prevState,
          ...data,
          loading: false,
        };
      });
    } catch (error) {
      console.log(error.message);
      setMonthData((prevState) => {
        return {
          ...prevState,

          loading: false,
          error: true,
        };
      });
    }
  };

  const openModal = (type) => {
    setModal((prevState) => {
      return true;
    });

    setModalType(type);
  };
  const closeModal = () => {
    setModal((prevState) => {
      return false;
    });
  };
  useEffect(() => {
    getMonthData();
  }, []);

  return (
    <Fragment>
      <Modal modalClosed={closeModal} show={modal}>
        <div className={classes.Home__close}>
          <i onClick={closeModal} className="fas fa-times"></i>
        </div>
        <div className={classes.Home__container}>
          <div className={classes.Home__header}>
            <p>{modalType.charAt(0).toUpperCase() + modalType.slice(1)}</p>
          </div>

          <video id="video" className={classes.Home__videoScreen}></video>
          <div className={classes.Home__videoControls}>
            <button className={classes.Home__btn} id="play">
              <i className="fa fa-play fa-2x"></i>
            </button>
            <button className={classes.Home__btn} id="stop">
              <i className="fa fa-stop fa-2x"></i>
            </button>
            <input
              type="range"
              id="progress"
              className="progress"
              min="0"
              max="100"
              step="0.1"
              value="0"
              readOnly
            />
            <span className="timestamp" id="timestamp">
              {" "}
            </span>
          </div>
        </div>
      </Modal>
      <section>
        <Section1 />
      </section>
      <section>
        <Section2 />
      </section>
      <section>
        <Section3 />
      </section>
      <section>
        <Section4 openModal={openModal} />
      </section>
      <section>
        <MonthSection monthData={monthData} />
      </section>
    </Fragment>
  );
};

export default Home;
