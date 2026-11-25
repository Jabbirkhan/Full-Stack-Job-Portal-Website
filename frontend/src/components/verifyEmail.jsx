import React from 'react'
import { useContext } from 'react'
import { toast } from 'react-toastify';
import { useState } from 'react';
import { Context } from '../context/context.jsx';
import Loader from './loader.jsx';
import axiosInstance from '../utils/axiosInstance.js';

const VerifyEmail = () => {

    const { auth, navigate, fetchUserProfile } = useContext(Context);
    const [otp, setOtp] = useState('');

    const [loader, setLoader] = useState(false);

    const onSubmitHandler = async () => {
        try {
            if (auth.status !== 'authenticated' || auth.role !== 'user') {
                return navigate('/login');
            }

            setLoader(true);
            const response = await axiosInstance.post('/api/v1/user/verify-email-otp', { otp });
            if (response.data.success) {
                toast.success(response.data.message);
                fetchUserProfile();
                navigate('/');
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    if (loader) {
        return <Loader />
    }

    return (
        <div className="relative w-full min-h-screen flex justify-center items-center bg-[#f8fafc] px-4 py-10 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>

            {/* Verification Card */}
            <div className="relative w-full max-w-md bg-white border border-gray-100 rounded-3xl shadow-xl shadow-gray-200/60 p-7 sm:p-10">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="m3 7 8.2 5.5a1.5 1.5 0 0 0 1.6 0L21 7" />
                            <path d="m9 16 2 2 4-4" />
                        </svg>
                    </div>
                </div>

                {/* Heading */}
                <div className="text-center mb-8">
                    <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                        Verify Your Email
                    </h1>

                    <p className="text-sm text-gray-500 leading-relaxed mt-3">
                        Please check your inbox. We've sent you a verification code to confirm your email address.
                    </p>
                </div>

                {/* OTP Input */}
                <div className="flex flex-col gap-2 mb-6">
                    <label className="text-sm font-semibold text-gray-700">
                        Verification OTP
                    </label>

                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="19"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="3" y="4" width="18" height="16" rx="2" />
                            <path d="M7 8h.01M12 8h.01M17 8h.01M7 12h.01M12 12h.01M17 12h.01M7 16h.01M12 16h.01M17 16h.01" />
                        </svg>

                        <input
                            type="text"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value.trim())}
                            className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                            placeholder="Enter verification OTP"
                        />
                    </div>
                </div>

                {/* Verify Button */}
                <button
                    onClick={() => onSubmitHandler()}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/20"
                >
                    Verify Email

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                    </svg>
                </button>

                {/* Security Footer */}
                <div className="flex items-center justify-center gap-2 mt-7 pt-5 border-t border-gray-100 text-gray-400">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />
                        <path d="m9 12 2 2 4-4" />
                    </svg>

                    <span className="text-xs">
                        Your account security is our priority
                    </span>
                </div>

            </div>

        </div>
    )
}

export default VerifyEmail;