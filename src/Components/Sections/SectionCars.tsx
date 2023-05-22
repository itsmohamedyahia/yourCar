import CarCard from "./Components/CarCard";
import "./SectionCars.scss";
import { useState } from "react";

export default function SectionCars(props) {
  const [index1stShowedCar, setIndex1stShowedCar] = useState(0);
  const [indexLastShowedCar, setIndexLastShowedCar] = useState(2);
  const [indexLastShowedCarOnTablet, setIndexLastShowedCarOnTablet] =
    useState(1);
  const [indexLastShowedCarOnMobile, setIndexLastShowedCarOnMobile] =
    useState(0);

  const [activeCar, setActiveCar] = useState(0);
  return (
    <section className="section--cars">
      <div className="container">
        <h1 className="section--cars__heading--shadow">Cars</h1>
        <h2 className="section--cars__heading">Cars</h2>
        <div className="section--cars__card-container">
          {props.data
            .filter(
              (item, index) =>
                index >= index1stShowedCar && index <= indexLastShowedCar
            )
            .map((data, index) => (
              <CarCard
                key={data.name}
                data={data}
                setData={props.setData}
                onIncrease={() => props.handleQuantityChange(index, 1)}
                onDecrease={() => props.handleQuantityChange(index, -1)}
              />
            ))}
          <div className="section--cars__card-container__control section--cars__card-container__control--back ">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M3 12l18-12v24z" />
            </svg>
          </div>
          <div className="section--cars__card-container__control section--cars__card-container__control--forward">
            <svg
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21 12l-18 12v-24z" />
            </svg>
          </div>
        </div>
        <div className="section--cars__circles">
          {props.data.map((item, index) => {
            return (
              <div
                key={index}
                className={`section--cars__circle ${
                  index === activeCar && "section--cars__circle--active"
                }`}
                onClick={() => {
                  setActiveCar(index);
                }}
              ></div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
