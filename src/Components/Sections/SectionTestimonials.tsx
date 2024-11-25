import YellowStarIcon from "../../assets/svg/YellowStarIcon";
import "./SectionTestimonials.scss";
import img from "../../assets/images/testimonial__car.png";

import { useState } from "react";

function SectionTestimonials(props) {
  const [activeTest, setActiveTest] = useState(0);

  return (
    <section className="section--testimonials">
      <div className="container section--testimonials-container">
        <h1 className="section--testimonials__heading--shadow">Testimonials</h1>
        <h2 className="section--testimonials__heading">Testimonials</h2>
        <div className="section--testimonials__card">
          <p className="section--testimonials__text">
            {props.data[activeTest].description}
          </p>
          <div className="section--testimonials__container--stars">
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
          </div>
          <div className="section--testimonials__attestant">
            <p className="section--testimonials__attestant-name">
              {props.data[activeTest].name}
            </p>
            <p className="section--testimonials__attestant-address">
              Las vegas
            </p>
          </div>
          <img
            className="section--testimonials__card__img"
            src={img}
            alt="car"
          ></img>
        </div>
        <div className="section--testimonials__circles">
          {props.data.map((_item, index) => {
            return (
              <div
                key={index}
                className={`section--testimonials__circle ${
                  index === activeTest &&
                  "section--testimonials__circle--active"
                }`}
                onClick={() => {
                  setActiveTest(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SectionTestimonials;
