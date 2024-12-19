import ServiceList from "@/components/ServiceList";


import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";


const EVENTS_QUERY = defineQuery(`*[
  _type == "service"
  && defined(slug.current)
]{_id, name, smDesc, slug, image}|order(date desc)`);


export default async function ServicePage() {
  const { data: services } = await sanityFetch({ query: EVENTS_QUERY });

  return (
    <div>
      {services && services.length > 0 ? (
        <ServiceList services={services} view="grid" />
      ) : (
        <p>No services available at the moment.</p>
      )}
    </div>
  )
}
