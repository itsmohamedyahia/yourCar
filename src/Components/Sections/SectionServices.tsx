import DiamondIcon from "../../assets/svg/DiamondIcon";
import HandKeyIcon from "../../assets/svg/HandKeyIcon";
import StarIcon from "../../assets/svg/StarIcon";
import Service from "./Components/Service";
import "./SectionServices.scss";

export default function SectionServices() {
  return (
    <section id="services" className="section--services">
      <div className="container">
        <h1 className="section--services__heading--shadow">Services</h1>
        <h2 className="section--services__heading">Services</h2>
        <div className="section--services__services">
          <Service
            className="section--services__services__service"
            icon={
              <StarIcon className="section--services__services__service__icon" />
            }
            title="Car Sales"
            description="
            At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs."
          />
          <Service
            className="section--services__services__service"
            icon={
              <HandKeyIcon className="section--services__services__service__icon" />
            }
            title="Car Rental"
            description="
            If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable driving experience."
          />
          <Service
            className="section--services__services__service"
            icon={
              <DiamondIcon className="section--services__services__service__icon" />
            }
            title="Car Selling"
            description="
            At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get  your vehicle with minimal effort."
          />
        </div>
      </div>
    </section>
  );
}
