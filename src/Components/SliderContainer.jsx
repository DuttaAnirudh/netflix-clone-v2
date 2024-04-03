import { useEffect, useRef } from "react";

const SliderContainer = ({ className, children }) => {
  const sliderContainerRef = useRef(null);

  const handleSliderScroll = (e) => {
    if (!sliderContainerRef.current) return;

    // Determining scroll direction (1 = down | -1 = up)
    const delta = Math.sign(e.deltaY);

    // Controlling the scroll speed
    const scrollAmount = 25;

    // Scrolling in the X direction
    sliderContainerRef.current.scrollLeft += delta * scrollAmount;

    // Preventing default scrolling behavior
    e.preventDefault();
  };

  useEffect(() => {
    const sliderContainer = sliderContainerRef.current;
    if (!sliderContainer) return;

    sliderContainer.addEventListener("wheel", handleSliderScroll);

    // Clean up function for event listener
    return () =>
      sliderContainer.removeEventListener("wheel", handleSliderScroll);
  }, []);

  return (
    <div className={`${className}`} ref={sliderContainerRef}>
      {children}
    </div>
  );
};

export default SliderContainer;
