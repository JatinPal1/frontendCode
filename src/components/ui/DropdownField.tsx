import React from "react";
import { Field } from "formik";

interface DropdownProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
}

const DropdownField: React.FC<DropdownProps> = ({ label, name, options }) => {
  return (
    <div className="col-span-1 flex flex-col">
      <label
        htmlFor={name}
        className="font-SFpro text-sm text-[#172B4D] font-semibold"
      >
        {label}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        className="rounded-[3px] p-2 mt-1 placeholder:text-sm bg-inputBackground text-black text-sm font-SFpro font-light"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            className="bg-inputBackground text-inputTextGray"
          >
            {option.label}
          </option>
        ))}
      </Field>
    </div>
  );
};

export default DropdownField;
