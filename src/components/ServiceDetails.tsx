import {PortableText} from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/client";
import Image from "next/image";

const builder = imageUrlBuilder(client);

const urlFor = (source) => {
  return builder.image(source); // Generate the image URL
};

function ServiceDetails ({data}) {
  const imageUrl = urlFor(data.image).url();

  return (
    <div className="self-stretch px-4 py-5 flex flex-col justify-start items-start gap-4">
      <div className="leading-[50px] text-[#424242] text-lg font-medium font-playfair">
        <span className="font-extrabold">{data.name}</span>
      </div>
      <div className="gap-8 justify-start items-start flex flex-col">
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex w-full">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">About the Service</div>
          <div
            className="self-stretch text-[#414040] text-sm font-normal leading-1">
             <PortableText value={data.smDesc} />
          </div>
          <Image
            className="self-stretch h-full sm:min-h-72"
            name={data.name}
            alt={data.name}
            src={imageUrl}
            width={800}
            height={400}
            objectFit="cover"/>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex h-full w-full">
          <div className="flex flex-col justify-between items-start gap-2 my-auto h-full">
            <div className="self-stretch text-[#414040] text-sm font-normal leading-1"><PortableText value={data.lgDesc}/></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceDetails;