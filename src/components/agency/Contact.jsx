import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="w-full h-full min-h-[80%] p-4 bg-blue-950  text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 border-b-2 border-gray-600 md:py-12 gap-4">
        <div className="flex flex-col gap-4 px-8">
          <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
            Lets make something together
          </h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-8">
          <Link
            to={"/contact"}
            title="contact us"
            className="bg-teal-400 font-bold w-fit py-2 px-4 rounded-lg hover:bg-teal-600"
          >
            Lets talk
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
