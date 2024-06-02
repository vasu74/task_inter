import React from "react";
import Imagesrc from "./assets/hero.png";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className=" w-full  p-16 ">
        <div className=" max-w-7xl flex gap-8 mx-auto items-center justify-center max-h-screen   ">
          {/* content div */}
          <div
            id="content"
            className="flex flex-col lg:gap-8 gap-6 items-start p-6"
          >
            <h4 className="text-[#FF3147] uppercase lg:text-lg text-md">
              Award Winning
            </h4>
            <h1 className="font-bold lg:text-6xl text-4xl ">
              Digital Marketing Agency
            </h1>
            <p>
              Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
              Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
              lacus nec risus finibus feugiat et fermentum
            </p>
            <button className="py-2 px-4 bg-[#FF3147] rounded-md text-white">
              Contact Us
            </button>
          </div>
          {/* image div */}
          <div id="image section" className="w-2/3 hidden md:flex">
            <img src={Imagesrc} alt="heroimage" className="object-contain" />
          </div>
        </div>
      </div>
      <Services />
    </>
  );
};

export default App;
