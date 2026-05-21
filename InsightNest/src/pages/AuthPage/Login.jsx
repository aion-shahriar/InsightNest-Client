import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { BookOpen, Sparkles } from 'lucide-react';
import useAuth from '../../hooks/useAuth';
import SocialLogin from './SocialLogin';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signInUser } = useAuth();

    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = (data) => {
        signInUser(data.email, data.password)
            .then((result) => {
                console.log(result.user);

                const from = location?.state || '/';

                navigate(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-100 via-cyan-50 to-emerald-100 flex items-center justify-center px-4 py-10">

            <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

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
                            Preserve your wisdom, share your experiences,
                            and grow through meaningful life lessons from people around the world.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Create and organize personal lessons</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Explore public wisdom from the community</p>
                            </div>

                            <div className="flex items-center gap-3">
                                <Sparkles size={20} />
                                <p>Unlock premium insights and reflections</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="flex items-center justify-center p-6 md:p-10">

                    <div className="w-full max-w-md">

                        <div className="text-center mb-8">
                            <h2 className="text-4xl font-bold text-gray-800 mb-3">
                                Welcome Back
                            </h2>

                            <p className="text-gray-500">
                                Login to continue your journey of growth ✨
                            </p>
                        </div>

                        <form
                            onSubmit={handleSubmit(handleLogin)}
                            className="space-y-5"
                        >

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
                                    placeholder="Enter your password"
                                    {...register('password', {
                                        required: 'Password is required',
                                    })}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                />

                                {errors.password && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            {/* Forgot Password */}
                            <div className="text-right">
                                <a
                                    href="#"
                                    className="text-sm text-sky-600 hover:underline"
                                >
                                    Forgot Password?
                                </a>
                            </div>

                            {/* Login Button */}
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-3 rounded-xl font-semibold hover:scale-[1.02] transition duration-300 shadow-lg"
                            >
                                Login
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

                        {/* Register */}
                        <p className="text-center text-gray-600 mt-6">
                            New to the platform?{' '}
                            <Link
                                to="/auth/register"
                                state={location.state}
                                className="text-sky-600 font-semibold hover:underline"
                            >
                                Create an Account
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
