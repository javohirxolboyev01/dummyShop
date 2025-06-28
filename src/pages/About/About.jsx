import React from "react";
import HeroShop from "@/assets/hero/HeroShop.svg";
import Heros from "@/components/ReusableHero/Heros";
import ActiveLink from "@/components/ActiveLink/ActiveLink";

const About = () => {
  return (
    <div>
      <Heros
        title="About"
        breadcrumb={["Home", "About"]}
        linkMap={{ Home: "/", About: "/about" }}
        backgroundImage={HeroShop}
      />
      <h1>About malumotlari boladi</h1>
    </div>
  );
};

export default About;
