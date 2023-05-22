import CarCard from "./Components/CarCard";
import "./SectionCars.scss";
import { useState } from "react";
import { CarsDataContext } from "../../utils/carsDataContext";
import { useContext } from "react";

export default function SectionCars() {
  const [index1stShowedCar, setIndex1stShowedCar] = useState(0);
  const [indexLastShowedCar, setIndexLastShowedCar] = useState(2);
  const [indexLastShowedCarOnTablet, setIndexLastShowedCarOnTablet] =
    useState(1);
  const [indexLastShowedCarOnMobile, setIndexLastShowedCarOnMobile] =
    useState(0);

  const [activeCar, setActiveCar] = useState(0);

  const [carsData, setCarsData] = useContext(CarsDataContext);
  console.log(carsData);
  /////////////////////

  const handleQuantityChange = (index, amount) => {
    setCarsData((prevCars) => {
      const updatedCars = [...prevCars];
      const car = updatedCars[index];
      car.inCart += amount;
      return updatedCars;
    });
  };

  return (
    <section id="cars" className="section--cars">
      <div className="container">
        <h1 className="section--cars__heading--shadow">Cars</h1>
        <h2 className="section--cars__heading">Cars</h2>
        <div className="section--cars__card-container">
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
          {carsData
            .filter(
              (item, index) =>
                index >= index1stShowedCar && index <= indexLastShowedCar
            )
            .map((data, index) => (
              <CarCard
                key={data.name}
                data={data}
                setData={setCarsData}
                onIncrease={() => handleQuantityChange(index, 1)}
                onDecrease={() => handleQuantityChange(index, -1)}
              />
            ))}
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
          {carsData.map((item, index) => {
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
