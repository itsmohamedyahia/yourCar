import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main";
import SectionHero from "./Components/Sections/SectionHero";
function App() {
  return (
    <>
      <div className="bg-img-container">
        <Navbar />
        <SectionHero />
      </div>
      <Main />
    </>
  );
}

export default App;
