"use client";
import React, { useEffect, useState } from "react";

const GalleryWrapper = ({ content, className = "", children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeout, setTimeout] = useState(3000)


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, timeout);

    return () => clearInterval(timer);
  }, [content.length, timeout]);

  function handleActiveItem(index) {
    setActiveIndex(index);
    setTimeout(15000);
  }

  const activeContent = content[activeIndex];

  return (
    <div className={`relative ${className}`}>
      <div className="w-full">{React.cloneElement(children, { ...activeContent })}</div>

      <div className="z-1 absolute top-56 left-1/2 transform -translate-x-1/2 flex gap-4 sm:bottom-6 sm:left-[22%] sm:gap-2">
        {content.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === activeIndex ? "bg-gray-800" : "bg-gray-400"
            }`}
            onClick={() => handleActiveItem(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryWrapper;
