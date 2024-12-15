import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";



function Contact () {
  return (
    <div className="self-stretch flex-col justify-start items-center gap-12 flex" id='Contact'>
      <div className="self-stretch flex-col justify-start items-start flex">
        <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Contact Us
        </div>
        <div className="self-stretch text-[#424242] text-lg font-medium font-playfair leading-1">Lets
          get Started
        </div>
      </div>
        <div className="justify-between items-center gap-8 inline-flex w-full">
        <ContactInfo className="hidden sm:flex"/>
        <div className="self-stretch flex flex-col justify-start bg-[#f5efe7] rounded-tl-lg rounded-bl-[120px] gap-4 mr-[-30px] sm:w-3/4 p-8 pl-16 sm:mt-[-60px] sm:mr-[-60px]">
          <div className="self-stretch max-w-[450px]">
            <div className="self-stretch text-[#424242] text-lg font-semibold font-playfair leading-1 mb-3">Leave a request
              and our specialists will contact you
            </div>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;