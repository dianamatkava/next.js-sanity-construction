import ReadMoreLink from  '@/components/ui-elements/ReadMoreLink'
import ContactButton from "@/components/ui-elements/ContactButton";
import ScrollableWrapper from "@/components/wrappers/ScrollableWrapper";
import GridWrapper from "@/components/wrappers/GridWrapper";
import ServiceItem from "@/components/ServiceItem";

function ServiceList ({view="scroll"}) {
  return (
    <div className="self-stretch flex-col justify-start items-start flex gap-5">
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
          <ReadMoreLink href={"/services#ServiceList"} name={"View all Services"} className={"sm:justify-start"}/>
        </div>
        <ContactButton name={"Schedule Appointment"}/>
      </div>

      {view === "scroll" ? (
        <ScrollableWrapper>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
        </ScrollableWrapper>
      ) : (
        <GridWrapper>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
          <ServiceItem/>
        </GridWrapper>
      )}

    </div>
  )
}

export default ServiceList;