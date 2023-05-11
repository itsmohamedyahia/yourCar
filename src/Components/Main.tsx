import "./Main.scss";
import SectionAbout from "./Sections/SectionAbout";
import SectionServices from "./Sections/SectionServices";

export default function Main() {
  return (
    <main>
      <SectionAbout />
      <SectionServices />
    </main>
  );
}
