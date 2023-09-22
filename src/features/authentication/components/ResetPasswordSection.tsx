import React from "react";
import { SmallHeading1, Spacer, WisedLogo } from "../../../components";
import ResetPasswordForm from "./forms/ResetPasswordForm";


const ResetPasswordSection = () => {
   
    
    return (
        <div className="flex flex-col items-center  h-full w-full justify-start p-4 overflow-scroll">
            <div className="w-full  sm:my-auto sm:h-fit">
                <div className="mx-auto my-auto mt-16 sm:mt-0 flex w-full flex-col items-center">
                    <WisedLogo _width={10} />
                    <Spacer mt={2} />
                    <SmallHeading1 _text={"Reset Password"} />
                    <Spacer mt={1} />
                    <div className="sm:w-[60%] w-[70%] mx-auto">
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(ResetPasswordSection);