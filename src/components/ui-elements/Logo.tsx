import Image from "next/image";
import {Link} from "@nextui-org/react";
import React from "react";
import {urlFor} from "@/app/ui/urlFor";
import {useAppContext} from "@/context/AppContext";

export default function Logo() {
  const {sharedState: data} = useAppContext();
  const logoUrl = urlFor(data.logo);


  return (
    <Link
      key="Home"
      href='/'
      className="flex">
      <div className="justify-start items-center gap-3 flex">
        <Image width={45} height={45} className="rounded-full" src={logoUrl} alt={"Logo"}/>
        <div
          className="max-w-[200px] text-[#f5efe7] text-xsm font-playfair cursor-pointer hover:text-[#FDFAF7] text-wrap sm:text-sm leading-[20px]">
          {data.siteName}
        </div>
      </div>
    </Link>
  )
}