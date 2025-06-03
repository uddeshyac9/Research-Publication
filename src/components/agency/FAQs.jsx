import React, { useState } from "react";
import { faqs } from "../../config/data";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full h-full min-h-[80%] p-12 md:p-20 gap-4 flex flex-col bg-gray-200">
      <h1 className="text-3xl font-semibold text-gray-400 tracking-tighter">
        FAQs
      </h1>
      <h2 className="text-5xl font-bold tracking-light capitalize font-rowdies">
        Frequently Asked <span className="text-teal-400">Questions</span>
      </h2>
      <div className="grid grid-cols-1 gap-4 p-2 my-8">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex flex-col gap-4 px-8 py-4 border-b border-gray-600"
          >
            <h3
              onClick={() => handleToggle(index)}
              className="cursor-pointer flex justify-between items-center text-2xl font-semibold"
            >
              {faq.question}
              <span>{activeIndex === index ? "-" : "+"}</span>
            </h3>
            {activeIndex === index && (
              <p className="text-lg text-gray-800 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
