"use client";
import React, { useEffect, useState } from "react";
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";

const GalleryWrapper = ({ content, className = "", children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeout, setTimeout] = useState(3000)


  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    }, timeout);

    return () => clearInterval(timer);
  }, [content.length, timeout]);

  // function handleActiveItem(index) {
  //   setActiveIndex(index);
  //   setTimeout(18000);
  // }

  const activeContent = content[activeIndex];

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length);
    setTimeout(18000);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % content.length);
    setTimeout(18000);
  };

  const GalleryButtons = () => {
    // Calculate indices for the 3 buttons to show
    // const indicesToShow = [
    //   (activeIndex - 1 + content.length) % content.length, // previous index, handles wrap around
    //   activeIndex,
    //   (activeIndex + 1) % content.length, // next index, handles wrap around
    // ];

    return (
      <div className="w-full flex flex-col justify-between items-center gap-6 py-4">
        <div className="flex w-full justify-between items-center gap-5 px-8">
          <button
            onClick={() => handlePrevClick()}
            className=""><FaAngleLeft
            size={20} className='text-gray-300 cursor-pointer hover:text-gray-300'/></button>
          <button
            onClick={() => handleNextClick()}
            className=""><FaAngleRight
            size={20} className='text-gray-300 cursor-pointer hover:text-gray-400'/></button>
        </div>

        {/*<div className="flex gap-4">*/}
        {/*  {indicesToShow.map((index) => (*/}
        {/*    <button*/}
        {/*      key={index}*/}
        {/*      className={`w-3 h-3 rounded-full ${*/}
        {/*        index === activeIndex ? "bg-gray-800" : "bg-gray-400"*/}
        {/*      }`}*/}
        {/*      onClick={() => handleActiveItem(index)}*/}
        {/*    />*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    );
  };

  return (
    <div className={`relative ${className}`}>
      <div className="w-full">{React.cloneElement(children, {children: GalleryButtons, ...activeContent})}</div>
    </div>
  );
};

export default GalleryWrapper;
