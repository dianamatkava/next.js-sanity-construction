"use client"
import React, {useState} from "react";
import InputField from "@/components/ui-elements/InputField";
import TextAreaField from "@/components/ui-elements/TextAreaField";
import CheckBoxField from "@/components/ui-elements/CheckBoxField";
import SubmitButton from "@/components/ui-elements/SubmitButton";
import Link from "next/link";
const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export default function ContactForm({className=''}) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;
      });

    if (!formObject['agreements']) {
      alert("You must agree to the terms!");
      return;
    }

    if (!formObject['message']) {
      formObject['message'] = 'Hi, I’m interested in your construction services. Please provide more information about how we can proceed. Thank you!'
    }

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
  }

  return (
    <div
      className={`self-stretch flex-col justify-start items-center inline-flex w-full h-full gap-4 max-w-[450px] ${className}`}>
      <div className="self-stretch grow shrink basis-0 h-full">
        {!formSubmitted ? (
          <form className="flex flex-col items-start justify-between w-full gap-8" onSubmit={(e) => (handleFormSubmit(e))}>
            <div className="flex flex-col gap-6 w-full">
              <InputField
                name={"name"}
                label={"Enter your Name"}
                placeholder={"John Doe"}
                inputClassName='form__light_field'
                labelClassName={"form__light_label"}
              />
              <InputField
                name={"email"}
                type="email"
                label={"Enter your Email"}
                placeholder={"example@example.com"}
                inputClassName='form__light_field'
                labelClassName={"form__light_label"}
              />
              <TextAreaField
                name={"message"}
                label={"Leave the message"}
                required={false}
                placeholder={"Hi, I’m interested in your construction services. Please provide more information about how we can proceed. Thank you!"}
                inputClassName={'form__light_field'}
                labelClassName={"form__light_label"}
              />
              <CheckBoxField
                name={"agreements"}
              >
                <label htmlFor={"agreements"} className="cursor-pointer flex gap-1">
                  I agree to
                  <Link href={'/termsofuse'} className={'underline'} target="_blank">Terms Of Use</Link>
                  <span className={'text-red-600'}>*</span>
                </label>
              </CheckBoxField>
            </div>
            <SubmitButton name="Submit" className="w-full"/>
          </form>
        ) : (
          <div className="w-full max-w-[570px] rounded-[20px] bg-white py-12 px-8 text-center md:py-[60px] md:px-[70px]">
            <h3 className="text-gray-500 pb-2 text-sm font-bold">Your Message Sent Successfully</h3>
            <span className="bg-[#6f1d1b] mx-auto mb-6 inline-block h-1 w-[90px] rounded"></span>
            <p className="text-gray-500 mb-10 text-base leading-relaxed">Thank you for reaching out to us. We will process your request shortly. Our agents will contact you within 48 hours.</p>
            <div className={`justify-center items-center gap-0.5 flex group underline`}>
              <button
                onClick={() => setFormSubmitted(false)}
                className="text-[#414141] text-xsm font-bold leading-tight text-nowrap group-cursor-pointer hover:text-[#949494]">
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
