import ReadMoreLink from  '@/components/ui-elements/ReadMoreLink'
import ContactButton from "@/components/ui-elements/ContactButton";
import ScrollableWrapper from "@/components/wrappers/ScrollableWrapper";

function ServiceList () {
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
          <ReadMoreLink href={"/"} name={"View all Services"} className={"sm:justify-start"}/>
        </div>
        <ContactButton name={"Schedule Appointment"}/>
      </div>
      <ScrollableWrapper>
        <>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
          <div
            className="w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
            <img className="self-stretch" src="https://via.placeholder.com/454x289"/>
            <div className="self-stretch flex-col justify-start items-start gap-2 flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="self-stretch text-[#414040] text-md font-bold leading-loose">General
                  Construction
                </div>
                <div
                  className="self-stretch text-[#606060] leading-1 text-sm">Lorem
                  Ipsum is a dummy or placeholder text commonly used in graphic design
                </div>
              </div>
              <ReadMoreLink href='/services' name={"Read More"}/>
            </div>
          </div>
        </>
      </ScrollableWrapper>
    </div>
  )
}

export default ServiceList;