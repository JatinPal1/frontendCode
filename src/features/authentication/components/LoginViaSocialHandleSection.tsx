import React from "react";
import { ButtonType1, SmallHeading1, Spacer, WisedLogo } from "../../../components";


const LoginViaSocialHandleSection = (props:any) => {
    return (
        <div className="flex flex-col items-center  h-full w-full justify-start p-4 overflow-scroll">
            <div className="w-full sm:my-auto sm:h-fit">
                <div className="mx-auto my-auto mt-16 flex w-full flex-col items-center">
                    <WisedLogo _width={10} />
                    <Spacer mt={10} />
                    <div className="sm:w-[60%] w-[70%] mx-auto">
                        <SmallHeading1 _text="Login as " title={props.username}/>
                        <ButtonType1 text="Log In" style="sm:mt-[30px] mt-[1rem] p-3 rounded-sm"/>
                        <span className="text-xs ">Remember me</span>
                        <div className="flex flex-row gap-3 items-center">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">Always sign in on this device </span>
                        </div>
                        <div className="gap-2 justify-center items-center flex flex-col mt-6">
                            <span className="text-sm">Not {props.username}?</span>
                            <span className="text-xs text-[#009A57] cursor-pointer underline">Login with another account</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo(LoginViaSocialHandleSection);