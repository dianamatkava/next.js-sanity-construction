"use client"
import ServiceDetails from "@/components/ServiceDetails";
import ContactForm from "@/components/ContactForm";
import ServiceList from "@/components/ServiceList";
import AboutUs from "@/components/AboutUs";
import ContactInfo from "@/components/ContactInfo";

export default function ServicePage() {
  return (
    <div className="flex flex-col w-full h-full gap-12">
      <div className="lg:flex justify-between items-start gap-12 w-full h-full">
        <ServiceDetails/>
        <div className="flex flex-col justify-between items-center lg:items-start gap-12 w-full h-full">
          <div className="self-stretch flex-col justify-start items-start flex h-full">
            <div className="self-stretch text-[#424242] text-sm font-bold leading-1 h-full">Contact Us
            </div>
            <div className="self-stretch text-[#424242] text-lg font-medium font-playfair leading-1 h-full">Lets
              get Started
            </div>
            <ContactForm/>
          </div>
            <ContactInfo/>
        </div>
      </div>
      <ServiceList/>
      <AboutUs/>
    </div>
  );
}
