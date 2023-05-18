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
        <SectionGallery />
        <SectionTestimonials />
        <SectionFeatured />
        <Footer />
      </main>
    </>
  );
}

export default App;
