import React, { useState, Fragment } from "react";

import classes from "./Layout.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/UI/Modal/Modal";

const Layout = (props) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState("");

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

  return (
    <Fragment>
      {
        <Modal modalClosed={closeModal} show={modal}>
          <div className={classes.Card__close}>
            <i onClick={closeModal} className="fas fa-times"></i>
          </div>
          <div className={classes.Card__header}>
            <p>
              {modalType === "login" ? "Login" : "Get started on BoomWriter"}
            </p>
          </div>
          <div className={classes.Card}>
            <div className={classes.Card__miniCard}>
              <img
                src="/assets/img/teacher.png"
                alt=""
                className={classes.Card__img}
              />
              <p className={classes.Card__imgParagraph}>I'm a Teacher</p>
            </div>
            <div className={classes.Card__miniCard}>
              <img
                src="/assets/img/student.png"
                alt=""
                className={classes.Card__img}
              />
              <p className={classes.Card__imgParagraph}>I'm a Student</p>
            </div>
            <div className={classes.Card__miniCard}>
              <img
                src="/assets/img/parent.png"
                alt=""
                className={classes.Card__img}
              />
              <p className={classes.Card__imgParagraph}>I'm a Parent</p>
            </div>
          </div>
        </Modal>
      }

      <Header openModal={openModal} />
      <main className={classes.Layout}>{props.children}</main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
