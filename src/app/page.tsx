import ServiceList from "@/components/ServiceList";
import ServicePreview from "@/components/ServicePreview";
import AboutUs from "@/components/AboutUs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import GalleryWrapper from "@/components/wrappers/GalleryWrapper";
import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/live";


const EVENTS_QUERY = defineQuery(`*[
  _type == "service"
  && defined(slug.current)
]{_id, name, smDesc, mdDesc, slug, image}|order(date desc)`);

export default async function Home() {
    const { data: services } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <>
      <ServiceList services={services}/>
      <GalleryWrapper content={services}>
        <ServicePreview/>
      </GalleryWrapper>
      <AboutUs/>
        <News/>
      <Contact/>
    </>
  );
}
