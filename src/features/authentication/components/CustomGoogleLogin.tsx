import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { google } from "../../../assets";
import googleAuthService from "../services/googleAuthService";


const googleClientId = "310995628483-7uc30i8rq2j8050lavecl2qamogeg0bh.apps.googleusercontent.com";

const GoogleLoginComponent = () => {
  const googleLogin = useGoogleLogin({
    flow: 'implicit',
    onSuccess: async (tokenResponse: any) => {
      try {
        // Obtain the access token from tokenResponse
        const accessToken = tokenResponse.access_token;

        // Fetch user data using the access token
        const userData = await googleAuthService(accessToken);
        console.log(userData);
      } catch (err) {
        console.log(err);
      }
    },
    onError: (errorResponse: any) => console.log(errorResponse),
  });

  return (
    <div className='border-[1px] border-[#DFE1E6] px-5 py-2 rounded-md shadow-sm cursor-pointer' onClick={() => googleLogin()}>
      <img src={google} alt="Google" />
    </div>
  );
};

const CustomGoogleLogin = () => {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <GoogleLoginComponent />
    </GoogleOAuthProvider>  
  );
};

export default CustomGoogleLogin;
