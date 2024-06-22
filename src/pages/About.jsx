import { Helmet } from "react-helmet-async";
import AboutThe from "../section/AboutThe";

import BannerSection from "../shared/BannerSection";
import Sponsors from "../section/Sponsors";

const About = () => {
  return (
    <section>
      <Helmet>
      <title>Kester | ABOUT
      </title>
      </Helmet>
        <BannerSection 
        subHeading={'home | About'}
        heading={'about'}
        ></BannerSection>
      <div className="">
        <AboutThe></AboutThe>
        <Sponsors></Sponsors>
      </div>
    </section>
  );
};

export default About;
