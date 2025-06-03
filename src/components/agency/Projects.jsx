import React from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import devImg from "../../assets/dev.jpeg";
import designImg from "../../assets/design.jpeg";
import marketingImg from "../../assets/marketing.jpeg";

const Projects = () => {
  return (
    <div className="w-full p-4 h-full min-h-screen border-t border-teal-600">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 my-8">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
            Our Projects
          </h3>
          <h2 className="text-5xl md:text-5xl font-bold tracking-light capitalize font-rowdies">
            Discover our <span className="text-teal-400">Selected</span>{" "}
            Projects
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal">
            We provide digital markerting services to help clients increase
            visibility and reach their target audience more effectively. We have
            assisted various clients, some of the results that have been
            achieved are below:
          </p>
          <div className="flex gap-4">
            <Link
              className="text-xl font-semibold text-teal-400 rounded-lg py-2 hover:text-teal-600 transition-colors duration-300 w-fit"
              to={"/services"}
              title="view our work"
            >
              View Our Work
              <GoArrowUpRight className="inline-block" />
            </Link>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 items-center">
        <div className="flex flex-col gap-2 p-2">
          <img
            src={devImg}
            alt="web dev image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter">
            Web Development
          </h3>
          <p className="text-md w-full max-w-sm text-gray-600 tracking-normal">
            DigitalByte specializes in web development, we offer bespoke and
            custom solutions to help your business grow and thrive.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <img
            src={designImg}
            alt="web design image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter">Web Design</h3>
          <p className="text-md w-full max-w-sm text-gray-600 tracking-normal">
            We create visually appealing and user-friendly websites that enhance
            your brand's identity and customer experience.
          </p>
        </div>
        <div className="flex flex-col gap-2 p-2">
          <img
            src={marketingImg}
            alt="marketing image"
            className="w-full max-w-sm h-64 md:h-96 rounded-lg object-cover"
          />
          <h3 className="text-2xl font-bold tracking-tighter">Marketing</h3>
          <p className="text-md w-full max-w-sm text-gray-600 tracking-normal">
            DigitalByte helps businesses create and manage their digital
            marketing strategies, increasing visibility and customer reach.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
