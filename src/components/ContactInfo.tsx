import {MdOutlineAlternateEmail} from "react-icons/md";
import {FiInstagram, FiPhone} from "react-icons/fi";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import {FaFacebookF} from "react-icons/fa";
import GoogleMap from "@/components/ui-elements/GoogleMap";

function ContactInfo ({className}) {
  return (
    <div className={`flex flex-col gap-6 min-w-[350px] ${className}`}>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <MdOutlineAlternateEmail width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Chat
            to us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Our
            friendly team is here to help.
          </div>
          <div
            className="self-stretch text-black text-[13px] leading-1 font-medium underline">info@amesc.us
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <FiPhone width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Visit us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Come to say hello at our office.
          </div>
          <div
            className="self-stretch text-black text-[13px] leading-1 font-medium">282 West Dryden Street, Glendale, <br/> California 91202, United States
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <HiOutlineOfficeBuilding width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Call us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Mon-Fri from 8am to 5pm
          </div>
          <div
            className="self-stretch text-black text-[13px] leading-1 font-medium underline">+ 123 747 295-5409
          </div>
        </div>
      </div>

      {/*<div className="flex inline-flex justify-start items-center gap-4">*/}
      {/*  <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">*/}
      {/*    <FiInstagram width={24} className='hover:border-[#757171]'/></div>*/}
      {/*  <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">*/}
      {/*    <FaFacebookF width={24} className='hover:border-[#757171]'/></div>*/}
      {/*  <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">*/}
      {/*    <MdOutlineAlternateEmail width={24} className='hover:border-[#757171]'/></div>*/}
      {/*  <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">*/}
      {/*    <FiPhone width={24} className='hover:border-[#757171]'/></div>*/}
      {/*</div>*/}
      <GoogleMap className={"h-full custom-lg:hidden"}/>
    </div>
  );
}

export default ContactInfo;