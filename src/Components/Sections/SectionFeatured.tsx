import BMWLogo from "../SVGs/BMWLogo";
import MitsubishiLogo from "../SVGs/MitsubishiLogo";
import MercedesLogo from "../SVGs/MercedesLogo";
import NissanLogo from "../SVGs/NissanLogo";
import SuzukiLogo from "../SVGs/SuzukiLogo";
import ToyotaLogo from "../SVGs/ToyotaLogo";
import VolvoLogo from "../SVGs/VolvoLogo";
import SubaruLogo from "../../assets/images/Featured/SubaruLogo.png";

import "./SectionFeatured.scss";

export default function SectionFeatured() {
  return (
    <div className="section--featured">
      <div className="container section--featured__img-container">
        <BMWLogo />
        <VolvoLogo />
        <SuzukiLogo />
        <ToyotaLogo />
        <NissanLogo />
        <MercedesLogo />
        <img src={SubaruLogo} className="section--featured__img"></img>
        <MitsubishiLogo />
      </div>
    </div>
  );
}
