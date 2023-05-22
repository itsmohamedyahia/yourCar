import "./SectionAbout.scss";
import car from "../../assets/images/about__car_og.png";

export default function SectionAbout() {
  return (
    <section id="about" className="section--about">
      <div className="container--flex">
        <div className="section--about__container--text">
          <h1 className="section--about__heading--shadow">About Us</h1>
          <h2 className="section--about__heading">About</h2>
          <p className="section--about__text section--about__text--first">
            YourCar is a luxury car dealership that offers a personalized and
            first-class experience to its clients. Our team of experienced
            professionals is dedicated to providing exceptional service and
            finding the perfect vehicle to match our clients' unique preferences
            and requirements. We have an extensive selection of high-end
            vehicles, ranging from sports cars to SUVs, all of which are
            maintained to the highest standards of quality and safety.
          </p>
          <p className="section--about__text">
            At YourCar, we are committed to creating a stress-free and enjoyable
            car buying experience. We understand that purchasing a luxury car
            can be a significant investment, which is why we offer flexible
            financing options to make the process more manageable. Our team is
            available to answer any questions and provide guidance throughout
            the entire buying process. We take pride in our outstanding customer
            service and attention to detail, and we are confident that our
            clients will be satisfied with their experience at YourCar.
          </p>
        </div>
        <div className="section--about__container--img">
          <img className="section--about__img--car" src={car} alt="brown car" />
        </div>
      </div>
    </section>
  );
}
