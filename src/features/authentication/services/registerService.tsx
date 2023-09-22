import axios from 'axios';
import { IAuthFormFields } from '../interfaces/IAuthFormFields';
import { apiBaseUrl } from '../../../config/baseUrl';
import { StatusCode } from '../../../config/statusCode';

export const registerUser = async (values: IAuthFormFields) => {
  try {
    const response = await axios.post(`${apiBaseUrl}/v1/auth/register`, values);
    if (response?.status === StatusCode.HTTP_STATUS_CREATED) {
      return response.data;
    }
    throw new Error(response.data);
  } catch (err) {
    return err;
  }
};
