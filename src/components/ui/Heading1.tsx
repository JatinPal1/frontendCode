import React from "react";

const Heading1: React.FC<{
  text: string;
}> = ({ text }) => {
  return (
    <h3 className="font-SFpro text-3xl font-bold text-headingBlue">{text}</h3>
  );
};

export default Heading1;
