import { SideImageBox } from '../features/authentication'
import LoginViaSocialHandleSection from '../features/authentication/components/LoginViaSocialHandleSection'

const LoginViaSocialHandlePage = () => {
    return (
        <div className="w-screen h-screen sm:flex">
            <SideImageBox />
            <LoginViaSocialHandleSection username="jayati@wisedinc.com"/>
        </div>
    )
}

export default LoginViaSocialHandlePage