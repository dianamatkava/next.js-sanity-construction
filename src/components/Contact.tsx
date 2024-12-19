import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";
import GoogleMap from "@/components/ui-elements/GoogleMap";
import {HiOutlineOfficeBuilding} from "react-icons/hi";



function Contact () {
  return (
    <div className="self-stretch flex-col justify-start items-center gap-6 flex w-full h-full" id='Contact'>
      <div className="self-stretch flex-col justify-start items-start flex h-full">
        <div className="self-stretch text-[#424242] text-sm font-bold leading-1 h-full">Contact Us
        </div>
        {/*<div className="self-stretch text-[#424242] text-lg font-medium font-playfair leading-1 h-full">Lets*/}
        {/*  get Started*/}
        {/*</div>*/}
      </div>
        <div className="w-full flex justify-start items-center h-full sm:gap-36">
          <div className="self-stretch flex flex-col justify-center items-center gap-4">
            <div className="self-stretch sm:w-[400px] h-full flex flex-col gap-4">
              <div className="self-stretch text-[#424242] text-lg font-semibold font-playfair mb-3">Leave a request
                and our specialists will contact you
              </div>
              <ContactForm/>
            </div>
          </div>
          <ContactInfo className="hidden sm:flex"/>
          {/*<div className="self-stretch hidden flex-col justify-center items-center w-full max-h-[500px] custom-lg:flex gap-4">*/}
          {/*  <GoogleMap className={"rounded-1 w-full h-full"} height={'100%'} width={'100%'} allowFullScreen={true}/>*/}
          {/*  <div className="self-stretch inline-flex justify-start items-center gap-3">*/}
          {/*    <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">*/}
          {/*      <HiOutlineOfficeBuilding width={24}/></div>*/}
          {/*    <div*/}
          {/*      className="self-stretch text-black text-[13px] font-medium items-center pt-2">282 West Dryden Street,*/}
          {/*      Glendale, California 91202, United States*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
    </div>
  )
}

export default Contact;