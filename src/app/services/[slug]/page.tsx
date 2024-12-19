import ServiceDetails from "@/components/ServiceDetails";
import ContactForm from "@/components/ContactForm";
import ServiceList from "@/components/ServiceList";
import AboutUs from "@/components/AboutUs";
import ContactInfo from "@/components/ContactInfo";
import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/live";
import { notFound } from 'next/navigation';

const EVENTS_QUERY = defineQuery(`*[
  _type == "service"
  && defined(slug.current)
]{_id, name, smDesc, lgDesc, slug, image}|order(date desc)`);

interface ServicePageProps {
  params: { slug: string };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  const {data: services} = await sanityFetch({ query: EVENTS_QUERY });
  const service = services.find((service) => service.slug.current === slug);
  if (!service) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full h-full gap-12">
      <div className="lg:flex justify-between items-start gap-12 w-full h-full">
        <ServiceDetails data={service}/>
        <div className="flex flex-col justify-between items-center lg:items-start gap-12 w-full h-full">
          <div className="self-stretch flex-col justify-start items-start flex h-full">
            <div className="self-stretch text-[#424242] text-sm font-bold leading-1 h-full">Contact Us
            </div>
            <div className="self-stretch text-[#424242] text-lg font-medium font-playfair leading-1 h-full">Lets
              get Started
            </div>
            <ContactForm/>
          </div>
            <ContactInfo/>
        </div>
      </div>
      <ServiceList services={services}/>
      <AboutUs/>
    </div>
  );
}
