import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="border-2 border-teal-400 p-4 w-full h-full rounded-lg flex flex-col gap-4">
      <h2 className="text-xl text-teal-400 font-bold font-rowdies">
        {service?.title}
      </h2>
      <p className="text-sm">{service?.description}</p>
      <Link
        to={`/services/service?type=${service?.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
        className="px-4 py-2 w-fit rounded-lg bg-teal-400 hover:bg-teal-200"
      >
        Learn More
      </Link>
    </div>
  );
};

export default ServiceCard;
