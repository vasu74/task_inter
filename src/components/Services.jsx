import React, { useRef, useState, useEffect } from "react";
import img1 from "../assets/mug.png";
import img2 from "../assets/1.png";
import img3 from "../assets/3.png";
import "../App.css";

const Services = () => {
  return (
    <div className="w-full bg-[#FAFAFA]">
      <div className="p-16 flex gap-16">
        <div className="max-w-7xl mx-auto flex justify-center flex-col items-center gap-16">
          <div id="service_content" className="flex-col gap-16">
            <h4 className="text-[#FF3147] uppercase lg:text-lg text-md">
              What we do
            </h4>
            <div className="flex gap-16">
              <h2 className="uppercase font-bold lg:text-4xl text-2xl w-2/3">
                Services Provide For you
              </h2>
              <p>
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
                lacus nec risus finibus feugiat et fermentum finibus feugiat et
                fermentum nibh.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-x-hidden my-8 h-full">
        <div className="w-full max-w-7xl mx-auto h-full">
          <Carousel />
        </div>
      </div>
    </div>
  );
};

const images = [img1, img2, img3, img1, img2]; // Use your image imports

const Carousel = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const scrollToIndex = (index) => {
    if (containerRef.current) {
      const scrollLeft = containerRef.current.clientWidth * index;
      containerRef.current.scrollTo({ left: scrollLeft, behavior: "smooth" });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        const imageWidth = containerRef.current.firstChild.clientWidth;
        setTotalPages(Math.ceil((images.length * imageWidth) / containerWidth));
      }
    };

    const handleScroll = () => {
      if (containerRef.current) {
        const newIndex = Math.round(
          containerRef.current.scrollLeft / containerRef.current.clientWidth
        );
        setCurrentIndex(newIndex);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    containerRef.current.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      <div
        className="flex gap-4 overflow-x-auto overflow-y-hidden scrollbar-hide"
        style={{ height: "100%" }} // Set the height to 100%
        ref={containerRef}
      >
        {images.map((imgSrc, idx) => (
          <div key={idx} className="flex-none relative">
            <img src={imgSrc} className="block" alt={`Carousel ${idx}`} />
            <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
              <span className="text-white">Overlay Content</span>
            </div>
          </div>
        ))}
      </div>
      <Dots
        currentIndex={currentIndex}
        scrollToIndex={scrollToIndex}
        totalPages={totalPages}
      />
    </div>
  );
};

const Dots = ({ currentIndex, scrollToIndex, totalPages }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {Array.from({ length: totalPages }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => scrollToIndex(idx)}
          className={`h-3 w-3 rounded-full transition-colors ${
            idx === currentIndex
              ? "border border-[#FF3147] bg-[#FF3147]"
              : "bg-black"
          }`}
          style={{
            transform: idx === currentIndex ? "scale(1.5)" : "scale(1)",
            transition: "transform 0.3s ease",
          }}
        />
      ))}
    </div>
  );
};

export default Services;
