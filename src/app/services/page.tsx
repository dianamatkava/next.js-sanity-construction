import ItemsList from "@/components/ItemsList";


import { defineQuery } from "next-sanity";
import { sanityFetch } from "@/sanity/live";


const SANITY_QUERY = defineQuery(`*[
  _type == "service" && defined(slug.current)
] | order(order asc) {
  _id, 
  name, 
  smDesc, 
  slug, 
  image
}`);

export default async function ServicePage() {
  const { data: items } = await sanityFetch({ query: SANITY_QUERY });

  return (
    <div>
      {items && items.length > 0 ? (
        <ItemsList items={items} view="grid" />
      ) : (
        <p>No services available at the moment.</p>
      )}
    </div>
  )
}
