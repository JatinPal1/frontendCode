import { ButtonType1, FormField } from '../../../../components'
import { Form } from "formik";


const NameEmailPasswordForm = () => {
   
    return (
        <div className="mt-8 w-full">
           
                <Form>
                    <div className="flex flex-col gap-3">
                        <FormField
                            label="Full Name"
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="johndoe"
                            required={true}
                        />
                        <FormField
                            label="Email"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="johndoe@gmail.com"
                            required={true}
                        />
                        <FormField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <span className="text-xs ">Remember me</span>
                    <div className="flex flex-row gap-3 items-center">
                        <input type="checkbox" className="mt-1" />
                        <span className="text-sm">Stay sign in on this device</span>
                    </div>
                    <ButtonType1 text="Sign Up" style="sm:mt-[30px] mt-[1rem] p-3 rounded-sm" _type="submit"/>
                </Form>
           
        </div>
    );
};

export default NameEmailPasswordForm