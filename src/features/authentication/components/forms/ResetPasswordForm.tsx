import  { useState } from "react";
import { ButtonType1, FormField } from "../../../../components";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import resetPasswordService from "../../services/resetPasswordService";
import { useLocation } from "react-router-dom";
import { IAuthFormFields } from "../../interfaces/IAuthFormFields";

const ResetPasswordForm = () => {
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    specialCharacter: false,
    number: false,
  });

  const validatePassword = (password:string) => {
    
    const newPasswordStrength = {
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      specialCharacter: /[^A-Za-z0-9]/.test(password),
      number: /\d/.test(password),
    };
    if (password.length === 0) {
        newPasswordStrength.uppercase = false;
    }
  
    setPasswordStrength(newPasswordStrength);
  };

  // Define the validation schema using Yup
  const validationSchema = Yup.object({
    password: Yup.string()
      .required("Password is required")
      .test("password-strength", "Password does not meet all criteria", (value) => {
        validatePassword(value);
        return Object.values(passwordStrength).every((condition) => condition);
      }),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ''], "Passwords must match")
      .required("Confirm Password is required"),
  });

  //Getting token for params for reset password
  const location = useLocation();
  const token = location.search.split('=')[1];

  // Handle form submission
  const handleSubmit = async (values: IAuthFormFields): Promise<void> => {

    try {

      const { message } = await resetPasswordService(values, token);

      alert(message);

    } catch (err: any) {

      alert(err.message);

    } finally {

      values.confirmPassword = ''

    }

  };

  return (
    <div className="mt-8 w-full">
      <Formik
        initialValues={{
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
          <Form>
            <div className="flex flex-col gap-3">
              <FormField
                label="Password"
                id="password"
                name="password"
                type="password"
                placeholder="Create a new password"
                required={true}
              />
              <ErrorMessage name="password" component="div" className="text-red-500" />
              <FormField
                label="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="Re-type new password"
                required={true}
              />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
            </div>
            <ButtonType1
              _type="submit"
              text="Reset"
              style="sm:mt-[30px] mt-[1rem] p-3 rounded-sm"
            />
          </Form>
        
      </Formik>
      <div className="mt-4">
        <h4>Password Strength:</h4>
        <ul>
          <li>
          At least 8 characters {passwordStrength.length ? "✅" : "❌"} 
          </li>
          <li>
            At least one uppercase letter {passwordStrength.uppercase ? "✅" : "❌"}
          </li>
          <li>
            At least one special character {passwordStrength.specialCharacter ? "✅" : "❌"}
          </li>
          <li>
            At least one number {passwordStrength.number ? "✅" : "❌"}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResetPasswordForm;