import ReadMoreLink from "@/components/ui-elements/ReadMoreLink";

const ServiceItem = () => {
  return (
      <div
        className="max-w-72 border-r border-b border-[#e2e2e2] flex-col justify-center items-start pb-3 gap-2 inline-flex hover:shadow-lg">
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
  )
}

export default ServiceItem;