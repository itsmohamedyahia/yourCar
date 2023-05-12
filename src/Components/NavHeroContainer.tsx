import "./NavHeroContainer.scss";
import { useState, useEffect } from "react";

function NavHeroContainer(props) {
  // const [isHeroVisible, setHeroVisible] = useState(true);

  const [isHeroVisible, setHeroVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const handleScroll = () => {
        const heroSection = document.querySelector(".section--hero");
        const rect = heroSection.getBoundingClientRect();
        const isVisible = rect.bottom > 0;

        setHeroVisible(isVisible);
      };

      // Attach the scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, 1000);
  }, []);

  const classes = isHeroVisible ? undefined : "sticky";

  return <div className={classes + " bg-img-container"}>{props.children}</div>;
}

export default NavHeroContainer;
