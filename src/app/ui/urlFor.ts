import imageUrlBuilder from "@sanity/image-url";
import {client} from "@/sanity/client";

const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source).url();
};

