import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import Image from "next/image";

function AboutUs ({showReadMoreLink=true}) {

  return (
    <div className="self-stretch px-4 py-5 flex flex-col justify-start items-start gap-12 " id="About">
      <div className="leading-[50px] text-[#424242] text-lg font-medium font-playfair"><span className="font-normal">A Group of Companies providing </span><span
        className="font-extrabold">Repair Services</span>
      </div>
      <div className="block gap-8 justify-start items-start sm:flex">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex w-full md:w-1/2">
          <div
            className="self-stretch text-[#424242] text-sm font-bold leading-1">About
            Us
          </div>
          <div
            className="self-stretch text-[#414040] text-sm font-normal leading-1">As
            a group of companies, we offer a wide range of water restoration, leak detection, mold remediation and
            reconstruction services, including residential and commercial reconstruction, remodeling, and renovations.
          </div>
          <Image width={757} height={410} className="self-stretch h-full sm:min-h-72" src="https://via.placeholder.com/757x410" alt={"Our Office"}/>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex h-full w-full sm:w-1/2">
          <div className="text-[#424242] text-sm font-bold leading-1">Our
            History
          </div>
          <div className="flex flex-col justify-between items-start gap-2 my-auto h-full">
            <div className="full"><span
              className="text-[#414040] text-sm font-normal leading-1">American Essential Construction Group (</span><span
              className="text-[#414040] text-sm font-bold leading-1">AMESC Group</span><span
              className="text-[#414040] text-sm font-normal leading-1">) was founded as a group of water restoration and reconstruction companies in 2023 in California. <br/><br/>Since then, we have grown into one of the most trusted names in leak detection, water damage and reconstruction industries in Southern California.           We have completed many projects and have a reputation for excellence.<br/><br/>American Essential Construction Group (</span><span
              className="text-[#414040] text-sm font-bold leading-1">AMESC Group</span><span
              className="text-[#414040] text-sm font-normal leading-1">) was founded as a group of water restoration and reconstruction companies in 2023 in California. <br/><br/>Since then, we have grown into one of the most trusted names in leak detection, water damage and reconstruction industries in Southern California. </span>
            </div>
            {showReadMoreLink && <ReadMoreLink href='/aboutus' name={"Read More"}/>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;