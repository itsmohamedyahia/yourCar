import ArrowTopRightIcon from "../../assets/svg/ArrowTopRightIcon";
import "./SectionHero.scss";

export default function SectionHero() {
  return (
    <section className="section--hero">
      <div className="container">
        <h1 className="section--hero__heading">
          Find the perfect car for you at YourCar.
        </h1>
        <p className="section--hero__text">
          We offer a wide range of cars that cater to your needs and budget.
          Visit us today and drive away with your dream car!
        </p>
        <a className="section--hero__link" href="#">
          Discover
          <ArrowTopRightIcon size="2.4rem" />
        </a>
      </div>
    </section>
  );
}
