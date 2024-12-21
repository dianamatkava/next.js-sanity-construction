/* eslint-disable @typescript-eslint/no-explicit-any */

import {createClient, SanityClient} from "next-sanity";

export const client: SanityClient = createClient({
  projectId: "eygd6ehi",
  dataset: "production",
  apiVersion: "2024-11-01",
  useCdn: false,
});

export async function sanityFetch<T>({ query, params }: { query: string; params?: Record<string, any> }): Promise<T | null> {
  try {
    return await client.fetch(query, params);
  } catch (error) {
    console.error('Error fetching data from Sanity:', error);
    return null;
  }
}
