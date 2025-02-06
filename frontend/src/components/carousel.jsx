import React, { useState } from "react";

const Slides = [
  {
    id: "slide1",
    url: "carouselimg1.jpeg",
    heading: "Crafted with love, inspired by tradition!",
  },
  {
    id: "slide2",
    url: "carouselimg2.jpeg",
    heading: "Bring home the essence of India’s heritage!",
  },
  {
    id: "slide3",
    url: "carouselimg3.jpeg",
    heading: "Sustainable fashion, timeless tradition!",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="carousel w-full overflow-hidden relative">
      <div
        className="flex transition-transform duration-500 ease-in-out m-4"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {Slides.map((slide, index) => (
          <div
            key={slide.id}
            id={slide.id}
            className="carousel-item relative w-full flex-shrink-0"
          >
            <div className="flex items-center justify-between w-full h-[350px] p-6 bg-[#F1C6AC]-100">
              {/* Left - Image */}
              <img
                src={slide.url}
                className="w-1/2 h-full object-cover rounded-lg"
                alt={slide.heading}
              />
              {/* Right - Text */}
              <div className="w-1/2 flex justify-center items-center">
                <h1
                  className="text-5xl font-bold bg-white/50 border border-white rounded-lg p-4 text-gray-900"
                  style={{ fontFamily: 'Rouge Script, cursive' }}
                >
                  {slide.heading}
                </h1>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex absolute inset-0 items-center justify-between">
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === 0 ? Slides.length - 1 : prev - 1
                  )
                }
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition m-3"
              >
                ❮
              </button>
              <button
                onClick={() =>
                  setCurrentSlide((prev) =>
                    prev === Slides.length - 1 ? 0 : prev + 1
                  )
                }
                className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition m-3"
              >
                ❯
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;