import ServiceList from "@/components/ServiceList";
import ServicePreview from "@/components/ServicePreview";
import AboutUs from "@/components/AboutUs";
import News from "@/components/News";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <ServiceList/>
      <ServicePreview/>
      <AboutUs/>
      <News/>
      <Contact/>
    </>
  );
}
