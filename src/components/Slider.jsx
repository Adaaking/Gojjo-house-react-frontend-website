import React from "react";
import { useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import { testimonials } from "../data";
import quatation from "../images/quatation.png";
const Slider = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="m-[4rem] grid md:grid-cols-4 gap-6">
      {testimonials.map((testimony, indx) => {
        const { id, quote, image, name, profession } = testimony;
        return (
          <div className="flex flex-col justify-between items-center text-center p-4 border rounded-md shadow-md">
            <p>{quote}</p>
            <div className="flex justify-between my-2">
              <AiTwotoneStar className="text-yellow-600" />
              <AiTwotoneStar className="text-yellow-600" />
              <AiTwotoneStar className="text-yellow-600" />
              <AiTwotoneStar className="text-yellow-600" />
              <AiTwotoneStar className="text-yellow-600" />
            </div>
            <img
              className=" w-[5rem] h-[5rem] object-cover rounded-[50%]"
              src={image}
            />
            <p className="my-2">{name}</p>
            <p className="font-">{profession}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
