import {FiInstagram, FiPhone} from "react-icons/fi";
import {FaFacebookF} from "react-icons/fa";
import {MdOutlineAlternateEmail} from "react-icons/md";
import { LuSend } from "react-icons/lu";
import Link from "next/link";
import InputField from "@/components/ui-elements/InputField";
import CheckBoxField from "@/components/ui-elements/CheckBoxField";
import React from "react";


function AppFooter () {
  return (
    <div
      className="self-stretch px-[20px] sm:px-[60px] pb-2.5 bg-[#050505] flex-col justify-between items-start flex">
      <div
        className="self-stretch grow shrink basis-0 pt-2.5 pb-10 border-b border-black justify-between items-start inline-flex flex-wrap">
        <div className="justify-start items-center gap-6 sm:gap-12 flex flex-wrap">
          <div className="flex-col w-[300px] justify-start items-start gap-8 inline-flex">
            <div className="flex-col justify-start items-statext-[#828181]  font-semibold rt gap-4 inline-flex">
              <div
                className="justify-start items-center gap-3 inline-flex">
                <img className="rounded-full" src="https://via.placeholder.com/65x69"/>
                <div
                  className="grow shrink basis-0 text-[#f5efe7]  font-bold font-playfair">
                  AMERICAN ESSENTIAL <br/>CONSTRUCTION GROUP
                </div>
              </div>
              <div
                className="text-[#828181] font-semibold ">We
                ensure a comprehensive assessment of damages, followed by repair, restoration and any necessary
                remediation measure
              </div>
            </div>
            <div className="self-stretch h-[58px] justify-start items-center gap-5 inline-flex">
              <div className="flex inline-flex justify-center items-center gap-4">
                <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                  <FiInstagram width={24}/></div>
                <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                  <FaFacebookF width={24}/></div>
                <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                  <MdOutlineAlternateEmail width={24}/></div>
                <div className="justify-start items-start rounded-[50px] border border-[#212121] p-3 text-[#828181] hover:text-[#f5efe7] hover:border-[#A4A2A0]">
                  <FiPhone width={24}/></div>
              </div>
            </div>
          </div>
          <div className="flex justify-start items-start gap-8 w-fit">
            <div className="py-[25px] flex-col justify-start items-start gap-4 sm:gap-10 inline-flex">
              <div className="self-stretch text-white text-md font-bold text-nowrap">Services</div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <Link href='/services' className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">General
                  Construction
                </Link>
                <div className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">House Remodeling
                </div>
                <div className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Water Damage
                  Restoration
                </div>
                <div className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Roofing</div>
                <div className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Plumbing</div>
                <div className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Public Adjusting
                </div>
              </div>
            </div>
            <div className="py-[25px] flex-col justify-start items-start inline-flex gap-4 sm:gap-10">
              <div className="self-stretch text-white text-md font-bold">Links<br/></div>
              <div className="grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <Link href='/aboutus#About' className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">About Us</Link>
                <Link href='/news#News' className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Articles & News</Link>
                <Link href='/contact#Contact' className="w-fit text-[#828181] font-semibold hover:text-[#f5efe7]">Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-1/4 py-[25px] flex-col justify-start items-start gap-4 sm:gap-8 inline-flex">
          <div className="text-white text-md font-bold text-nowrap">Lets get Started</div>
          <div className="self-stretch h-[86.50px] flex-col justify-start items-start gap-4 flex w-[250px]">
            <div className="self-stretch justify-between items-center inline-flex w-full">
              <InputField label={'Email'} placeholder={"example@example.com"}>
                <div className="z-0 absolute top-5 right-1 justify-start items-center gap-2 flex ml-[-55px] cursor-pointer">
                  <span className="text-[#e2e2e2]"><LuSend width={18}/></span>
                  <span className="text-[#e2e2e2] font-semibold hover:text-white hover:font-bold">Send</span>
                </div>
              </InputField>

            </div>
            <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
              <CheckBoxField/>
              <div className="text-[#828181] text-xsm font-normal">I agree to the Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="self-stretch pt-[30px] pb-2.5 border-t border-neutral-700 justify-between items-start inline-flex text-xsm">
        <div className="text-[#e2e2e2] font-normal hover:text-[#f5efe7] w-1/2">© 2025 AMESC Group All Rights Reserved
          by site
        </div>
        <Link href='/termsofuse' className="text-[#e2e2e2] font-normal hover:text-[#f5efe7] w-1/2 text-end">Privacy Policy | Terms of Service</Link>
      </div>
    </div>
  )
}

export default AppFooter;