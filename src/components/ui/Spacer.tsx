import React from 'react'

const Spacer: React.FC<{
    mt: number
}> = ({ mt }) => {
    return (
        <div style={{
            marginTop: mt + "rem"
        }}></div>
    )
}

export default Spacer