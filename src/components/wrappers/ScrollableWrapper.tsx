"use client"
import React, { useRef } from "react";

const ScrollableWrapper = ({children, className='', style={}}, shouldHandleWheel=true) => {
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
        onWheel={shouldHandleWheel ? handleWheel : null}
        className={`overflow-x-auto w-full h-full scroll-container relative overflow-y-auto ${className}`}
      >
        <div className="flex space-x-4 w-max">
          {children}
        </div>
    </div>
  );
};

export default ScrollableWrapper;
