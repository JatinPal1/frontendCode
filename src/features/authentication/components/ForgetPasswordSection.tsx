import React from "react";
import { SmallHeading1, Spacer, WisedLogo } from "../../../components";
import { Formik } from "formik";
import EmailForm from "./forms/EmailForm";
import { IAuthFormFields } from "../interfaces/IAuthFormFields";
import FormRedirectText from "./FormRedirectText";
import useCustomNavigateHook from "../../../hooks/useCustomNavigateHook";
import { forgetPasswordValidationSchema } from "../validation_schema/ForgetPasswordValidation";
import forgetPasswordService from "../services/forgetPasswordService";



const initialValues:IAuthFormFields = {
    email: '',
};

const ForgetPasswordSection = () => {
    const {goToLogin} = useCustomNavigateHook();
    const handleSubmit =  async (values: IAuthFormFields) => {
       try {
          values.email = values.email?.trim();
          const response = await forgetPasswordService(values);
          alert('Sucessfully sent to your mail');
          console.log(response);
       } catch (error) {

        alert('There is Some Error');
       
        }
        finally{
            values.email="";
        }
    console.log('forget')
    };

    return (
        <div className="flex flex-col items-center  h-full w-full justify-start p-4 overflow-scroll">
            <div className="w-full sm:my-auto sm:h-fit">
                <div className="mx-auto my-auto mt-14 sm:mt-0 flex w-full flex-col items-center">
                    <WisedLogo _width={10} />
                    <Spacer mt={2} />
                    <SmallHeading1 _text={"Forget Your Password?"} />
                    <Spacer mt={1} />
                    <div className="sm:w-[60%] w-[70%] mx-auto">      
                        <p className="ml-[9%] sm:ml-[7%] sm:mr-[16%] text-[#172B4D] opacity-50 text-[14px]">Enter your email, phone or username and we’ll send you a link to reset your password.</p>
                        <Spacer mt={3} />
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validation={forgetPasswordValidationSchema}>
                            <EmailForm/>
                        </Formik>
                        <FormRedirectText infoText="Go Back to" linkText="Log In" mt={1} _navigate={goToLogin}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ForgetPasswordSection);