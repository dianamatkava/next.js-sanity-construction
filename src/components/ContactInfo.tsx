import {MdOutlineAlternateEmail} from "react-icons/md";
import {FiInstagram, FiPhone} from "react-icons/fi";
import {HiOutlineOfficeBuilding} from "react-icons/hi";
import {FaFacebookF} from "react-icons/fa";

function ContactInfo () {
  return (
    <div className="flex flex-col gap-6">
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <MdOutlineAlternateEmail width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Chat
            to us
          </div>
          <div className="self-stretch text-[#595959] text-sm font-normal leading-1">Our
            friendly team is here to help.
          </div>
          <div
            className="self-stretch text-black text-sm font-semibold leading-1">info@amesc.us
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <FiPhone width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Visit us
          </div>
          <div className="self-stretch text-[#595959] text-sm font-normal leading-1">Come to say hello at our office.
          </div>
          <div
            className="self-stretch text-black text-sm font-semibold leading-1">282 West Dryden Street, Glendale, <br/> California 91202, United States
          </div>
        </div>
      </div>
      <div
        className="justify-start items-start gap-4 inline-flex">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-2">
          <HiOutlineOfficeBuilding width={24}/></div>
        <div className="flex-col justify-start items-start inline-flex gap-2">
          <div className="self-stretch text-[#424242] text-sm font-bold leading-1">Call us
          </div>
          <div className="self-stretch text-[#595959] text-sm font-normal leading-1">Mon-Fri from 8am to 5pm
          </div>
          <div
            className="self-stretch text-black text-sm font-semibold leading-1">747 295-5409
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.4146162340885!2d-118.26187252365278!3d34.16131567311602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c04eb2b3b2b3%3A0xfe3bac6e663306f2!2s282%20W%20Dryden%20St%2C%20Glendale%2C%20CA%2091202%2C%20USA!5e0!3m2!1sen!2sde!4v1733685133061!5m2!1sen!2sde"
        width="300" height="250" className="rounded-[30px]" allowFullScreen="" loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="flex inline-flex justify-center items-center gap-4">
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <FiInstagram width={24} className='hover:border-[#757171]'/></div>
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <FaFacebookF width={24} className='hover:border-[#757171]'/></div>
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <MdOutlineAlternateEmail width={24} className='hover:border-[#757171]'/></div>
        <div className="justify-start items-start rounded-[10px] border border-[#d7d3d3] p-3 group hover:border-[#757171]">
          <FiPhone width={24} className='hover:border-[#757171]'/></div>
      </div>
    </div>
  );
}

export default ContactInfo;