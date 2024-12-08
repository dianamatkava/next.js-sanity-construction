import {MdOutlineArrowOutward} from "react-icons/md";
import { FiCalendar } from "react-icons/fi";


function News () {
  return (
    <div className="self-stretch flex-col justify-start items-end gap-4 flex">
      <div className="self-stretch flex-col justify-start items-start flex">
        <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Blog and
          News
        </div>
        <div
          className="self-stretch grow shrink basis-0 text-[#424242] text-lg font-medium font-playfair">Latest
          News and Articles
        </div>
      </div>
      <div className="self-stretch justify-start items-center gap-8 inline-flex">
        <div className="border border-[#e2e2e2] justify-start items-center flex">
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
            <div className="justify-start items-center gap-0.5 inline-flex">
              <div className="text-[#414141] text-xsm font-bold leading-tight">Read More</div>
              <span className="font-bold"><MdOutlineArrowOutward width={12}/></span>
            </div>
          </div>
          <div className="self-stretch flex-col justify-between items-start inline-flex w-1/2">
            <img className="grow shrink basis-0 self-stretch" src="https://via.placeholder.com/299x310"/>
          </div>
        </div>
        <div className="border border-[#e2e2e2] justify-start items-center flex">
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
            <div className="justify-start items-center gap-0.5 inline-flex">
              <div className="text-[#414141] text-xsm font-bold leading-tight">Read More</div>
              <span className="font-bold"><MdOutlineArrowOutward width={12}/></span>
            </div>
          </div>
          <div className="self-stretch flex-col justify-between items-start inline-flex w-1/2">
            <img className="grow shrink basis-0 self-stretch" src="https://via.placeholder.com/299x310"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News;