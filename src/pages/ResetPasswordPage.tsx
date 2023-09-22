import { SideImageBox } from '../features/authentication'
import ResetPasswordSection from '../features/authentication/components/ResetPasswordSection'

const Reset = () => {
    return (
        <div className="w-screen h-screen sm:flex">
            <SideImageBox />
            <ResetPasswordSection />
        </div>
    )
}

export default Reset