import YellowStarIcon from "../../assets/svg/YellowStarIcon";
import "./SectionTestimonials.scss";
import img from "../../assets/images/testimonial__car.png";
function SectionTestimonials() {
  return (
    <section className="section--testimonials">
      <div className="container section--testimonials-container">
        <h1 className="section--testimonials__heading--shadow">Testimonials</h1>
        <h2 className="section--testimonials__heading">Testimonials</h2>
        <div className="section--testimonials__card">
          <p className="section--testimonials__text">
            I recently bought a car through YourCar and I was blown away by
            their exceptional service. The staff were friendly and
            knowledgeable, and they helped me find the perfect car for my needs.
            I highly recommend YourCar to anyone looking for a luxury car buying
            experience.
          </p>
          <div className="section--testimonials__container--stars">
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
            <YellowStarIcon />
          </div>
          <div className="section--testimonials__attestant">
            <p className="section--testimonials__attestant-name">Annie Rudy</p>
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
          <div className="section--testimonials__circle"></div>
          <div className="section--testimonials__circle"></div>
          <div className="section--testimonials__circle"></div>
          <div className="section--testimonials__circle"></div>
        </div>
      </div>
    </section>
  );
}

export default SectionTestimonials;
