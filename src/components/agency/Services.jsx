import React, { useState } from "react";
import img from "../../assets/services.jpeg";
import { Link } from "react-router-dom";
import { servicesList } from "../../config/data";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa";

const Services = () => {
  const [hoveredService, setHoveredService] = useState(null);

  return (
    <div className="relative w-full h-full min-h-screen px-4 py-16 bg-blue-950 text-white mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 my-4 md:my-8">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
            Our Services
          </h3>
          <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
            What <span className="text-teal-400">Services</span> We are
            offering.
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal">
            We offer a wide range of services, from web design and development
            to social media management, advertisement, and branding. Our team of
            experienced professionals will work closely with our clients to
            deliver customized solutions that meet their specific needs.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-8">
        <div className="flex flex-col gap-4">
          {servicesList.map((service) => (
            <div
              key={service.id}
              className="group p-4 bg-blue-800 rounded-lg cursor-pointer hover:bg-inherit hover:border-2 border-teal-400 flex items-center justify-between"
              onClick={() => setHoveredService(service)}
              title={service.title}
            >
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <FaCircle
                  size={18}
                  className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <IoArrowForwardCircleOutline size={32} />
            </div>
          ))}
        </div>
        <div
          className="p-4 bg-blue-800 rounded-lg hidden md:block"
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>
      {hoveredService && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg max-w-sm md:max-w-xl w-full">
            <h3 className="text-2xl font-semibold mb-4">
              {hoveredService.title}
            </h3>
            <p className="text-lg mb-4">{hoveredService.description}</p>
            <button
              onClick={() => setHoveredService(null)}
              className="border border-blue-600 text-blue-600 font-bold px-4 py-2 rounded"
            >
              Close
            </button>
            <Link
              to={`/services/service?type=${hoveredService.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="bg-blue-600 text-white font-bold px-4 py-3 rounded ml-4"
            >
              Learn More
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
