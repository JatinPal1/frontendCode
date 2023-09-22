const UserCard = () => {
  return (
    <div className="mt-2 flex gap-3 items-center">
      <div className="h-[3.5rem] w-[3.5rem] rounded-md bg-gray-400"></div>
      <div className="font-SFpro">
        <h5 className=" text-sm font-semibold text-gray-500 text-wrap leading-none">
          Mayank Kashyap
        </h5>
        <p className="text-xs font-light text-gray-400">Creator</p>
      </div>
    </div>
  );
};

export default UserCard;
