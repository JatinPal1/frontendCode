import { puck } from "../assets/icons";
import { ImageIcon, SmallHeading1 } from "../components";
import BottomNavbar from "../layouts/BottomNavbar";
import Navbar from "../layouts/Navbar";

const GetStarted = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
        <div className="w-screen h-screen flex shadow-md">
            <div className="w-[15%] bg-[#f1f3f5] hidden sm:block" />
            <div className="w-full sm:w-[85%]">
                <div className="my-5 mx-3 bg-[#202020BF] p-2 font-SFpro font-semibold text-white rounded-sm gap-4 flex flex-row sm:flex-row">  
                  <div className="justify-start m-2">
                    <ImageIcon url={puck} wt="24" ht="24" />
                  </div>
                  <div className="w-full sm:w-full flex flex-col sm:flex-row">
                      <div className="w-full flex flex-col gap-1 sm:gap-1 sm:w-full sm:flex-col">
                          <SmallHeading1 _text="Set-up your profile to start uploading" />
                          <div className="text-xs text-white font-SFpro">
                              Fill in the details and get started now!
                          </div>
                      </div>
                      <div className="sm:w-[18%] mt-2 mb-3 mr-4 pr-3 p-2 w-auto h-auto bg-[#eeeeee] text-center text-sm text-[#202020] font-SFpro rounded-sm justify-center hover:bg-gray-200 cursor-pointer hover:text-gray-800">
                          Get Started
                      </div>
                  </div>
                </div>
            </div>
       </div>
      <BottomNavbar />
    </div>
  );
};

export default GetStarted;
