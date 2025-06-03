import React from "react";
import Hero from "../components/agency/Hero";
import About from "../components/agency/About";
import Services from "../components/agency/Services";
import Work from "../components/agency/Work";
import Projects from "../components/agency/Projects";
import Pricing from "../components/agency/Pricing";
import Testimonials from "../components/agency/Testimonials";
import FAQs from "../components/agency/FAQs";
import Contact from "../components/agency/Contact";

const WebAgency = () => {
  return (
    <div className="w-full">
           <header className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-medium text-gray-800">Web & App Development</h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Web & App Development</span>
            </nav>
          </div>
        </div>
      </header>
      <Hero />
      <About />
      <Services />
      <Work />
      <Projects />
      <Pricing />
      <Testimonials />
      <FAQs />
      <Contact />
    </div>
  );
};

export default WebAgency;
