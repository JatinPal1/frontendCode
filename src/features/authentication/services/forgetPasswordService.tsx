import axios from "axios"
import { apiBaseUrl } from "../../../config/baseUrl"
import { IAuthFormFields } from "../interfaces/IAuthFormFields"
import { StatusCode } from "../../../config/statusCode";

const forgetPasswordService = async ( values:IAuthFormFields ) => {
  try {
    const response =  await axios.post(`${apiBaseUrl}/api/v1/auth/password/forgot-password`, values);
    if (response?.status==StatusCode.HTTP_STATUS_OK) {
     return response.data;
    }
    throw new Error(response.data);
  } catch (error) {
    return error
  }
}

export default forgetPasswordService