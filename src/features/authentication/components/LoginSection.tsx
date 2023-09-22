import React from "react";
import { SmallHeading1, Spacer, WisedLogo } from "../../../components";
import FormRedirectText from "./FormRedirectText";
import SocialButtons from "./SocialButtons";
import EmailPasswordForm from "./forms/EmailPasswordForm";
import useCustomNavigateHook from "../../../hooks/useCustomNavigateHook";
import { Formik } from "formik";
import { logInValidationSchema } from "../validation_schema/LoginValidation";
import { IAuthFormFields } from "../interfaces/IAuthFormFields";
import loginService from "../services/loginService";
import { setCookie } from "../../../utils/cookiesHandler";

const initialValues:IAuthFormFields = {
    email: "",
    password: "",
};

const LoginSection = () => {
    const {goToSignup, goToForget} = useCustomNavigateHook();

    const handleSubmit = async (values: IAuthFormFields) => {
        try {
            values.password = values.password?.trim();
            values.email = values.email?.trim();
            console.log(values)
            const response = await loginService(values);
            if (response?.data.token) {
              setCookie('token', response.data.token, { expires: 7, httpOnly: true });
            }
          } catch (err) {
            //Any kind of Error toast or something
            alert('There is Some Error');
          }finally {
            values.password = ""
            values.email = ""
          }
    };

    return (
        <div className="flex flex-col items-center  h-full w-full justify-start p-4 overflow-scroll">
            <div className="w-full sm:my-auto sm:h-fit">
                <div className="mx-auto my-auto mt-16 flex w-full flex-col items-center">
                    <WisedLogo _width={10} />
                    <Spacer mt={2} />
                    <SmallHeading1 _text={"Welcome Back!"} />
                    <Spacer mt={2} />
                    <div className="sm:w-[60%] w-[70%] mx-auto">
                        <div className="sm:w-[60%] sm:mx-auto w-full">
                            <SocialButtons/>
                            <div className=" mx-auto mt-7 relative flex items-center justify-center">
                                <div className="h-[0.8px] bg-black absolute left-0 right-0 mt-1"></div>
                                <p className="absolute bg-white px-4 py-2 text-xs font-SFpro font-normal">or continue with</p>
                            </div>
                        </div>
                        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={logInValidationSchema}>
                            <EmailPasswordForm />
                        </Formik>
                        <FormRedirectText infoText="No account?" linkText="Create one" mt={1} _navigate={goToSignup}/>
                        <FormRedirectText linkText="Forget Password?" _navigate={goToForget}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LoginSection);