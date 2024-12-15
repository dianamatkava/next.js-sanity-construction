"use client"
import React from "react";
import {Form, Input, Select, SelectItem, Checkbox, Button} from "@nextui-org/react";

export default function ContactForm() {
  const [submitted, setSubmitted] = React.useState(null);
  const [errors, setErrors] = React.useState({});


  const onSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));

    // Custom validation checks
    const newErrors = {};

    // Username validation
    if (data.name === "admin") {
      newErrors.name = "Nice try! Choose a different username";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

      return;
    }

    if (data.terms !== "true") {
      setErrors({terms: "Please accept the terms"});

      return;
    }

    // Clear errors and submit
    setErrors({});
    setSubmitted(data);
  };

  return (
    <div
      className="self-stretch p-6 bg-[#E2E2E2] rounded-tl-lg rounded-bl-[120px] flex-col justify-start items-center inline-flex">
      <div className="self-stretch grow shrink basis-0">
        <Form
          className="w-full justify-center items-center w-full space-y-4"
          validationBehavior="native"
          validationErrors={errors}
          onReset={() => setSubmitted(null)}
          onSubmit={onSubmit}
        >
          <div className="flex flex-col gap-4 max-w-md">
            <Input
              isRequired
              errorMessage={({validationDetails}) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your name";
                }

                return errors.name;
              }}
              label="Name"
              name="name"
              variant={"underlined"}
            />

            <Input
              isRequired
              errorMessage={({validationDetails}) => {
                if (validationDetails.valueMissing) {
                  return "Please enter your email";
                }
                if (validationDetails.typeMismatch) {
                  return "Please enter a valid email address";
                }
              }}
              label="Email"
              name="email"
              type="email"
              variant={"underlined"}
            />

            <Select
              isRequired
              label="Service"
              name="country"
              variant={"underlined"}
            >
              <SelectItem key="ar" value="ar">
                General Construction
              </SelectItem>
              <SelectItem key="us" value="us">
                Water Damage Restoration
              </SelectItem>
              <SelectItem key="ca" value="ca">
                Roofing
              </SelectItem>
            </Select>

            <Checkbox
              isRequired
              classNames={{
                label: "text-small",
              }}
              isInvalid={!!errors.terms}
              name="terms"
              validationBehavior="aria"
              value="true"
              onValueChange={() => setErrors((prev) => ({...prev, terms: undefined}))}
            >
              I agree to the terms and conditions
            </Checkbox>

            {errors.terms && <span className="text-danger text-small">{errors.terms}</span>}

            <div className="flex gap-4">
              <Button className="w-full" color="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>

          {submitted && (
            <div className="text-small text-default-500 mt-4">
              Submitted data: <pre>{JSON.stringify(submitted, null, 2)}</pre>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
