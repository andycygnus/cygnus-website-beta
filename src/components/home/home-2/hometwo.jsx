import Counter from "@/common/counter";
import React from "react";
import About from "./about";
import Choose from "./choose";
import Gallery from "./gallery";
import HeroBanner from "./hero-banner";
import Service from "./service";
import Team from "./team";
import Testimonial from "../../../common/testimonial";

const HomeTwo = () => {
  return (
    <>
      <HeroBanner />
      <About />
      <Service />
      <Gallery />
      <Counter cls="pt-80 pb-100" />
      <Choose />
      <Team />
      <Testimonial bg_img={true} />
    </>
  );
};

export default HomeTwo;
