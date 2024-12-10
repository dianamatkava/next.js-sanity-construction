import ReadMoreLink from  '../components/ReadMoreLink'
import ContactButton from "@/components/ContactButton";


function ServiceList () {
  return (
    <div className="self-stretch flex-col justify-start items-start flex gap-5">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="flex flex-col gap-6 w-2/3">
          <div className="">
            <div
              className="text-[#414040] text-sm font-bold leading-1">Services
              we provide:
            </div>
            <div
              className="text-[#414040] text-lg font-medium font-playfair leading-[45px]">Specialized
              Services for construction
            </div>
          </div>

          <div
            className="text-[#414040] text-sm font-normal leading-1">We
            ensure a comprehensive assessment of damages, followed by repair, restoration, and any necessary
            remediation measures.
          </div>
        </div>
      <ContactButton/>
      </div>
      <div className="self-stretch justify-between items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <siv href='/services'
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </siv>
        <siv href='/services'
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </siv>
        <siv href='/services'
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </siv>
        <div href='/services'
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </div>
        <div href='/services'
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </div>
        <div
          className="border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
            <ReadMoreLink href='/services'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceList;