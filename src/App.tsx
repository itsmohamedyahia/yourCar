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
import NavSidebar from "./Components/Sidebar/NavSidebar";
import CartSidebar from "./Components/Sidebar/CartSidebar";

import data from "../public/data.json";
import { useState } from "react";
//context
import { CarsDataContext } from "./utils/carsDataContext";
import { SidebarStateContext } from "./utils/SidebarStateContext";
import { CartStateContext } from "./utils/CartStateContext";

function App() {
  const itsCarsData = data.cars.map((obj) => {
    return { ...obj, inCart: 0 };
  });

  const [carsData, setCarsData] = useState(itsCarsData);
  const [isMobNavActive, setIsMobNavActive] = useState(false);
  const [isCartActive, setIsCartActive] = useState(false);
  //=============================================

  return (
    <SidebarStateContext.Provider
      value={[isMobNavActive, setIsMobNavActive, isCartActive, setIsCartActive]}
    >
      <CarsDataContext.Provider value={[carsData, setCarsData]}>
        <NavHeroContainer>
          <Navbar />
          <SectionHero
            onClick={() => {
              setIsMobNavActive(false);
              setIsCartActive(false);
            }}
          />
        </NavHeroContainer>
        <main
          onClick={() => {
            setIsMobNavActive(false);
            setIsCartActive(false);
          }}
        >
          <SectionAbout />
          <SectionServices />
          <SectionCars />
          <SectionGallery />
          <SectionTestimonials data={data.testimonials} />
          <SectionFeatured />

          <Footer />
        </main>
        <CartSidebar />
        <NavSidebar />
      </CarsDataContext.Provider>
    </SidebarStateContext.Provider>
  );
}

export default App;
