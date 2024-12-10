import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";



function Contact () {
  return (
    <div className="self-stretch flex-col justify-start items-center gap-8 flex" id='Contact'>
      <div className="self-stretch flex-col justify-start items-start flex">
        <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Contact Us
        </div>
        <div className="self-stretch text-[#424242] text-lg font-medium font-playfair leading-1">Lets
          get Started
        </div>
      </div>
      <div className="justify-between items-center gap-8 inline-flex">
      <ContactInfo/>
      <ContactForm/>
      </div>
    </div>
  )
}

export default Contact;