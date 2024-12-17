"use client"
import {useState} from "react";
import { FiCalendar } from "react-icons/fi";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import ScrollableWrapper from "@/components/wrappers/ScrollableWrapper";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";



function News () {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

  const [scrollIndex, setScrollIndex] = useState(0);

  const scrollItems = (direction) => {
    const newIndex = scrollIndex + direction;
    // Ensure you don't scroll out of bounds
    if (newIndex >= 0 && newIndex < items.length) {
      setScrollIndex(newIndex);
    }
  };

  return (
    <div className="self-stretch flex-col justify-start items-end gap-4 flex" id="News">
      <div className="self-stretch flex justify-between items-end">
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Blog and
            News
          </div>
          <div
            className="self-stretch grow shrink basis-0 text-[#424242] text-lg font-medium font-playfair">Latest
            News and Articles
          </div>
        </div>
        <div className="flex justify-between items-center gap-2">
          <button
            onClick={() => scrollItems(-1)}
            className="border-1 border-gray-200 p-3 rounded-3xl hover:border-gray-300 hover:text-gray-800"><FaAngleLeft size={20} className='text-gray-600'/></button>
          <button
            onClick={() => scrollItems(+1)}
            className="border-1 border-gray-200 p-3 rounded-3xl hover:border-gray-300 hover:text-gray-800"><FaAngleRight size={20} className='text-gray-600'/></button>
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-6 inline-flex">
        <ScrollableWrapper
          className="overscroll-none overflow-x-hidden"
          shouldHandleWheel={false}
        >
          {items.map((index) => (
            <div
              key={index}
              className="max-w-96 border border-[#e2e2e2] justify-start items-center flex hover:shadow-lg"
              style={{
                display: 'flex',
                transform: `translateX(-${scrollIndex * 100}%)`, // Move items horizontally
                transition: 'transform 0.3s ease', // Smooth transition
              }}
            >
              <div className="self-stretch flex-col justify-between items-start inline-flex w-1/2 p-4">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="justify-start items-center gap-1 inline-flex">
                    <div className="px-2 bg-[#6f1d1b] justify-center items-center gap-1 flex">
                      <div className="text-[#f5efe7] text-xsm font-bold leading-1">Articles</div>
                    </div>
                    <div className="justify-between items-center gap-1 flex">
                      <span className="text-[#847474]"><FiCalendar width={12}/></span>
                      <div className="text-[#747474] text-[11px] font-semibold leading-1">December 04,
                        2024
                      </div>
                    </div>
                  </div>
                  <div className="text-[#424242] text-md font-bold leading-1">A Group of
                    Companies providing Repair Services
                  </div>
                </div>
                <ReadMoreLink href='/news' name={"Read More"}/>
              </div>
              <div className="self-stretch flex-col justify-between items-start inline-flex w-1/2">
                <img className="grow shrink basis-0 self-stretch" src="https://via.placeholder.com/299x310"/>
              </div>
            </div>
          ))}
        </ScrollableWrapper>
      </div>
    </div>
  )
}

export default News;