import React from "react";
import { SmallHeading1, Spacer, WisedLogo } from "../../../components";
import FormRedirectText from "./FormRedirectText";
import SocialButtons from "./SocialButtons";
import NameEmailPasswordForm from "./forms/NameEmailPasswordForm";
import useCustomNavigateHook from "../../../hooks/useCustomNavigateHook";
import { Formik } from "formik";
import { IAuthFormFields } from "../interfaces/IAuthFormFields";
import { registerUser } from "../services/registerService";
import { setCookie } from "../../../utils/cookiesHandler";
import { signUpValidationSchema } from "../validation_schema/SignupValidationSchema";

const initialValues:IAuthFormFields = {
  fullName:"",
  email: "",
  password: "",
};

const SignUpSection = () => {
  const {goToLogin} =  useCustomNavigateHook();
  
  const handleSubmit = async (values: IAuthFormFields) => {
    try {
      const response =  await registerUser(values);
      if (response?.data.token) {
        setCookie('token', response.token, { expires: 7, httpOnly: true });
      }
    } catch (error) {
      alert(error);
    }finally {
      values.password = ""
      values.email = ""
      values.fullName = ""
    }
  };

  return (
    <div className="flex flex-col items-center  h-full w-full justify-start p-4 overflow-scroll">
      <div className="w-full sm:my-auto sm:h-fit">
          <div className="mx-auto my-auto mt-16 flex w-full flex-col items-center">
            <WisedLogo _width={10} />
            <Spacer mt={2} />
            <SmallHeading1 _text={"Create New Account"} />
            <Spacer mt={2} />
            <div className="sm:w-[60%] w-[70%] mx-auto">
              <div className="sm:w-[60%] sm:mx-auto w-full text-[#172B4D]">
                <SocialButtons />
                <div className=" mx-auto mt-7 relative flex items-center justify-center">
                  <div className="h-[0.8px] bg-black absolute left-0 right-0 mt-[3px]"></div>
                  <p className="absolute bg-white px-2 py-1 text-xs font-SFpro font-normal">or continue with</p>
                </div>
              </div>
              <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={signUpValidationSchema}>
                  <NameEmailPasswordForm  />
              </Formik>
              <FormRedirectText infoText="Already have an account?" linkText="Sign in here" mt={1} _navigate={goToLogin} />
            </div>
          </div>
       </div>

    </div>
  );
};

export default React.memo(SignUpSection);
