import { useNavigate } from "react-router-dom"

const useCustomNavigateHook = () => {
  const navigate =  useNavigate();
  
  const goToHome = ()=>{
     navigate('/');
  };

  const goBack = ()=>{
    navigate(-1);
  };

  const goToLogin = ()=>{
    navigate('/login');
  };

  const goToSignup = ()=>{
     navigate('/');
  };
 
  const goToForget = ()=>{
     navigate('/forget');
  };
  const goToRoute = (routePath: string) => {
    navigate(routePath);
  };
  
  return {
    goToHome,
    goBack,
    goToLogin,
    goToSignup,
    goToForget,
    goToRoute
  }
}

export default useCustomNavigateHook