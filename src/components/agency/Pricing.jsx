import React from "react";
import { packages } from "../../config/data";
import { TiTick } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="w-full h-full min-h-screen p-4 mt-8 md:mt-16 bg-blue-950 text-white flex items-center justify-start flex-col overflow-x-hidden">
      {/* Header */}
      <div className="flex flex-col gap-4 text-center mt-4 md:mt-8 w-full md:max-w-4xl">
        <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
          Our Pricing
        </h3>
        <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
          Choose your <span className="text-teal-400">Package</span>
        </h2>
        <p className="text-xl tracking-normal">
          We offer flexible packages for Web Development, App Development,
          Digital Marketing, and UI/UX Design. Pricing is customized to match
          your specific project requirements—contact us for a detailed quote.
        </p>
      </div>

      {/* Package cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-8 py-5 pt-8">
        {packages.map((packageData, index) => (
          <div
            key={packageData.id}
            className={`flex flex-col justify-between gap-2 p-6 rounded-xl ${
              index === 1 ? "border-2 border-teal-400" : ""
            } w-full max-w-xs mx-auto bg-gradient-to-tr from-black to-teal-400/25`}
          >
            <div>
              {/* Title */}
              <h3 className="text-xl py-2 font-semibold text-gray-400">
                {packageData.title}
              </h3>

              {/* Contact for pricing (replaces price) */}
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  Contact&nbsp;
                </span>
                <span className="text-sm text-gray-400 tracking-normal">
                  for pricing
                </span>
              </div>

              {/* Description */}
              <p className="text-lg text-white tracking-normal py-4">
                {packageData.description}
              </p>

              {/* Features */}
              <div className="flex flex-col gap-2 py-6">
                {packageData.benefits.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-1">
                    <TiTick size={16} className="text-teal-400" />
                    <span className="text-xs tracking-normal text-gray-400">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917906767266"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 px-4 py-2 text-lg font-semibold text-white border-gray-600 border-2 rounded-lg hover:bg-teal-600 transition"
            >
              Choose This Package
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
