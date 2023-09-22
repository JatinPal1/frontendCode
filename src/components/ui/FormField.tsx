import React from 'react';
import { Field } from 'formik';
import { IFormFieldProps } from './interfaces/FormFieldInterface';
import { ErrorMessage } from 'formik';

const FormField: React.FC<IFormFieldProps> = ({
  label,
  id,
  name,
  type,
  placeholder,
  required,
  children,
}) => {
  return (
    <div className="relative col-span-1 flex flex-col">
      <label
        htmlFor={id}
        className="relative w-fit font-SFpro  text-sm text-[#172B4D]"
      >
        {label}
        {required && (
          <span className="absolute right-[-10px] top-[-2.5px] text-lg text-[#DA1E28]">
            *
          </span>
        )}
      </label>
      <Field
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        className="mt-2 rounded-[3px] border-[2px] border-[#DFE1E6] bg-inputBackground p-[10px] font-SFpro text-sm font-light text-black placeholder:text-sm placeholder:text-placeholderColor"
      />
      {children}
      <ErrorMessage
        name={name}
        component="div"
        className="text-sm text-red-600"
      />
    </div>
  );
};

export default FormField;
