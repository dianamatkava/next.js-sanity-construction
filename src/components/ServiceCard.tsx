"use client"
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import Image from "next/image";
import Link from "next/link";
import {urlFor} from "@/app/ui/urlFor";


const ServiceCard = ({data, renderContent}) => {
  const imageUrl = urlFor(data.image);
  return (
    <div
      className="min-h-80 min-w-60 max-w-72 border-r border-b border-[#e2e2e2] flex-col justify-between items-start pb-3 gap-2 inline-flex hover:shadow-lg">
      <div className="flex flex-col justify-between items-start gap-2">
        <Link href={`/services/${data.slug.current}`} className="self-stretch flex-col w-full h-auto">
        <Image
          className="self-stretch"
          src={imageUrl}
          name={data.name}
          alt={data.name}
          width={500}
          height={200}
          style={{
            objectFit: "cover",
          }}
        />
      </Link>
        <div className="self-stretch flex-col justify-start items-start gap-4 flex px-4">
          <div className="self-stretch flex-col justify-start items-start gap-1 flex">
            <Link key={data._id} href={`/services/${data.slug.current}`}
                  className="self-stretch text-[#414040] text-md font-bold leading-1 hover:text-[#949494]">{data.name}
            </Link>
            <div
              className="self-stretch text-[#606060] leading-1 text-xsm flex flex-col gap-1">{data.smDesc && renderContent(data.smDesc)}</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex-col justify-start px-4">
        <ReadMoreLink href={`/services/${data.slug.current}`} name={"Read More"}/>
      </div>
    </div>
  )
}

export default ServiceCard;