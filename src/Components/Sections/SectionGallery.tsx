import img1 from "../../assets/images/gallery-car1.png";
import img2 from "../../assets/images/gallery-car2.png";
import img3 from "../../assets/images/gallery-car3.png";
import img4 from "../../assets/images/gallery-car4.png";
import img5 from "../../assets/images/gallery-car-5-unshadowed.png";
import img6 from "../../assets/images/gallery-car6.png";
import img7 from "../../assets/images/gallery-car7.png";
import img8 from "../../assets/images/gallery-car8.png";
import img9 from "../../assets/images/gallery-car9.png";

import "./SectionGallery.scss";

export default function SectionGallery() {
  return (
    <section className="section--gallery">
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img1} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img2} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img3} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img4} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item section--gallery__item--center">
        <img className="section--gallery__item__img" src={img5} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img6} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img7} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img8} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
      <div className="section--gallery__item">
        <img className="section--gallery__item__img" src={img9} alt="car"></img>
        <div className="section--gallery__item__label">
          <p className="section--gallery__item__label__heading">
            Tesla Model 3
          </p>
          <p className="section--gallery__item__label__desc">
            Disruptive, avant-grade, futuristic, innovative.
          </p>
          <a className="section--gallery__item__label__btn" href="#">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}
