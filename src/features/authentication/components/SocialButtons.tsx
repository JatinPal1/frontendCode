import React from 'react'
import { socialIconsList } from '../data/socialiconslist'
import { ISocialIcons } from '../interfaces/ISocialIcons'
import CustomGoogleLogin from './CustomGoogleLogin'
// import CustomGoogleLogin from './CustomGoogleLogin'


const SocialButton: React.FC<ISocialIcons> = ({ image, altText }) => {
    return (
        <div className='border-[1px] border-[#DFE1E6] px-5 py-2 rounded-md shadow-sm cursor-pointer'>
            <img src={image} alt={`${altText}`} />
        </div>
    )
}

const SocialButtons = () => {
    return (
        <div className='flex mx-auto items-center justify-between gap-x-5'>
            {
                socialIconsList.map((icon, index) => (
                    <>
                    {(index === 0)?<CustomGoogleLogin />:<SocialButton key={index} {...icon} />}
                    </>
                    
                ))
            }
        </div>
    )
}

export default React.memo(SocialButtons)