import { createBrowserRouter, Outlet } from "react-router-dom";
// import Navbar from "../../layouts/Navbar";
import { Signup, OTPpage, Profile, Login } from "../../pages";
import { ProfileSection, AcademicSection, PaymentSection } from "../../features/user-profile";
import LoginViaSocialHandlePage from "../../pages/LoginViaSocialHandlePage";
import GetStarted from "../../pages/GetStarted";
import Feed from "../../pages/Feed";
import Forget from "../../pages/ForgetPasswordPage";
import Reset from "../../pages/ResetPasswordPage";

const AppLayout = () => {
    return (
        <div className="w-screen h-screen">
            {/* <Navbar /> */}
            <Outlet />
        </div>
    );
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        // errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Signup />,
            },
            {
                path: "/verify",
                element: <OTPpage />,
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: "/redirect",
                element: <LoginViaSocialHandlePage />,
            },
            {
                path: "/forget",
                element: <Forget />,
            },
            {
                path: "/reset",
                element: <Reset />,
            },
            {
                path: "/getStarted",
                element: <GetStarted />,
            },
            {
                path: "/feed",
                element: <Feed />,
            },
            {
                path: "/details",
                element: <Profile />,
                children: [
                    {
                        path: "/details",
                        element: <ProfileSection />,
                    },
                    {
                        path: "/details/academic",
                        element: <AcademicSection />,
                    },
                    {
                        path: "/details/payment",
                        element: <PaymentSection />,
                    },
                ],
            },
        ],
    },
]);
