import React from "react";

const SideImageBox = () => {
    return (
      <div className="w-full sm:flex hidden h-full">
        <div className="h-full w-full bg-[#202020] bg-opacity-20"></div>
      </div>
    );
  };
  
  export default React.memo(SideImageBox);
  