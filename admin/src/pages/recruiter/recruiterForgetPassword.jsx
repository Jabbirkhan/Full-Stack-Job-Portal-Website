import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { Context } from '../../context/context.jsx';
import axiosInstance from '../../utils/axiosInstance.js';
import Loader from '../../components/loader.jsx';

const RecruiterForgetPassword = () => {

    const { navigate } = useContext(Context);

    const [step, setStep] = useState(1);

    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const [loader, setLoader] = useState(false);

    const sendResetOtp = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/recruiter/send-reset-password-otp', {email});
            if (response.data.success) {
                toast.success(response.data.message);
                setStep(2);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    const verifyResetOtp = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/recruiter/verify-reset-password-otp', { email, otp });
            if (response.data.success) {
                toast.success(response.data.message);
                setStep(3);
            }
        } catch (error) {
            toast.error(error.response?.data?.message);
        } finally {
            setLoader(false);
        }
    }

    const resetPassword = async () => {
        try {
            setLoader(true);
            const response = await axiosInstance.post('/api/v1/recruiter/reset-password', { email, otp, newPassword });
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/recruiter-login');
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
        <div className="relative min-h-screen w-full bg-[#f8fafc] flex items-center justify-center px-4 py-10 overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-100/60 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative w-full max-w-lg">

                {/* Main Card */}
                <div className="bg-white border border-gray-100 shadow-xl shadow-gray-200/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10">

                    {/* Header */}
                    <div className="text-center mb-9">

                        <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="30"
                                height="30"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                <path d="M12 15v3" />
                            </svg>
                        </div>

                        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                            Reset Your Password
                        </h1>

                        <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                            Follow the steps below to securely reset your recruiter account password.
                        </p>

                    </div>

                    {/* Progress Steps */}
                    <div className="flex items-center justify-between mb-10 px-1">

                        {[1, 2, 3].map((item, index) => (
                            <div key={item} className="contents">

                                <div className="flex flex-col items-center gap-2">

                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                        step >= item
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-200'
                                            : 'bg-gray-100 text-gray-400 border border-gray-200'
                                    }`}>
                                        {step > item ? (
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="18"
                                                height="18"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            >
                                                <path d="m5 12 4 4L19 6" />
                                            </svg>
                                        ) : (
                                            `0${item}`
                                        )}
                                    </div>

                                    <span className={`text-xs font-medium ${
                                        step >= item ? 'text-blue-600' : 'text-gray-400'
                                    }`}>
                                        {item === 1 ? 'Email' : item === 2 ? 'Verify' : 'Reset'}
                                    </span>

                                </div>

                                {index !== 2 && (
                                    <div className={`h-1 flex-1 mx-3 mb-6 rounded-full transition-all duration-300 ${
                                        step > item ? 'bg-blue-500' : 'bg-gray-200'
                                    }`}></div>
                                )}

                            </div>
                        ))}

                    </div>

                    {/* Step Content */}
                    <div className="min-h-52.5 flex flex-col justify-center">

                        {step === 1 && (
                            <div className="flex flex-col gap-5">

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        Forgot your password?
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        Enter the email address associated with your recruiter account. We'll send you a verification code.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Email Address
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
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>

                                        <input
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value.trim())}
                                            value={email}
                                            className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                            placeholder="Enter your email"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={() => sendResetOtp()}
                                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    Send Email
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

                            </div>
                        )}

                        {step === 2 && (
                            <div className="flex flex-col gap-5">

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        Verify Your Email
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        Enter the verification code sent to your registered email address.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        Verification Code
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
                                            onChange={(e) => setOtp(e.target.value.trim())}
                                            value={otp}
                                            className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                            placeholder="Enter OTP"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={() => verifyResetOtp()}
                                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    Verify Code
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

                            </div>
                        )}

                        {step === 3 && (
                            <div className="flex flex-col gap-5">

                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">
                                        Create New Password
                                    </h2>
                                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                                        Enter your new password below to regain access to your recruiter account.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">
                                        New Password
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
                                            <rect x="3" y="11" width="18" height="11" rx="2" />
                                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                        </svg>

                                        <input
                                            type="text"
                                            onChange={(e) => setNewPassword(e.target.value.trim())}
                                            value={newPassword}
                                            className="w-full border border-gray-200 bg-gray-50 rounded-xl pl-12 pr-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"
                                            placeholder="Enter new password"
                                        />
                                    </div>
                                </div>

                                <button
                                    onClick={() => resetPassword()}
                                    className="w-full px-4 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 cursor-pointer shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
                                >
                                    Reset Password
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

                            </div>
                        )}

                    </div>

                    {/* Footer */}
                    <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-center gap-2 text-gray-400">
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
                            Your recruiter account security is our priority
                        </span>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default RecruiterForgetPassword
