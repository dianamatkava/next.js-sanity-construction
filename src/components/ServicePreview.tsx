"use client";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import ContactButton from "@/components/ui-elements/ContactButton";
import {PortableText} from "next-sanity";
import {urlFor} from "@/app/ui/urlFor";


function ServicePreview({ children, name, mdDesc, slug, image}) {
  const imageUrl = urlFor(image);

  return (
    <div className="grow shrink h-auto self-stretch bg-[#f5efe7] justify-between items-start block mx-[-30px] ms:mx-[-60px] sm:flex">
      <div
        className="grow shrink basis-0 self-stretch p-2 justify-center items-end flex min-h-64 w-full relative bg-cover bg-center sm:w-1/2"
        style={{
          backgroundImage: `url("${imageUrl}")`
        }}
      >
        {children && children()}
      </div>
      <div className="grow shrink basis-0 self-stretch px-2 justify-start items-start flex w-full h-auto sm:items-center sm:w-1/2">
        <div className="flex flex-col justify-between items-center gap-4 my-auto h-full py-8 px-4 sm:items-start sm:pl-6 m-4">
          <div className="h-80 flex-col justify-start items-start gap-4 flex">
            <div className="text-[#424242] text-lg font-semibold font-playfair leading-[45px]">
              {name}
            </div>
            <div className="flex flex-col gap-2 leading-2 w-4/5 portable-text"><PortableText value={mdDesc} /></div>
            <ReadMoreLink href={`/services/${slug.current}`} name={"Read More"} className='flex md:hidden'/>
          </div>
          <div className="justify-start items-center gap-4 inline-flex">
            <ContactButton name={"Schedule Appointment"}/>
            <ReadMoreLink href={`/services/${slug.current}`} name={"Read More"} className='hidden md:flex'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicePreview;
