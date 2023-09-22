import axios from "axios";

const googleAuthService = async (accessToken: string) => {
    try {
      const response = await axios.get("https://www.googleapis.com/oauth2/v1/userinfo", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.data;
    } catch (error) {
      throw error;
    }
};
export default googleAuthService;