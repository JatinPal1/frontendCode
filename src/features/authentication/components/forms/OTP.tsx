
import { ButtonType1, Heading1, OtpForm } from '../../../../components'

const OTP = () => {
    return (
        <div className="w-[55%] h-full flex flex-col justify-center font-SFpro">
            <div className="w-[60%] mx-auto">
                <Heading1 text="Please Enter OTP" />
                <OtpForm onSubmit={() => { }} />
                <p className="text-sm text-[#DD9200] font-light mt-4">
                    We have sent OTP to your email
                </p>
                <ButtonType1
                    text={"Verify"}
                    style={
                        "bg-black text-white font-medium text-xs px-4 py-2 hover:bg-opacity-70 rounded-md mt-4"
                    }
                />
                <div className="mt-2 flex flex-col gap-1">
                    <p className="text-sm text-headingBlue">
                        Already a User
                        <span className="underline text-linkGreen cursor-pointer hover:text-opacity-80 ml-1">
                            Login Here
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OTP;
