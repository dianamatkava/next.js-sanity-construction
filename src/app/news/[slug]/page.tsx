import ItemDetails from "@/components/ItemDetails";
import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import AboutUs from "@/components/AboutUs";
import {notFound} from "next/navigation";
import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/live";

export default async function NewsPage ({params}) {
  const { slug } = await params;


  const SANITY_QUERY = defineQuery(`*[
    _type == "news"
    && defined(slug.current)
    && slug.current == '${slug}'
  ][0]`);

  const {data: item} = await sanityFetch({ query: SANITY_QUERY });

  if (!item) {
    notFound();
  }
  
  return (
    <div className="flex flex-col w-full h-full gap-16">
      <div className="lg:flex justify-between items-start gap-12 w-full h-auto">
        <ItemDetails name={item.title} image={item.image} content={item.lgDesc} introTxt={item.smDesc}/>
        <div
          className="flex flex-col justify-between items-stretch lg:items-start gap-24 w-full lg:h-full pt-12 sm:pt-4">
          <div className="self-stretch flex-col justify-start items-start flex my-4">
            <div className="self-stretch text-[#424242] text-lg font-bold font-playfair leading-1 h-full">Lets
              get Started
            </div>
            <ContactForm/>
          </div>
          <div className="self-stretch flex-col justify-start items-start gap-4 hidden lg:flex">
            <div className="self-stretch text-[#424242] text-[32px] font-bold font-playfair leading-1 h-full">Contact Us
            </div>
            <ContactInfo/>
          </div>
        </div>
      </div>
      <AboutUs/>
    </div>
  )
}