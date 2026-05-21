import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../hooks/useAuth';


const SocialLogin = () => {

    const { signInGoogle } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleGoogleLogin = () => {

        signInGoogle()
            .then((result) => {
                console.log(result.user);

                navigate(location?.state || '/');
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="w-full">

            <button
                onClick={handleGoogleLogin}
                className="
                    w-full
                    flex
                    items-center
                    justify-center
                    gap-3
                    border
                    border-gray-300
                    bg-white
                    hover:bg-gray-50
                    py-3
                    rounded-xl
                    font-medium
                    text-gray-700
                    transition
                    duration-300
                    shadow-sm
                    hover:shadow-md
                "
            >
                <FcGoogle size={24} />

                <span>
                    Continue with Google
                </span>
            </button>

        </div>
    );
};

export default SocialLogin;
