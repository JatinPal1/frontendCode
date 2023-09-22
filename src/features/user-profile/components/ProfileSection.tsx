import { UserCard } from "..";
import ProfileForm from "./ProfileForm";
const ProfileSection = () => {
  return (
    <div className="p-4 bg-[#FAFBFC]">
      <UserCard />
      <div className="p-8">
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfileSection;
