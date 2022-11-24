import React from "react";
import four from "../images/4.jpg";
const Platform = () => {
  return (
    <div>
      <div className="max-w-[1200px] h-[100%] md:h-[500px] md:flex items-center py-4 px-4 justify-between m-auto my-10">
        <div className="w-[100%]">
          <img className="rounded-xl object-cover w-full h-[500px]" src={four} alt="" />
        </div>
        <div className=" md:mx-10 my-10 w-[90%] ">
          <h1 className="text-3xl mt-2">Efficiency. Transparency.</h1>
          <h1 className="text-3xl mt-2">Control.</h1>
          <p className="my-6">
            Gojjo developed a platform for the Real Estate marketplace that
            allows buyers and sellers to easily execute a transaction on their
            own. The platform drives efficiency, cost transparency and control
            into the hands of the consumers. Hously is Real Estate Redefined.
          </p>
          <button className="p-2 bg-green-600 text-white rounded-md w-[8rem]">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
