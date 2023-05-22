import React from "react";
import "./Footer.scss";
import FBLogo from "./Components/FBLogo";
import TwitterLogo from "./Components/TwitterLogo";
import IGLogo from "./Components/IGLogo";
import LocationIcon from "./Components/LocationIcon";
import PhoneIcon from "./Components/PhoneIcon";
import MailIcon from "./Components/MailIcon";

function Footer() {
  function formSubmitHandler() {}

  return (
    <footer className="footer">
      <div className="container ">
        <div className="footer__grid-container">
          <div className="footer__grid-item">
            <p className="footer__grid-item__logo">
              <span>Your</span>Car
            </p>
            <p className="footer__grid-item__company-description footer__grid-item__company-description--first">
              We are known for luxurious and premium chaffeur services
              worldwide. We are simply the best you can find.
            </p>
            <p className="footer__grid-item__company-description">
              we are dedicated to providing our customers with a first-class car
              buying, selling, and renting experience.
            </p>
          </div>
          <div className="footer__grid-item ">
            <p className="footer__grid-item__heading">Newsletter</p>
            <p className="footer__subscribe-description">
              Subscribe to our news letter for updates, news and exclusive
              offers
            </p>
            <form className="footer__form" onSubmit={formSubmitHandler}>
              <input
                type="text"
                placeholder="Email"
                className="footer__form__input"
              ></input>
              <button type="submit" className="footer__form__submit-btn">
                Submit
              </button>
            </form>
          </div>
          <div className="footer__grid-item footer__grid-item--contact">
            <p className="footer__grid-item__heading">Contact</p>
            <div className="footer__grid-item--contact__content">
              <p className="footer__grid-item__contact-info">
                <LocationIcon />
                <span className="footer__grid-item__location__text">
                  2038 2nd Avenue, <br /> Las Vegas, United States
                </span>
              </p>
              <p className="footer__grid-item__contact-info">
                <PhoneIcon />
                <span>
                  <span className="footer__grid-item__mobile ">
                    01477678449405
                  </span>
                  <span className="footer__grid-item__mobile">
                    01477678449405
                  </span>
                </span>
              </p>
              <p className="footer__grid-item__contact-info">
                <MailIcon />
                <span className="footer__grid-item__email">
                  info@YourCar.com
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="footer__social-media">
          <FBLogo />
          <TwitterLogo />
          <IGLogo />
        </div>
        <div className="footer__seperator"></div>
        <p className="footer__copyright">
          &copy; Copyright 2023 · <span>YourCar</span> All rights reserved{" "}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
