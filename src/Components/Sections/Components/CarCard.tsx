import LuggageIcon from "../../SVGs/LuggageIcon";
import SeatsIcon from "../../SVGs/SeatsIcon";
import { CarsDataContext } from "../../../utils/carsDataContext";
import { useContext } from "react";
export default function CarCard(props) {
  const [carsData, setCarsData] = useContext(CarsDataContext);

  function minusBtnHandler() {}

  function plusBtnHandler() {}

  return (
    <div className="section--cars__card">
      <img
        className="section--cars__card__img"
        src={props.data.image}
        alt="car"
      ></img>
      <h3 className="section--cars__card__heading">{props.data.class}</h3>
      <p className="section--cars__card__post-heading">{props.data.name}</p>
      <p className="section--cars__card__desc">{props.data.description}</p>
      <div className="section--cars__card__foot">
        <div className="section--cars__card__foot__info">
          <div className="section--cars__card__foot__info__div">
            <SeatsIcon className="section--cars__card__foot__info__icon" />
            <p>{props.data.seats} Seats</p>
          </div>
          <div className="section--cars__card__foot__info__div">
            <LuggageIcon className="section--cars__card__foot__info__icon"></LuggageIcon>
            <p>{props.data.luggage} Luggage</p>
          </div>
        </div>
        <div className="section--cars__card__foot__control">
          <button
            onClick={props.onDecrease}
            className="section--cars__card__foot__control__sign section--cars__card__foot__control__sign--minus"
          >
            -
          </button>
          <div className="section--cars__card__foot__control__number">
            {carsData[props.index].inCart}
          </div>
          <button
            onClick={props.onIncrease}
            className="section--cars__card__foot__control__sign section--cars__card__foot__control__sign--plus"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
