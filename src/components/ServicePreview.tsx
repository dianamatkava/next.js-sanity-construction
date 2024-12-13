"use client";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import ContactButton from "@/components/ui-elements/ContactButton";
import {MdOutlineDone} from "react-icons/md";

function ServicePreview({ name, description, img }) {
  return (
    <div className="self-stretch bg-[#f5efe7] justify-between items-start block mx-[-30px] ms:mx-[-60px] sm:flex">
      <div
        className="grow shrink basis-0 self-stretch px-2 justify-start items-center flex min-h-64 w-full relative bg-cover bg-center sm:w-1/2"
        style={{
          backgroundImage: `url("${img}")`
        }}
      >
      </div>
      <div className="grow shrink basis-0 self-stretch px-2 justify-start items-start flex w-full sm:items-center sm:w-1/2">
        <div className="m-12 flex flex-col justify -between items-center gap-4 my-auto h-full py-8 px-4 sm:items-start sm:pl-6 sm:m-0">
          <div className="h-72 flex-col justify-start items-start gap-4 flex">
            <div className="text-[#424242] text-lg font-semibold font-playfair leading-[45px]">
              {name}
            </div>
            <div className="leading-2 w-4/5">{description}</div>
            <ul className="space-y-2 text-gray-600 text-xs">
              <li className="flex items-center">
                <MdOutlineDone className="text-green-500 mr-2" size={18}/>
                Durable materials
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-500 mr-2" size={18}/>
                Modern designs
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-500 mr-2" size={18}/>
                Efficient processes
              </li>
              <li className="flex items-center">
                <MdOutlineDone className="text-green-500 mr-2" size={18}/>
                Safety focus
              </li>
            </ul>
            <ReadMoreLink href="/services" name={"Read More"} className='flex md:hidden'/>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <ContactButton name={"Schedule Appointment"}/>
            <ReadMoreLink href="/services" name={"Read More"} className='hidden md:flex'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePreview;
