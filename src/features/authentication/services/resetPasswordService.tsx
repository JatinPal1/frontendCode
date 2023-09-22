import axios from "axios"
import { apiBaseUrl } from "../../../config/baseUrl"
import { IAuthFormFields } from "../interfaces/IAuthFormFields"
import { StatusCode } from "../../../config/statusCode";

const resetPasswordService = async ( values:IAuthFormFields, token:string) => {
  try {
    const response =  await axios.post(`${apiBaseUrl}/api/v1/auth/password/reset-password?token=${token}`, 
    {
      newPassword: values.confirmPassword,
    },
    );
    if (response?.status==StatusCode.HTTP_STATUS_OK && response?.data.success) {
     return response.data;
    }
    throw new Error(response.data);
  } catch (error) {
    return error
  }
}

export default resetPasswordService