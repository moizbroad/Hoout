import React from "react";
import HoutHandelSection from "../components/LandingPageSections/HoutHandelSection";
import ProductsSection from "../components/LandingPageSections/ProductsSection";
import OurValuesSection from "../components/LandingPageSections/OurValuesSection";
import OurAssortmentSectio from "../components/LandingPageSections/OurAssortmentSectio";
import VideoSection from "../components/LandingPageSections/VideoSection";
import TestimonialSection from "../components/LandingPageSections/TestimonialSection";
import { ContactusSection } from "../components/LandingPageSections/ContactusSection";

const Landingpage = () => {
  return (
    <>
      <HoutHandelSection />
      <ProductsSection />
      <OurValuesSection />

      <OurAssortmentSectio />

      <VideoSection />
      <TestimonialSection />
      <ContactusSection />
    </>
  );
};

export default Landingpage;
