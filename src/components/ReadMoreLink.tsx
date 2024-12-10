import {MdOutlineArrowOutward} from "react-icons/md";
import Link from "next/link";

function ReadMoreLink ({ href} : {href: string}) {
  return (
    <Link href={href} className="justify-start items-center gap-0.5 inline-flex group">
      <div className="text-[#414141] text-xsm font-bold leading-tight  group-hover:text-[#949494]">Read More</div>
      <span className="font-bold  group-hover:text-[#949494]"><MdOutlineArrowOutward width={12}/></span>
    </Link>
  );
}

export default ReadMoreLink;