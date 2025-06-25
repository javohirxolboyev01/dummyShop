import React from "react";
import HeroShop from "@/assets/hero/HeroShop.svg";
import Heros from "@/components/ReusableHero/Heros";

const About = () => {
  return (
    <div>
      <Heros
        title="About"
        breadcrumb={["Home", "About"]}
        linkMap={{ Home: "/", About: "/about" }}
        backgroundImage={HeroShop}
      />
    </div>
  );
};

export default About;
