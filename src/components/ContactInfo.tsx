"use client"
import {MdOutlineAlternateEmail} from "react-icons/md";
import {FiInstagram, FiPhone} from "react-icons/fi";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import GoogleMap from "@/components/ui-elements/GoogleMap";
import {useAppContext} from "@/context/AppContext";
import React from "react";

function ContactInfo ({className}) {
  const {sharedState: data} = useAppContext();

  return (
    <div className={`flex flex-col gap-6 min-w-[350px] ${className}`}>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <a href={`mailto:${data.email}`} className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <MdOutlineAlternateEmail width={24}/></a>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Chat
            to us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Our
            friendly team is here to help.
          </div>
          <div
            className="self-stretch text-black text-[13px] leading-1 font-medium underline">
            <a href={`mailto:${data.email}`} className="text-blue-600">{data.email}</a>
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <HiOutlineOfficeBuilding width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Visit us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Come to say hello at our office.
          </div>
          <div
            className="self-stretch text-black text-[13px] leading-1 font-medium">
            {data.address}
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <a href='tel:+17472955409'  className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <FiPhone width={24}/></a>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-[14px] font-bold leading-1">Call us
          </div>
          <div className="self-stretch text-[#595959] text-[14px] font-normal leading-1">Mon-Fri from 8am to 5pm
          </div>
          <a href={'tel:+17472955409'}
            className="self-stretch text-black text-[13px] leading-1 font-medium underline">{data.phone}
          </a>
        </div>
      </div>

      <div className="inline-flex justify-start items-center gap-4">
        <a href='https://www.instagram.com/amesc_group' className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <FiInstagram width={24} className='hover:border-[#757171]'/></a>
        {/*<div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">*/}
        {/*  <FaFacebookF width={24} className='hover:border-[#757171]'/></div>*/}
        <a href={`mailto:${data.email}`} className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <MdOutlineAlternateEmail width={24} className='hover:border-[#757171]'/></a>
        <a href='tel:+17472955409'  className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <FiPhone width={24} className='hover:border-[#757171]'/></a>
      </div>
      <GoogleMap className={"h-full"} addressUrl={data.addressGoogle}/>
    </div>
  );
}

export default ContactInfo;