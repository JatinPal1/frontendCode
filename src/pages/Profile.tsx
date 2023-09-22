import { Outlet } from "react-router-dom";
import { ProfileSideNav } from "../layouts";

const Profile = () => {
    return (
        <div className="flex h-[calc(100vh_-_4rem)]">
            <div className="w-[20%] h-full overflow-hidden bg-[#FAFBFC]">
                <ProfileSideNav />
            </div>
            <div className="w-[80%] p-2 font-SFpro overflow-scroll h-full">
                <Outlet />
            </div>
        </div>
    );
};

export default Profile;
