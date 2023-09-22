import axios from "axios"
import { apiBaseUrl } from "../../../config/baseUrl"
import { IAuthFormFields } from "../interfaces/IAuthFormFields"
import { StatusCode } from "../../../config/statusCode";

const loginService = async ( values:IAuthFormFields ) => {
  try {
    const response =  await axios.post(`${apiBaseUrl}/v1/auth/authenticate`, values);
    if (response?.status==StatusCode.HTTP_STATUS_OK) {
     return response.data;
    }
    throw new Error(response.data);
  } catch (error) {
    return error
  }
}

export default loginService