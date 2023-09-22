import React from 'react';

const ButtonType1: React.FC<{
  text: string;
  style: string;
  _clickFunction?: () => void;
  _type?: 'button' | 'submit';
}> = ({ text, style, _clickFunction, _type }) => {
  return (
    <button
      className={`${style} w-full bg-[#000000] text-white`}
      onClick={_clickFunction}
      type={_type}
    >
      {text}
    </button>
  );
};

export default ButtonType1;
