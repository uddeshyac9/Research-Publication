import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
// import { servicesList } from "../config/data";
import { gsap } from "gsap";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import webhero from "../assets/design-hero.jpg";
import devhero from "../assets/dev-hero.jpg";
import socialhero from "../assets/social-hero.jpg";
import brandinghero from "../assets/branding-hero.jpg";
import adhero from "../assets/advertise-hero.jpg";

import devill from "../assets/ills/dev-ill.jpg";
import designill from "../assets/ills/design-ill.jpg";
import socialill from "../assets/ills/social-ill.jpg";
import brandingill from "../assets/ills/brand-ill.jpg";
import adill from "../assets/ills/ad-ill.jpg";

import website from "../assets/Website.jpg";

export const servicesList = [
  {
    id: 1,
    title: "Web Design",
    heropic: webhero,
    ill: designill,
    endpic: website,
    description:
      "We create visually appealing and user-friendly websites that are easy to navigate and understand.",
    keyFeatures: [
      "Responsive Design",
      "User-Friendly Interface",
      "Custom Graphics",
      "SEO Optimization",
      "Fast Loading Times",
    ],
    process: [
      "Consultation",
      "Planning",
      "Design",
      "Development",
      "Testing",
      "Launch",
    ],
    testimonials: [
      {
        client: "Client A",
        feedback:
          "Amazing web design services that transformed our online presence!",
      },
      {
        client: "Client B",
        feedback:
          "The team created a stunning website that is both functional and beautiful.",
      },
    ],
  },
  {
    id: 2,
    title: "Web Development",
    heropic: devhero,
    ill: devill,
    endpic: website,
    description:
      "We develop high-quality websites using cutting-edge technologies like React, Next.js, and WordPress.",
    keyFeatures: [
      "Custom Web Development",
      "E-commerce Solutions",
      "Content Management Systems",
      "API Integration",
      "Performance Optimization",
    ],
    process: [
      "Consultation",
      "Planning",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    testimonials: [
      {
        client: "Client C",
        feedback:
          "Our website's performance and functionality improved drastically after their work.",
      },
      {
        client: "Client D",
        feedback:
          "Highly skilled developers who delivered exactly what we needed.",
      },
    ],
  },
  {
    id: 3,
    title: "Social Management",
    heropic: socialhero,
    ill: socialill,
    endpic: website,
    description:
      "We help businesses connect with their target audience through social media, email marketing, and content creation.",
    keyFeatures: [
      "Social Media Strategy",
      "Content Creation",
      "Community Management",
      "Social Media Advertising",
      "Analytics and Reporting",
    ],
    process: [
      "Consultation",
      "Strategy Development",
      "Content Creation",
      "Execution",
      "Monitoring",
      "Optimization",
    ],
    testimonials: [
      {
        client: "Client E",
        feedback:
          "Our social media engagement skyrocketed thanks to their expertise.",
      },
      {
        client: "Client F",
        feedback:
          "Effective strategies that helped us reach a larger audience.",
      },
    ],
  },
  {
    id: 4,
    title: "Branding",
    heropic: brandinghero,
    ill: brandingill,
    endpic: website,
    description:
      "We create memorable and engaging branding materials to help businesses stand out from the competition.",
    keyFeatures: [
      "Logo Design",
      "Brand Identity",
      "Print Materials",
      "Digital Assets",
      "Brand Guidelines",
    ],
    process: [
      "Consultation",
      "Research",
      "Concept Development",
      "Design",
      "Revision",
      "Delivery",
    ],
    testimonials: [
      {
        client: "Client G",
        feedback:
          "Their branding work gave our company a fresh and professional look.",
      },
      {
        client: "Client H",
        feedback:
          "Creative and impactful branding that truly represents our values.",
      },
    ],
  },
  {
    id: 5,
    title: "Advertisement",
    heropic: adhero,
    ill: adill,
    endpic: website,
    description:
      "We help businesses create engaging and effective ads on various platforms such as Facebook, Instagram, and Google Ads.",
    keyFeatures: [
      "Ad Campaign Strategy",
      "Creative Ad Design",
      "Target Audience Analysis",
      "A/B Testing",
      "Performance Monitoring",
    ],
    process: [
      "Consultation",
      "Strategy Development",
      "Ad Creation",
      "Campaign Launch",
      "Performance Tracking",
      "Optimization",
    ],
    testimonials: [
      {
        client: "Client I",
        feedback:
          "Our ad campaigns achieved great results, increasing our ROI significantly.",
      },
      {
        client: "Client J",
        feedback:
          "Effective ad strategies that helped us reach our marketing goals.",
      },
    ],
  },
];

const ServicePage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const serviceType = params.get("type");

  const service = servicesList.find(
    (service) =>
      service.title.toLowerCase().replace(/\s+/g, "-") === serviceType
  );

  if (!service) {
    return <div>Service not found</div>;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div
      className="w-full h-full min-h-screen p-4 bg-white/35"
      id={service?.title}
    >
      <div className="w-full p-6 h-[25rem] md:h-[40rem]">
        <img
          src={service?.heropic}
          alt={service?.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="w-full flex flex-col gap-4">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900">
            {service?.title}
          </h2>
          <p className="text-lg text-gray-600 tracking-normal">
            {service?.description}
          </p>
          <div className="w-full text-center mx-auto p-4  border border-black">
            <h3 className="text-xl uppercase font-bold tracking-tighter border-b-4 w-fit mx-auto text-gray-900">
              Key Features
            </h3>
            <ul className="flex flex-col gap-4 font-semibold list-inside text-gray-600 tracking-normal">
              {service?.keyFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="p-2 my-2 border border-dashed border-black"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <img
            src={service?.ill}
            alt={service?.title}
            className="w-full h-full max-h-[35rem] object-cover rounded-lg"
          />
        </div>
      </div>
      <div className="w-full p-6 my-5">
        <h3 className="text-xl md:text-3xl uppercase w-fit mx-auto font-bold my-4 tracking-tighter text-gray-900">
          Process
        </h3>
        <div className="w-full flex items-center justify-center">
          <ul className="grid grid-cols-1 lg:grid-cols-8 gap-4 items-center list-inside text-gray-600 tracking-normal">
            {service?.process.map((step, index) => (
              <li
                key={index}
                className="flex items-center p-2 border border-gray-600"
              >
                {step}
                <MdOutlineKeyboardDoubleArrowRight className="w-4 h-4 ml-2 text-gray-600" />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="w-full p-6 my-5">
        <img
          src={service?.endpic}
          alt={service?.title}
          className="w-full  h-full max-h-[30rem] object-cover rounded-lg"
        />
      </div>
      <div className="w-full p-6 flex items-center justify-center gap-4">
        {service?.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 p-4 shadow-sm shadow-black rounded-lg"
          >
            <p className="text-lg text-gray-600 tracking-normal">
              {testimonial.feedback}
            </p>
            <p className="text-sm text-gray-900 tracking-normal">
              - {testimonial.client}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
