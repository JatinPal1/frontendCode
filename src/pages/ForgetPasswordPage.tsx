import { SideImageBox } from '../features/authentication'
import ForgetPasswordSection from '../features/authentication/components/ForgetPasswordSection'

const  Forget = () => {
    return (
        <div className="w-screen h-screen sm:flex">
            <SideImageBox />
            <ForgetPasswordSection />
        </div>
    )
}

export default Forget