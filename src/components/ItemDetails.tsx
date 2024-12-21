import {PortableText} from "next-sanity";
import Image from "next/image";
import {urlFor} from "@/app/ui/urlFor";


function ItemDetails ({image, name, introTxt, content}) {
  const imageUrl = urlFor(image);

  return (
    <div className="h-auto self-stretch px-4 py-5 flex flex-col justify-start items-start gap-4">
      <div className="leading-[50px] text-[#424242] text-lg font-medium font-playfair">
        <span className="font-extrabold">{name}</span>
      </div>
      <div className="gap-8 justify-start items-start flex flex-col h-full">
        <div className="flex-grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex w-full">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">About the Service</div>
          <div
            className="self-stretch text-[#414040] text-sm font-normal leading-1">
             <PortableText value={introTxt} />
          </div>
          <Image
            className="self-stretch h-full sm:min-h-72"
            name={name}
            alt={name}
            src={imageUrl}
            width={800}
            height={400}
            objectFit="cover"/>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex h-full w-full">
          <div className="flex flex-col justify-between items-start gap-3 my-auto h-full text-sm portable-text">
            <PortableText value={content}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails;