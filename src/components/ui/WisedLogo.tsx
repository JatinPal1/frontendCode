import { wisedLogo } from '../../assets'

const WisedLogo: React.FC<{
    _width: number
}> = ({ _width }) => {
    return (
        <div>
            <img src={wisedLogo} alt="logo" className={``} style={{
                width: _width + "rem"
            }} />
        </div>
    )
}

export default WisedLogo