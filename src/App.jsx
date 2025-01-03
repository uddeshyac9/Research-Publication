// src/App.jsx

import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import Numbers from "./components/numbers";
import WhatsAppButton from "./components/WhatsAppButton"; // Import the component

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Team data={landingPageData.Team} />
      <Numbers />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Features data={landingPageData.Features} />
      <Testimonials data={landingPageData.Testimonials} />
      <Contact data={landingPageData.Contact} />
      <WhatsAppButton /> {/* Add the WhatsApp button here */}
    </div>
  );
};

export default App;
