import imageUrlBuilder from "@sanity/image-url";
import {client} from "@/sanity/client";

const builder = imageUrlBuilder(client);

export const urlFor = (source: any) => {
  if (!source) {
    return "https://via.placeholder.com/757x410";
  }

  const image = builder.image(source);
  return image ? image.url() : "https://via.placeholder.com/757x410";
};
