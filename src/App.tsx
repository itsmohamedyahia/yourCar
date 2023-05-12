import "./App.scss";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar/Navbar";
import SectionHero from "./Components/Sections/SectionHero";
import NavHeroContainer from "./Components/NavHeroContainer";
import SectionAbout from "./Components/Sections/SectionAbout";
import SectionServices from "./Components/Sections/SectionServices";

function App() {
  return (
    <>
      <NavHeroContainer>
        <Navbar />
        <SectionHero />
      </NavHeroContainer>
      <Main>
        <SectionAbout />
        <SectionServices />
      </Main>
    </>
  );
}

export default App;
