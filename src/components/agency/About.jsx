  import React from "react";
  import img from "../../assets/gyaancounsaltancy-2.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-full min-h-[60%] p-4 md:mt-60 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="w-full flex items-center justify-center">
        <img
          src={img}
          alt="about image"
          className="w-full max-w-sm rounded-lg bject-cover"
        />
      </div>
      <div className="flex flex-col gap-4 px-8">
        <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
          About us
        </h3>
        <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
          Why you should choose{" "}
          <span className="text-teal-400">Gyan Counsaltancy</span>
        </h2>
        <p className="text-lg tracking-normal">
          We are a digital agency that specializes in web design, SEO, social
          media management, advertisement and branding. Our experienced team
          works closely with our clients to deliver customized solutions that
          meet their specific needs.
        </p>
        <Link
          to={"/about"}
          title="learn about us"
          className=" text-xl w-fit font-bold text-teal-400 hover:text-teal-600"
        >
          Learn More
          <GoArrowUpRight className="inline-block" />
        </Link>
      </div>
    </div>
  );
};

export default About;
