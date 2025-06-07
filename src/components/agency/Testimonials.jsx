import React from "react";
import { BiSolidQuoteLeft } from "react-icons/bi";

import avatar1 from "../../assets/avatar1.jpeg";
import avatar2 from "../../assets/avatar2.jpeg";
import avatar3 from "../../assets/avatar3.jpeg";

const testimonials = [
  {
    name: "John Doe",
    occupation: "Chief Executive Officer",
    image: avatar1,
    content:
      "Gyaan Counsaltancy has been our partner for web development and digital marketing over the past three years. Their team delivered a responsive website that boosted our online traffic, and their SEO strategy increased our lead generation by 50%. I highly recommend Gyaan Counsaltancy to anyone seeking top-notch digital solutions.",
  },
  {
    name: "Jane Smith",
    occupation: "Sales Manager",
    image: avatar2,
    content:
      "We engaged Gyaan Counsaltancy for a cross-platform mobile app and UI/UX redesign. Their app development team nailed every feature, and the new interface greatly improved our user engagement. Their ongoing maintenance and support have been exceptional.",
  },
  {
    name: "Mark Johnson",
    occupation: "Product Manager",
    image: avatar3,
    content:
      "Gyaan Counsaltancy’s digital marketing services transformed our outreach efforts. Their social media campaigns and PPC ads drove a 40% increase in conversions. Plus, their UI/UX design expertise gave our platform a modern, intuitive look. Couldn’t be happier with the results.",
  },
];

const Testimonials = () => {
  return (
    <div className="w-full h-full max-h-[80%] p-4 my-8 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 my-8">
        <div className="flex flex-col gap-4 px-8">
          <h3 className="text-3xl font-semibold text-gray-400 tracking-tighter">
            Our Testimonials
          </h3>
          <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
            What Our <span className="text-teal-400">Customers</span> Say About
            Us
          </h2>
        </div>
        <div className="flex flex-col gap-4 px-8">
          <p className="text-xl tracking-normal">
            At Gyaan Counsaltancy, we pride ourselves on delivering exceptional
            web development, app development, digital marketing, and UI/UX
            design. For over a decade, our commitment to quality, attention to
            detail, and innovative solutions have earned us satisfied clients.
            Here’s what some of them have to say about our services.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-8  py-5">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="flex flex-col gap-4 p-6 rounded-xl border-2 border-gray-400 w-full max-w-xs mx-auto relative"
          >
            <BiSolidQuoteLeft size={34} className="text-teal-400" />
            <p className="text-gray-600 text-xs">{testimonial.content}</p>
            <hr className="text-gray-600" />
            <div className="grid grid-cols-2 items-center gap-2">
              <div className="flex flex-col gap-2">
                <h4 className="text-md font-bold text-gray-800 tracking-normal">
                  {testimonial.name}
                </h4>
                <p className="text-xs text-gray-600 tracking-normal">
                  {testimonial.occupation}
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
