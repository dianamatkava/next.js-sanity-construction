import InputField from "@/components/ui-elements/InputField";
import {LuSend} from "react-icons/lu";
import CheckBoxField from "@/components/ui-elements/CheckBoxField";
import Link from "next/link";
import React, {useState} from "react";
import SuccessBox from "@/components/SuccessBox";

export default function SubscribeForm() {

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    if (!formData.get('agreements')) {
      alert("Please read and agree to the Terms of Use");
      return;
    }

    const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

    formObject['message'] = 'Hi, I’m interested in your construction services. Please provide more information about how we can proceed. Thank you!'
    formObject['name'] = 'Customer'

    try {
      const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formObject),
      });

      if (response.ok) {
          setFormSubmitted(true);
      } else {
          const errorData = await response.json();
          console.error(errorData)
      }
    } catch (error) {
        console.error(`Failed to submit form: ${error.message}`);
    }
    setFormSubmitted(true);
  }

  if (formSubmitted) {
    return (
      <SuccessBox title={"Your Message Sent Successfully."} message={"We will process your request shortly."}/>
    )
  }

  return (
    <form onSubmit={(e)=> handleSubmitForm(e)} className="self-stretch h-[86.50px] flex-col justify-start items-start gap-4 flex w-[250px]">
      <div className="self-stretch justify-between items-center inline-flex w-full">
        <InputField label={'Email'} type={'email'} name={"email"} placeholder={"example@example.com"}>
          <div className="z-0 absolute top-5 right-1 justify-start items-center gap-2 flex ml-[-55px] cursor-pointer">
            <span className="text-[#e2e2e2]"><LuSend width={18}/></span>
            <button type={'submit'} className="text-[#e2e2e2] font-semibold cursor-pointer hover:text-white hover:font-bold">Send</button>
          </div>
        </InputField>
      </div>

      <div className="self-stretch justify-start items-center gap-2.5 inline-flex">
        <CheckBoxField
          name={"agreements"}
        >
          <label htmlFor={"agreements"} className="cursor-pointer text-[#828181] text-xsm font-normal flex gap-1">
            I agree to
            <Link href={'/termsofuse'} className={'underline'} target="_blank">Terms Of Use</Link>
            <span className={'text-red-600'}>*</span>
          </label>
        </CheckBoxField>
      </div>
    </form>
  )
}