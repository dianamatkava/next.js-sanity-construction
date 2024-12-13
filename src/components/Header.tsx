"use client"
import React, {useState} from "react";
import {
  Link,
} from "@nextui-org/react";
import {FiInstagram, FiPhone} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";

function AppHeader () {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div
      className="self-stretch px-[60px] py-2 bg-gradient-to-b from-black to-[#290404] flex-col justify-between items-center flex gap-5">
      <div
        className="self-stretch py-1 pb-2 border-b border-[#2E2E30] justify-between items-center inline-flex mx-[-40px]">
        <div className="flex">
          <Link
            key="Home"
            href='/'
            className="flex">
            <div className="justify-start items-center gap-2 flex">
              <img className="w-[45px] h-[45px] rounded-full" src="https://via.placeholder.com/65x69"/>
              <div
                className="max-w-[200px] text-[#f5efe7] text-sm font-playfair hover:text-[#FDFAF7] text-nowrap sm:text-[]">
                AMERICAN ESSENTIAL<br/>CONSTRUCTION GROUP
              </div>
            </div>
          </Link>
        </div>
        <div className="justify-start items-start gap-5 hidden md:flex">
          <Link key='Home' href='/' className="text-[#f5efe7] font-bold hover:text-[#FFFFFF]">Home</Link>
          <Link key='About' href='/aboutus#About'
                className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">About</Link>
          <Link key='Services' href='/services#ServiceList'
                className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">Services</Link>
          <Link key='Contact' href='/contact#Contact'
                className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">Contact</Link>
          <Link key='News' href='/news#News' className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">News</Link>
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
            <input type="checkbox" checked={isNavOpen} onClick={() => setIsNavOpen(!isNavOpen)} id="navbar-checkbox" />
            <svg viewBox="0 0 32 32">
              <path className="line line-top-bottom"
                    d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
              <path className="line" d="M7 16 27 16"></path>
            </svg>
          </label>
        </div>
      </div>
      <div className="w-full self-stretch flex-col justify-between items-center flex">
        <div className="m-auto max-w-[800px] self-stretch flex-col justify-center items-center gap-[38px] flex">
          <div
            className="self-stretch text-center text-[#f5efe7] text-xlg font-semibold font-playfair leading-[70px]">Comprehensive
            Solution for Repair Services
          </div>
          <div
            className="m-auto self-stretch max-w-[500px] text-center text-[#d4d3d3] font-normal">As
            a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
            reconstruction services, including residential and commercial reconstruction, remodeling, and renovations.
          </div>
          <Link href='contact/#Contact'
                className="px-5 py-4 bg-[#f5efe7] rounded-[50px] justify-center items-center gap-2.5 inline-flex hover:bg-[#FFFFFF]">
            <div
              className="text-center text-[#6f1d1b] font-semibold leading-tight tracking-tight">Schedule
              Appointment
            </div>
          </Link>
        </div>
        <div className="self-stretch justify-between items-start inline-flex">
          {/*<div className="w-[804px] text-xsm"><span*/}
          {/*  className="text-[#f5efe7] font-bold  leading-[76px]">Home</span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px]"> </span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px] tracking-tight">¬ </span><span*/}
          {/*  className="text-[#f5efe7] font-medium leading-[76px]">About</span></div>*/}
          <div className="grow shrink basis-0 h-[78px] justify-end items-center flex">
            <div className="flex-col justify-center items-end inline-flex">
              <div className="text-right"><span
                className="text-[#dedddd] font-normal">+(123) </span><span
                className="text-[#dedddd] font-normal underline">747 295-5409</span></div>
              <div className="w-[381px] h-[54px] justify-start items-center gap-1.5 inline-flex">
                <div className="text-right"><span
                  className="text-[#b6b6b6] font-normal ">               </span><span
                  className="text-[#f5efe7] font-medium ">282 West Dryden Street, Glendale, California 91202, United States<br/></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isNavOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex lg:hidden">
          {/* Sidebar content */}
          <div className="bg-black w-3/4 h-screen shadow-md">
            <div className="flex flex-col p-4 text-white justify-between gap-6">
              <div className="flex flex-col ">
                <Link
                  key="Home"
                  href='/'
                  className="flex">
                  <div className="justify-start items-center gap-2 flex">
                    <img className="w-[45px] h-[45px] rounded-full" src="https://via.placeholder.com/65x69"/>
                    <div
                      className="max-w-[200px] text-[#f5efe7] text-sm font-playfair hover:text-[#FDFAF7] text-nowrap sm:text-[]">
                      AMERICAN ESSENTIAL<br/>CONSTRUCTION GROUP
                    </div>
                  </div>
                </Link>
              </div>
              <div
                className="text-[#828181] font-semibold ">We
                ensure a comprehensive assessment of damages, followed by repair, restoration and any necessary
                remediation measure
              </div>
              <div className="flex-col justify-start items-start gap-8 px-6">
                <div className="py-[25px] flex-col justify-start items-start gap-5 inline-flex">
                  <div className="self-stretch text-white text-md font-bold">Services</div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                    <Link href='services' className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">General
                      Construction
                    </Link>
                    <div className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">House Remodeling
                    </div>
                    <div className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Water Damage
                      Restoration
                    </div>
                    <div className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Roofing</div>
                    <div className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Plumbing</div>
                    <div className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Public Adjusting
                    </div>
                  </div>
                </div>
                <div className="py-[25px] flex-col justify-start items-start inline-flex gap-5">
                  <div className="self-stretch text-white text-md font-bold">Links<br/></div>
                  <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                    <Link key='Home' href='/' className="text-[#f5efe7] font-bold hover:text-[#FFFFFF]">Home</Link>
                    <Link key='Services' href='/services#ServiceList'
                          className="text-[#f5efe7] font-normal hover:text-[#FFFFFF]">Services</Link>
                    <Link href='/aboutus#About' className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">About
                      Us</Link>
                    <Link href='/news#News' className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Articles
                      & News</Link>
                    <Link href='/contact#Contact'
                          className="w-[242px] text-[#828181] font-semibold hover:text-[#f5efe7]">Contact Us</Link>
                  </div>
                </div>
              </div>
              <div className="self-stretch h-[58px] justify-center items-center gap-5 inline-flex">
                <div className="flex inline-flex justify-center items-center gap-4">
                  <div
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FiInstagram width={24}/></div>
                  <div
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FaFacebookF width={24}/></div>
                  <div
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <MdOutlineAlternateEmail width={24}/></div>
                  <div
                    className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                    <FiPhone width={24}/></div>
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
