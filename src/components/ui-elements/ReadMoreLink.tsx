import {MdOutlineArrowOutward} from "react-icons/md";
import Link from "next/link";

function ReadMoreLink ({ href, name, className=""} : {href: string, name: string, className: string}) {
  return (
    <Link href={href} className={`justify-start items-center gap-0.5 flex group ${className}`}>
      <div className="text-[#414141] text-xsm font-bold leading-tight text-nowrap group-hover:text-[#949494]">{name}</div>
      <span className="font-bold  group-hover:text-[#949494]"><MdOutlineArrowOutward width={12}/></span>
    </Link>
  );
}

export default ReadMoreLink;