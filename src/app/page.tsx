import ItemsList from "@/components/ItemsList";
import ServicePreview from "@/components/ServicePreview";
import AboutUs from "@/components/AboutUs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import GalleryWrapper from "@/components/wrappers/GalleryWrapper";
import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/live";


const SANITY_QUERY = defineQuery(`*[
  _type == "service" && defined(slug.current)
] | order(order asc) {
  _id, 
  name, 
  smDesc, 
  mdDesc, 
  slug, 
  image
}`);

export default async function Home() {
    const { data: items } = await sanityFetch({ query: SANITY_QUERY });

  return (
    <>
      <ItemsList items={items}/>
      <GalleryWrapper content={items}>
        <ServicePreview/>
      </GalleryWrapper>
      <AboutUs/>
        <News/>
      <Contact/>
    </>
  );
}
