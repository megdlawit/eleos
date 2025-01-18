import { useState, useEffect, useRef } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function HeroComponent({
  slides,
  titles = [],
  subtitles = [],
  buttonText = "",
  buttonAction,
}) {
  const [current, setCurrent] = useState(1);
  const videoRef = useRef(null);  // Ref to handle the video element

  const previousSlide = () => {
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // Reset video when changing to a new slide, and play the video when it's active
  useEffect(() => {
    if (videoRef.current) {
      if (current === slides.length - 1) {
        // Play the video when it's active
        videoRef.current.play();
      } else {
        // Pause and reset video when transitioning away
        videoRef.current.currentTime = 0;
      }
    }
  }, [current, slides.length]);

  return (
    <div className="relative h-full">
      {/* Image and Video Slider as Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="flex justify-center items-center h-full relative">
          {slides.map((slide, index) => {
            const isActive = index === current;
            const isPrevious = index === (current - 1 + slides.length) % slides.length;
            const isNext = index === (current + 1) % slides.length;

            // Determine if the slide is an image or a video
            const isVideo = typeof slide === "object" && slide.type === "video";

            return (
              <div
                key={index}
                className={`transition-all duration-1000 absolute w-full h-full object-cover
                  ${isActive ? "opacity-90 scale-110" :
                  isPrevious ? "opacity-0 scale-100" :
                  isNext ? "opacity-100 scale-110" :
                  "opacity-0 scale-100"}`}
                style={{
                  transition: "opacity 1s ease-in-out, transform 8.5s ease-in-out",
                }}
              >
                {isVideo ? (
                  <video
                    ref={videoRef}
                    src={slide.src}
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                    style={{
                      transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
                    }}
                  />
                ) : (
                  <img
                    src={slide}
                    alt={`Slide ${index + 1}`}
                    onError={(e) => {
                      e.target.onerror = null; // Prevent looping
                      e.target.src = "https://via.placeholder.com/800"; // Fallback image
                    }}
                    className="w-full h-full object-cover"
                    style={{
                      transition: "opacity 1s ease-in-out, transform 1.5s ease-in-out",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Title and Subtitle Section */}
      <div className="absolute top-1/2 right-5 md:right-20 transform -translate-y-1/2 text-white text-right">
        <p className="font-poppins text-header font-extralight text-header md:text-header mb-10">
          {titles[current] || "Default Title"}
        </p>
        <p className="mt-10 font-poppins text-subheader font-semibold bg-secondary-32 border-t border-b border-white italic p-2 text-subheader md:text-subheader-sm">
          {subtitles[current] || "Default Subtitle"}
        </p>
        <button
          onClick={buttonAction}
          className="mt-10 border border-white text-white px-10 py-2 rounded hover:bg-secondary hover:border-none text-button-text-sm md:text-button-text"
        >
          {buttonText || "Default Button Text"}
        </button>
      </div>

      {/* Navigation Arrows and Circles */}
      <div className="absolute bottom-4 w-full flex justify-center items-center gap-4 md:gap-6">
        <button onClick={previousSlide} className="text-white text-2xl md:text-3xl">
          <BsFillArrowLeftCircleFill />
        </button>

        <div className="flex gap-2 md:gap-3">
          {slides.map((_, i) => (
            <div
              key={"circle" + i}
              onClick={() => setCurrent(i)}
              className={`rounded-full w-4 h-4 md:w-5 md:h-5 cursor-pointer ${
                i === current ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <button onClick={nextSlide} className="text-white text-2xl md:text-3xl">
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
}
