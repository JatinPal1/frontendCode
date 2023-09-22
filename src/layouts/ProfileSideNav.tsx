import { UserCard, Navlinks } from "../features/user-profile";

const ProfileSideNav = () => {
    return (
        <div className="p-2">
            <UserCard />
            <Navlinks />
        </div>
    );
};

export default ProfileSideNav;
