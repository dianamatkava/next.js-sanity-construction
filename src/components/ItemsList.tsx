"use client";
import ReadMoreLink from  '@/components/ui-elements/ReadMoreLink'
import ContactButton from "@/components/ui-elements/ContactButton";
import ScrollableWrapper from "@/components/wrappers/ScrollableWrapper";
import GridWrapper from "@/components/wrappers/GridWrapper";
import ServiceCard from "@/components/ServiceCard";
import {PortableText} from "next-sanity";

function ItemsList ({view="scroll", items}) {
  return (
    <div className="self-stretch flex-col justify-start items-start flex gap-12">
      <div
        className="self-stretch justify-center text-center items-center gap-6 inline-flex sm:justify-between sm:text-start sm:flex-nowrap flex-wrap">
        <div className="flex flex-col gap-6 max-w-[550px] sm:justify-between sm:text-start sm:flex-nowrap flex-wrap">
          <div className="flex flex-col gap-4">
            <div className="text-[#414040] text-sm font-bold leadin-1">Services we provide:
            </div>
            <div className="text-[#414040] text-lg font-playfair font-semibold leading-[45px]">Specialized
              Services for construction
            </div>
          </div>
          <div className="text-[#414040] text-sm font-normal leading-1">We
            ensure a comprehensive assessment of damages, followed by repair, restoration, and any necessary
            remediation measures.
          </div>
          {view !== "grid" ? <ReadMoreLink href={"/services#ServiceList"} name={"View all Services"} className={"justify-center sm:justify-start"}/> : null}
        </div>
        <ContactButton name={"Schedule Appointment"}/>
      </div>

      {view === "scroll" ? (
        <ScrollableWrapper>
          {items?.map((service) => (
            <ServiceCard
              key={service._id}
              data={service}
              renderContent={(content) => (
                <PortableText value={content} />
              )}/>
          ))}
        </ScrollableWrapper>
      ) : (
        <GridWrapper>
          {items?.map((service) => (
            <ServiceCard
              key={service._id}
              data={service}
              renderContent={(content) => (
                <PortableText value={content} />
            )}/>
          ))}
        </GridWrapper>
      )}

    </div>
  )
}

export default ItemsList;