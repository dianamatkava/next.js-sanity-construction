"use client"
import React, { useRef } from "react";
import ReadMoreLink from "@/components/ReadMoreLink";

const ScrollableWrapper = ({children}) => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    e.preventDefault();
    const container = containerRef.current;

    if (e.deltaY > 0) {
      container.scrollLeft += 20; // Scroll right (positive scroll)
    } else {
      container.scrollLeft -= 20; // Scroll left (negative scroll)
    }
  };

  return (
      <div
        ref={containerRef}
        onWheel={handleWheel}
        className="overflow-x-auto w-full h-full scroll-container relative overflow-x-auto overflow-y-auto"
      >
        <div className="flex space-x-4 w-max">
          {children}
        </div>
    </div>
  );
};

export default ScrollableWrapper;
