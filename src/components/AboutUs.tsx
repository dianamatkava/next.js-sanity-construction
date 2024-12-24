"use client"
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import Image from "next/image";
import {useAppContext} from "@/context/AppContext";
import {urlFor} from "@/app/ui/urlFor";
import {PortableText} from "next-sanity";
import { v4 as uuidv4 } from 'uuid';
import PortableTextStyledComponents from "@/components/wrappers/PortableTextStyledComponents";

function AboutUs ({showReadMoreLink=true}) {
  const {sharedState: data} = useAppContext();

  return (
    <div className="self-stretch px-4 py-5 flex flex-col justify-start items-start gap-12 " id="About">
      <div className="leading-[50px] text-[#424242] text-lg font-medium font-playfair"><span className="font-normal">A Group of Companies providing </span><span
        className="font-extrabold">Repair Services</span>
      </div>
      <div className="block gap-8 justify-start items-start sm:flex">
          <div
            className="flex flex-col self-stretch text-[#414040] text-sm font-normal leading-1 gap-3">
            <PortableTextStyledComponents content={data.aboutCompany}/>
            {showReadMoreLink
              ? <ReadMoreLink href='/aboutus' name={"Read More"}/>
              : <div className="mt-3 flex flex-col self-stretch text-[#414040] text-sm font-normal leading-1 gap-3">
                  <PortableTextStyledComponents content={data.ourHistory}/>
                </div>
            }
          </div>
          <div
            className="flex flex-col self-stretch text-[#414040] text-sm font-normal leading-1 gap-3">
            <PortableTextStyledComponents content={data.aboutUs}/>
          </div>
        </div>
    </div>
  )
}

export default AboutUs;