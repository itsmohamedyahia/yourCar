import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import SectionHero from "./Components/Sections/SectionHero";
import NavHeroContainer from "./Components/NavHeroContainer";
import SectionAbout from "./Components/Sections/SectionAbout";
import SectionServices from "./Components/Sections/SectionServices";
import SectionTestimonials from "./Components/Sections/SectionTestimonials";
import SectionFeatured from "./Components/Sections/SectionFeatured";
import Footer from "./Components/Sections/Footer/Footer";
import SectionGallery from "./Components/Sections/SectionGallery";
import SectionCars from "./Components/Sections/SectionCars";

import data from "../public/data.json";
import { useState } from "react";

function App() {
  const itsCarsData = data.cars.map((obj) => {
    return { ...obj, inCart: 0 };
  });

  const [carsData, setCarsData] = useState(itsCarsData);

  //=============================================

  const handleQuantityChange = (index, amount) => {
    setCarsData((prevCars) => {
      const updatedCars = [...prevCars];
      const car = updatedCars[index];
      car.inCart += amount;
      return updatedCars;
    });
  };

  return (
    <>
      <NavHeroContainer>
        <Navbar />
        <SectionHero />
      </NavHeroContainer>
      <main>
        <SectionAbout />
        <SectionServices />
        <SectionCars
          data={carsData}
          setData={setCarsData}
          handleQuantityChange={handleQuantityChange}
        />
        <SectionGallery />
        <SectionTestimonials data={data.testimonials} />
        <SectionFeatured />

        <Footer />
        <aside className="cart-sidebar">
          {carsData
            .filter((obj) => obj.inCart > 0)
            .map((obj) => (
              <h1>ez man</h1>
            ))}
        </aside>
      </main>
    </>
  );
}

export default App;
