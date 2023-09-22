import React from 'react'

const SmallHeading1: React.FC<{
    _text: string;
    title?:string;
}> = ({ _text,title }) => {
    return (
        <div className='flex flex-row'>
        <h5 className="font-SFpro font-semibold text-[18px] text-[#172B4D]">{_text}</h5>
        <h5 className='ml-1 font-SFpro text-[18px] text-[#172B4D]'>{title}</h5>
        </div>
    )
}

export default SmallHeading1


