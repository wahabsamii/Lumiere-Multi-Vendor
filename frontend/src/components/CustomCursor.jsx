
import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target.closest(
        "a, button, input, textarea, select, [role='button']"
      );

      setIsHovering(!!target);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div
        className={`absolute -left-5 -top-5 flex items-center justify-center rounded-full border border-[#a77548] transition-all duration-300 ease-out ${
          isHovering
            ? "h-10 w-10 scale-125 bg-[#a77548]/15"
            : "h-10 w-10 scale-100 bg-transparent"
        }`}
      >
        <span
          className={`rounded-full bg-[#a77548] transition-all duration-300 ${
            isHovering ? "h-1.5 w-1.5" : "h-1 w-1"
          }`}
        />
      </div>
    </div>
  );
};

export default CustomCursor;
