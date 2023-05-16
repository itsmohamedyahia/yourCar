import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
import SectionHero from "./Components/Sections/SectionHero";
import NavHeroContainer from "./Components/NavHeroContainer";
import SectionAbout from "./Components/Sections/SectionAbout";
import SectionServices from "./Components/Sections/SectionServices";
import SectionTestimonials from "./Components/Sections/SectionTestimonials";
import SectionFeatured from "./Components/Sections/SectionFeatured";

function App() {
  return (
    <>
      <NavHeroContainer>
        <Navbar />
        <SectionHero />
      </NavHeroContainer>
      <main>
        <SectionAbout />
        <SectionServices />
        <SectionTestimonials />
        <SectionFeatured />
      </main>
    </>
  );
}

export default App;
