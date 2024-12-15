"use client"
import React from "react";
import InputField from "@/components/ui-elements/InputField";
import TextAreaField from "@/components/ui-elements/TextAreaField";
import CheckBoxField from "@/components/ui-elements/CheckBoxField";
import ContactButton from "@/components/ui-elements/ContactButton";

export default function ContactForm() {

  return (
    <div
      className="self-stretch flex-col justify-start items-center inline-flex w-full h-full">
      <div className="self-stretch grow shrink basis-0 h-full">
        <form className="flex flex-col items-start justify-between w-full h-full">
          <div className="flex flex-col gap-6 w-full">
            <InputField label={"Enter your Name *"} placeholder={"John Doe"} inputClassName='form__light_field' labelClassName={"form__light_label"}/>
            <InputField label={"Enter your Email *"} placeholder={"example@example.com"} inputClassName='form__light_field' labelClassName={"form__light_label"}/>
            <TextAreaField label={"Leave the message"} required={false} placeholder={"Leave your message"} inputClassName={'form__light_field'} labelClassName={"form__light_label"}/>
            <CheckBoxField label="I agree to Terms Of Use." width={"14px"}/>
          </div>
          <ContactButton name="Submit" className="w-full"/>
        </form>
      </div>
    </div>
  );
}
