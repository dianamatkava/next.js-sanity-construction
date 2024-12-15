import ServiceList from "@/components/ServiceList";
import ServicePreview from "@/components/ServicePreview";
import AboutUs from "@/components/AboutUs";
import News from "@/components/News";
import Contact from "@/components/Contact";
import GalleryWrapper from "@/components/wrappers/GalleryWrapper";

export default function Home() {
  const content = [
    {
      id: 0,
      img: "/water-damage.png",
      name: "Water Damage Restoration",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et libero sollicitudin, id congue mi egestas.",
    },
    {
      id: 1,
      img: "/roofing.png",
      name: "Roofing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et libero sollicitudin, id congue mi egestas.",
    },
    {
      id: 2,
      img: "/house-modeling.png",
      name: "Mold Remediation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ornare ex et libero sollicitudin, id congue mi egestas.",
    },
  ];
  return (
    <>
      <ServiceList/>
      <GalleryWrapper content={content}>
        <ServicePreview/>
      </GalleryWrapper>
      <AboutUs/>
      <News/>
      <Contact/>
    </>
  );
}
