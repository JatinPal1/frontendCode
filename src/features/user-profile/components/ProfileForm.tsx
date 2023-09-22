import React from "react";
import { Formik, Form } from "formik";
import { FormField, DropdownField } from "../../../components";
import {
  streamOptions,
  subjectOptions,
  passingYearOptions,
  countryOptions,
  preferredLanguageOptions,
} from '../data/profilesectionconsts'
import { ButtonType1 } from "../../../components";
import BioTextArea from "./BioTextArea";
import { FormValues } from "../interfaces/IFormValues";
import {FormFieldWithVerification} from "../../../components";

const initialValues: FormValues = {
  firstname: "",
  lastname: "",
  email: "",
  dob: "",
  phone: "",
  country: "",
  institute: "",
  stream: "",
  passingYear: "",
  subjectOfInterest: "",
  preferredLanguage: "",
  accessibilityRequirement: "",
};

const ProfileForm: React.FC = () => {
  const handleSubmit = (values: FormValues) => {
    // Handle form submission logic here
    console.log(values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className="">

        <BioTextArea />
        <span className="text-lg text-headingBlue mt-6 block">Personal Information</span>
        <div className="grid grid-cols-3 gap-x-16 gap-y-4 mt-8">
          <FormField
            label="First Name"
            id="firstname"
            name="firstname"
            type="text"
          />
          <FormField
            label="Last Name"
            id="lastname"
            name="lastname"
            type="text"
          />
          <FormFieldWithVerification label="Email" id="email" name="email" type="email" />
          <FormField label="Date of Birth" id="dob" name="dob" type="date" />
          <FormFieldWithVerification label="Phone" id="phone" name="phone" type="tel" />
          <DropdownField
            label="Country"
            name="country"
            options={countryOptions}
          />
          <FormField
            label="Institute"
            id="institute"
            name="institute"
            type="text"
          />
          <DropdownField label="Stream" name="stream" options={streamOptions} />
          <DropdownField
            label="Passing Year"
            name="passingYear"
            options={passingYearOptions}
          />
          <DropdownField
            label="Subject of Interest"
            name="subjectOfInterest"
            options={subjectOptions}
          />
          <DropdownField
            label="Preferred Language"
            name="preferredLanguage"
            options={preferredLanguageOptions}
          />
          <FormField
            label="Accessibility Requirement"
            id="accessibilityRequirement"
            name="accessibilityRequirement"
            type="text"
          />
        </div>
        <div className="w-[30%] mt-16">
          <ButtonType1
            text={"Save"}
            style={
              "bg-black text-white  font-medium text-xs px-4 py-2 hover:bg-opacity-70 rounded-md mt-4"
            }
          />
        </div>
      </Form>
    </Formik>
  );
};

export default ProfileForm;
