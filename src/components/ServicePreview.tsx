"use client";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import ContactButton from "@/components/ui-elements/ContactButton";
import Image from "next/image";

function ServicePreview({ name, description, img }) {
  return (
    <div className="self-stretch bg-[#f5efe7] justify-between items-start block mx-[-30px] ms:mx-[-60px] sm:flex">
      <div
        className="grow shrink basis-0 self-stretch px-2 justify-start items-center flex min-h-64 w-full relative bg-cover bg-center sm:w-1/2"
        style={{
          backgroundImage: `url("${img}")`
        }}
      >
      </div>
      <div className="grow shrink basis-0 self-stretch px-2 justify-start items-start flex w-full sm:items-center sm:w-1/2">
        <div className="m-12 flex flex-col justify -between items-center gap-4 my-auto h-full py-8 px-4 sm:items-start sm:pl-6 sm:m-0">
          <div className="h-72 flex-col justify-start items-start gap-4 flex">
            <div className="text-[#424242] text-lg font-semibold font-playfair leading-[45px]">
              {name}
            </div>
            <div className="leading-2 w-4/5">{description}</div>
            <ReadMoreLink href="/services" name={"Read More"} className='flex sm:hidden'/>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <ContactButton name={"Schedule Appointment"} />
            <ReadMoreLink href="/services" name={"Read More"} className='hidden sm:flex'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePreview;
