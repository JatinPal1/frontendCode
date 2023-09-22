import { FormField } from ".."
import VerifiedShieldSvg from "../svg/VerifiedShieldSvg";
import NotVerifiedShieldSvg from "../svg/NotVerifiedShieldSvg";
import { IFormFieldProps } from "./interfaces/FormFieldInterface"

const isVerified = Math.floor(Math.random() * (50 - 10 + 1)) + 10 > 30 ? true : false;
const FormFieldWithVerification: React.FC<IFormFieldProps> = ({ label,
    id,
    name,
    type,
    placeholder,
}) => {
    return (
        <FormField label={label}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}>
            <div className="absolute top-4 right-[-6px]">
               {
                isVerified ? <VerifiedShieldSvg/> : <NotVerifiedShieldSvg/>
               }
            </div>
        </FormField>
    )
}

export default FormFieldWithVerification