import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
    return (
        <div className='mx-auto'>
            <Navbar></Navbar>
            <div className='flex items-center'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;