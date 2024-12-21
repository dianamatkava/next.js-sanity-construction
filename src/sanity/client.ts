import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "eygd6ehi",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});

export async function sanityFetch({ query, params }: { query: string; params?: Record<string, any> }) {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return null;
  }
}
