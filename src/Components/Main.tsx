import "./Main.scss";
import SectionAbout from "./Sections/SectionAbout";
import SectionHero from "./Sections/SectionHero";

export default function Main() {
  return (
    <main>
      <SectionHero />
      <SectionAbout />
    </main>
  );
}
