import { ButtonType1, FormField } from '../../../../components'
import { Form } from "formik";



const EmailForm = () => {
   
    
    return (
        <div className="mt-8 w-full">
                <Form>
                    <div className="flex flex-col gap-3">
                        <FormField
                            label="Email/ Phone/ Username"
                            id="email"
                            name="email"
                            type="text"
                            placeholder="johndoe@gmail.com"
                            required={true}
                        />
                    </div>
                    <ButtonType1 text="Send Link" style="sm:mt-[30px] mt-[1rem] p-3 rounded-sm" _type="submit"/>
                </Form>
        </div>
    );
};

export default EmailForm