import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { BookOpen, Sparkles, Upload } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { createUser, updateUserProfile } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleRegister = (data) => {
        console.log(data);

        createUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);

                // update profile
                updateUserProfile({
                    displayName: data.name,
                    photoURL: data.photo,
                })
                    .then(() => {
                        navigate(location?.state || '/');
                    })
                    .catch((error) => {
                        console.log(error.message);
                    });
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-6xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

                {/* Left Side */}
                <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-sky-500 to-emerald-500 p-12 text-white relative overflow-hidden">

                    <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

                    <div className="relative z-10">

                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-white/20 p-3 rounded-2xl">
                                <BookOpen size={32} />
                            </div>

                            <h2 className="text-4xl font-bold">
                                InsightNest
                            </h2>
                        </div>

                        <p className="text-lg leading-relaxed text-white/90 mb-8">
                            Join a growing community where people preserve meaningful
                            experiences, life wisdom, and personal growth stories.
                        </p>

                        <div className="space-y-4">

                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Create and share valuable life lessons</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Save your favorite insights forever</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Unlock premium reflections and experiences</p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-6 md:p-10">

                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-3">
                                Create Account
                            </h2>

                            <p className="text-gray-500">
                                Start your journey of reflection and growth ✨
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(handleRegister)}
                            className="space-y-5"
                        >

                            {/* Name */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    placeholder="Enter your full name"
                                    {...register('name', {
                                        required: 'Name is required',
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />

                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Photo URL
                                </label>

                                <div className="relative">
                                    <Upload
                                        size={18}
                                        className="absolute left-4 top-4 text-gray-400"
                                    />

                                    <input
                                        type="text"
                                        placeholder="Paste your photo URL"
                                        // {...register('photo', {
                                        //     required: 'Photo URL is required',
                                        // })}
                                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                    />
                                </div>

                                {errors.photo && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.photo.message}
                                    </p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    {...register('email', {
                                        required: 'Email is required',
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-400"
                                />

                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block mb-2 font-medium text-gray-700">
                                    Password
                                </label>

                                <input
                                    type="password"
                                    placeholder="Create a strong password"
                                    {...register('password', {
                                        required: 'Password is required',
                                        minLength: {
                                            value: 6,
                                            message:
                                                'Password must be at least 6 characters',
                                        },
                                        pattern: {
                                            value:
                                                /^(?=.*[a-z])(?=.*[A-Z]).+$/,
                                            message:
                                                'Password must contain uppercase & lowercase letters',
                                        },
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
                            >
                                Create Account
                            </button>
                        </form>

                        {/* Divider */}
                        <div className="flex items-center gap-3 my-6">
                            <div className="flex-1 h-px bg-gray-300"></div>
                            <p className="text-sm text-gray-500">OR</p>
                            <div className="flex-1 h-px bg-gray-300"></div>
                        </div>

                        {/* Social Login */}
                        <SocialLogin />

                        {/* Login */}
                        <p className="text-center text-gray-600 mt-6">
                            Already have an account?{' '}
                            <Link
                                to="/auth/login"
                                state={location.state}
                                className="text-sky-600 font-semibold hover:underline"
                            >
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
