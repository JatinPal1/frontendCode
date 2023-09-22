import React from 'react'

const FormRedirectText: React.FC<{
    infoText?: string,
    linkText?: string,
    mt?: number,
    _navigate? :()=> void,
}> = ({ infoText, linkText, mt, _navigate }) => {
    return (
        <p className='text-sm' style={{ marginTop: mt + "rem" }}>{infoText} <span className='text-sm text-[#009A57] underline cursor-pointer' onClick={_navigate}>{linkText}</span></p>
    )
}

export default React.memo(FormRedirectText)