"use client"
import {FaAngleLeft, FaAngleRight} from "react-icons/fa6";
import ScrollableWrapper from "@/components/wrappers/ScrollableWrapper";
import {FiCalendar} from "react-icons/fi";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import {useState} from "react";
import GridWrapper from "@/components/wrappers/GridWrapper";

export default function NewsPage() {
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
    <div className="self-stretch flex-col justify-start items-end gap-12 flex" id="News">
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
      </div>
      <div className="self-stretch justify-start flex-col items-start gap-12 sm:gap-6 inline-flex w-full">
        {items.map((index) => (
            <div
              key={index}
              className="w-full justify-start items-center flex"
            >
              <div
                className="self-stretch flex-col justify-between items-start inline-flex sm:min-w-64"
                style={{
                  backgroundImage: `url("https://via.placeholder.com/299x310")`
                }}>
              </div>
              <div className="self-stretch grow shrink flex-col justify-between items-start inline-flex gap-4 sm:p-4 max-w-[800px]">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="px-2 bg-[#6f1d1b] justify-center items-center gap-3 flex">
                      <div className="text-[#f5efe7] text-xsm font-bold leading-1">Articles</div>
                    </div>
                    <div className="justify-between items-center gap-1 flex">
                      <span className="text-[#847474]"><FiCalendar width={12}/></span>
                      <div className="text-[#747474] text-[11px] font-semibold leading-1">December 04,
                        2024
                      </div>
                    </div>
                  </div>
                  <div className="text-[#424242] text-md font-bold leading-1 hover:text-[#8E8E8E]">A Group of
                    Companies providing Repair Services
                  </div>
                  <div
                    className="self-stretch text-[#414040] text-sm font-normal leading-1">As
                    a group of companies, we offer a wide range of water restoration, leak detection, mold remediation
                    and reconstruction services, including residential and commercial reconstruction, remodeling, and
                    renovations services ...
                  </div>
                </div>
                <ReadMoreLink href='/news' name={"Read More"}/>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
}
