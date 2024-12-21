"use client"
import {FiCalendar} from "react-icons/fi";
import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";
import {useAppContext} from "@/context/AppContext";
import {urlFor} from "@/app/ui/urlFor";
import {PortableText} from "next-sanity";
import Link from "next/link";

export default function NewsPage() {

  const {sharedState: data} = useAppContext();

  return (
    <div className="self-stretch flex-col justify-start items-end gap-12 flex" id="News">
      <div className="self-stretch flex justify-between items-end">
        <div className="self-stretch flex-col justify-start items-start flex">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Blog and
            News
          </div>
          <div
            className="self-stretch grow shrink basis-0 text-[#424242] text-lg font-medium font-playfair">Latest
            News and Articles
          </div>
        </div>
      </div>
      <div className="self-stretch justify-start flex-col items-start gap-8 inline-flex w-full">
        {data.serviceData?.map((item) => (
            <div
              key={item._id}
              className="w-full justify-start items-center flex"
            >
              <div
                className="self-stretch flex-col justify-between items-start inline-flex sm:min-w-64 bg-cover bg-center"
                style={{
                  backgroundImage: `url("${urlFor(item.image)}")`
                }}>
              </div>
              <div className="self-stretch grow shrink flex-col justify-between items-start inline-flex gap-4 sm:px-4 max-w-[800px]">
                <div className="flex-col justify-start items-start gap-4 flex">
                  <div className="justify-start items-center gap-3 inline-flex">
                    <div className="px-2 bg-[#6f1d1b] justify-center items-center gap-3 flex">
                      <div className="text-[#f5efe7] text-xsm font-bold leading-1">Articles</div>
                    </div>
                    <div className="justify-between items-center gap-1 flex">
                      <span className="text-[#847474]"><FiCalendar width={12}/></span>
                      <div className="text-[#747474] text-[11px] font-semibold leading-1">December 04,
                        2024
                      </div>
                    </div>
                  </div>
                  <Link key={item._id} href={`/news/${item.slug.current}`} className="text-[#424242] text-md font-bold leading-1 cursor-pointer hover:text-[#8E8E8E]">{item.name}
                  </Link>
                  <div
                    className="self-stretch text-[#414040] text-sm font-normal leading-1">
                    <PortableText key={item._id} value={item.smDesc}/>
                  </div>
                </div>
                <ReadMoreLink key={item._id} href={`/news/${item.slug.current}`} name={"Read More"}/>
              </div>

            </div>
          ))}
      </div>
    </div>
  );
}
