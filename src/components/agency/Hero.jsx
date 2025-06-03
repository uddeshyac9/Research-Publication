import React from "react";
import bg from "../../assets/hero.jpeg";

const Hero = () => {
  return (
    <div className="relative w-full h-full min-h-[70vh] bg-blue-950 p-4 md:p-8 text-white flex flex-col md:flex-row gap-8">
      <div className="flex flex-col flex-grow">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter font-rowdies">
          We are a <span className="text-teal-400">Creative</span>
          <br />
          <div className="flex items-center gap-4">
            <span className="flex-col gap-2 text-xs w-auto border-red-400 inline-flex ml-6 tracking-normal font-normal">
              <p className="font-thin text-gray-400">Established</p>
              <p className="font-bold">Since 2020</p>
            </span>{" "}
            Gyan Agency.
          </div>
        </h1>
      </div>
      <div className="h-fit w-full md:w-1/3 lg:w-1/4 p-2 flex flex-col gap-4">
        <p className="text-xl border-teal-400 border-l-2 border-b-2 py-2 rounded-lg px-8">
          We're a digital agency specializing in creating modern and
          user-friendly digital solutions for businesses.
        </p>
        <div className="flex items-center gap-4 px-8">
          <p className="text-2xl font-bold">
            3 <span className="text-teal-400">+</span>
            <br />
            <span className="text-xs text-gray-400">Experience</span>
          </p>
          <p className="text-2xl font-bold">
            100 <span className="text-teal-400">+</span>
            <br />
            <span className="text-xs text-gray-400">Completed Projects</span>
          </p>
          <p className="text-2xl font-bold">
            60 <span className="text-teal-400">+</span>
            <br />
            <span className="text-xs text-gray-400">Trusted Clients</span>
          </p>
        </div>
      </div>
      <div
        className="absolute left-1/2 w-full max-w-[46rem] h-64 rounded-lg hidden md:block bg-no-repeat bg-cover"
        style={{
          bottom: "40px",
          transform: "translate(-50%, 50%)",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundImage: `url(${bg})`,
        }}
      ></div>
    </div>
  );
};

export default Hero;
