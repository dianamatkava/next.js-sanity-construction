"use client"
import React, {useState} from "react";
import { usePathname } from "next/navigation";
import {
  Link,
} from "@nextui-org/react";
import {FiInstagram, FiPhone} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";
import {useAppContext} from "@/context/AppContext";
import {urlFor} from "@/app/ui/urlFor";
import Logo from "@/components/ui-elements/Logo";

function AppHeader () {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const {sharedState: data} = useAppContext();
  const bgUrl = urlFor(data.headerBg);

  return (
    <div
      className={`
        overflow-hidden self-stretch py-2 
        flex-col justify-between items-center flex gap-5 px-[30px] sm:px-[60px] 
        ${pathname === "/" ? "relative pb-[140px]" : "sticky top-0 z-50 shadow-md"}
      `}
      style={{
        background: `linear-gradient(180deg, rgba(27, 4, 4, 0.60) 0%, rgba(29, 22, 22, 0.51) 17%, rgba(9, 6, 6, 0.49) 40.5%, rgba(0, 0, 0, 0.60) 74%), 
         url("${bgUrl}") lightgray 60% / cover no-repeat`
      }}>
      <div
        className="self-stretch py-1 pb-2 border-b border-[#2E2E30] justify-between items-center inline-flex mx-[-20px] sm:mx-[-40px]">
        <div className="flex">
          <Logo/>
        </div>
        <div className="justify-start items-start gap-5 hidden md:flex">
          <Link key='Home' href='/' className="text-[#f5efe7] font-bold cursor-pointer hover:text-[#FFFFFF]">Home</Link>
          <Link key='About' href='/aboutus#About'
                className="text-[#f5efe7] font-normal cursor-pointer hover:text-[#FFFFFF]">About</Link>
          <Link key='Services' href='/services#ServiceList'
                className="text-[#f5efe7] font-normal cursor-pointer hover:text-[#FFFFFF]">Services</Link>
          <Link key='Contact' href='/contact#Contact'
                className="text-[#f5efe7] font-normal cursor-pointer hover:text-[#FFFFFF]">Contact</Link>
          <Link key='News' href='/news#News' className="text-[#f5efe7] font-normal cursor-pointer hover:text-[#FFFFFF]">News</Link>
        </div>
        <div className="justify-start items-start gap-[35px] flex hidden md:flex">
          <div
            className="bg-[#f5efe7] max-h-8 rounded-2xl shadow flex-col justify-center items-center inline-flex hover:bg-[#FFFFFF]">
            <Link href='contact/#Contact'
                  className="self-stretch grow shrink basis-0 px-3 py-2 justify-center items-center gap-3 inline-flex">
              <div
                className="text-center text-[#6f1d1b] text-xsm font-semibold  leading-tight tracking-tight text-nowrap">
                Get in Touch
              </div>
            </Link>
          </div>
        </div>

        <div className="inline-flex md:hidden">
          <label className="hamburger">
            <input type="checkbox" checked={isNavOpen} onChange={() => setIsNavOpen(!isNavOpen)} id="navbar-checkbox"/>
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
        {pathname === '/' ? (
          <div
            className="absolute bottom-[-77px] left-0 h-[198px] w-[6400px] bg-repeat-x z-2 animate-wave"
            style={{
              backgroundImage: "url('/wave-2.svg')",
            }}
          />
        ) : null}
      </div>

      {pathname === '/' ? (
        <div className="w-full self-stretch flex-col justify-between items-center flex">
          <div className="m-auto max-w-[800px] self-stretch flex-col justify-center items-center gap-[38px] flex">
            <div
              className="self-stretch text-center text-[#f5efe7] text-lg font-semibold font-playfair leading-[45px] sm:text-xlg sm:leading-[70px]">
              {data.headerTitle}
            </div>
            <div
              className="m-auto self-stretch max-w-[500px] text-center text-[#d4d3d3] font-normal">{data.siteDescription}
            </div>
            <Link href='contact/#Contact'
                  className="px-5 py-4 bg-[#f5efe7] rounded-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-[#FFFFFF]">
              <div
                className="text-center text-[#6f1d1b] font-semibold leading-tight tracking-tight">Schedule
                Appointment
              </div>
            </Link>
          </div>
          <div className="self-stretch justify-between items-start hidden sm:inline-flex">
            {/*<div className="w-[804px] text-xsm"><span*/}
            {/*  className="text-[#f5efe7] font-bold  leading-[76px]">Home</span><span*/}
            {/*  className="text-[#f5efe7] font-medium leading-[76px]"> </span><span*/}
            {/*  className="text-[#f5efe7] font-medium leading-[76px] tracking-tight">¬ </span><span*/}
            {/*  className="text-[#f5efe7] font-medium leading-[76px]">About</span></div>*/}
            {/*<div className="grow shrink basis-0 h-[78px] justify-end items-center flex">*/}
            {/*  <div className="flex-col justify-center items-end inline-flex">*/}
            {/*    <div className="text-right"><span*/}
            {/*      className="text-[#dedddd] font-normal">+(123) </span><span*/}
            {/*      className="text-[#dedddd] font-normal underline">747 295-5409</span></div>*/}
            {/*    <div className="w-[381px] h-[54px] justify-start items-center gap-1.5 inline-flex">*/}
            {/*      <div className="text-right"><span*/}
            {/*        className="text-[#b6b6b6] font-normal ">               </span><span*/}
            {/*        className="text-[#f5efe7] font-medium ">282 West Dryden Street, Glendale, California 91202, United States<br/></span>*/}
            {/*      </div>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      ): null}

      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:hidden">
          {/* Sidebar content */}
          <div className="bg-black w-3/4 h-screen shadow-md">
            <div className="flex flex-col p-4 text-white justify-between gap-6">
              <div className="flex flex-col ">
                <Logo/>
              </div>
              <div
                className="text-[#828181] font-semibold ">{data.siteSlogan}
              </div>
              <div className="flex-col justify-start items-start gap-8 px-6">
                <div className="py-[25px] flex-col justify-start items-start gap-5 inline-flex pr-4 ">
                  <div className="self-stretch text-white text-md font-bold">Services</div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                    {data.serviceData.map((service) => (
                      <Link
                        key={service._id}
                        href={`/services/${service.slug.current}`}
                        className="w-fit text-wrap text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="py-[25px] flex-col justify-start items-start inline-flex gap-5">
                  <div className="self-stretch text-white text-md font-bold">Links<br/></div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                    <Link key='Home' href='/' className="w-[242px] text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">Home</Link>
                    <Link key='Services' href='/services#ServiceList' className="w-[242px] text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">Services</Link>
                    <Link href='/aboutus#About' className="w-[242px] text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">About Us</Link>
                    <Link href='/news#News' className="w-[242px] text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">Articles & News</Link>
                    <Link href='/contact#Contact' className="w-[242px] text-[#828181] font-semibold cursor-pointer hover:text-[#f5efe7]">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[58px] justify-center items-center gap-5 inline-flex">
                <div className="flex inline-flex justify-center items-center gap-4">
                  <div
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FiInstagram width={24}/></div>
                  {/*<div*/}
                  {/*  className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">*/}
                  {/*  <FaFacebookF width={24}/></div>*/}
                  <a href={`mailto:${data.email}`}
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <MdOutlineAlternateEmail width={24}/></a>
                  <a href='tel:+1237472955409'
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] cursor-pointer hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FiPhone width={24}/></a>
                </div>
              </div>
            </div>
          </div>

          {/* Clickable area outside the sidebar that closes it */}
          <div
            className="flex-1"
            onClick={() => setIsNavOpen(false)}
          ></div>
        </div>
      )}
    </div>
  )
}

export default AppHeader
