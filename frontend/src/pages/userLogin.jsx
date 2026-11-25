import React, { useState, useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { Context } from "../context/context.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import Loader from "../components/loader.jsx";
import { assets } from "../assets/assets.js";
import { Link } from "react-router-dom";

const UserLogin = () => {

  const { backendUrl, navigate, setAuth } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState("Login");
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const googleAuth = () => {
    window.location.href = `${backendUrl}/api/v1/user/google`;
  }

  const githubAuth = () => {
    window.location.href = `${backendUrl}/api/v1/user/github`;
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        setLoading(true);
        const response = await axiosInstance.post(`/api/v1/user/login`, { email, password });
        if (response.data.success) {
          setAuth({
            status: 'authenticated',
            role: response.data.role
          });
          toast.success(response.data.message || "Login successful");
          navigate('/');
        }
      } else {
        if (!privacyChecked) {
          toast.error("Please agree to the Privacy Policy and Terms of Service");
          return;
        }
        setLoading(true);
        const response = await axiosInstance.post(`/api/v1/user/register`, { name, email, password });
        if (response.data.success) {
          toast.success(response.data.message || "Registration successful");
          setState("Login");
        }
      }

    } catch (error) {
      toast.error(error.response?.data?.message || "Authentication failed");
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <Loader />

  return (
    <div className="w-full min-h-screen grid grid-cols-1 sm:grid-cols-2 bg-white">

      <div className="w-full h-screen relative z-0">
        <img src={assets.registration} className="w-full h-full object-cover inset-0 z-10" alt="" />
        <div className="absolute bg-blue-500/50 inset-0 z-30">
        </div>
        <div className="absolute w-full bottom-20 p-5 z-40">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-white">
            Your next big <span className="text-[#6cf8bb] ">carear <br /> leep</span> starts here.
          </h2>
          <p className="text-white text-sm mt-5 max-w-sm">
            Join over 50,000+ professionals building their dream careers with curated opportunities and expert insights.
          </p>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="w-full max-w-lg p-4">

          <div className="text-left">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {state === "Login" ? "Welcome Back!" : "Create an Account"}
            </h1>
          </div>

          {/* Social Buttons */}
          <div className="mt-6 space-y-3">
            <button onClick={googleAuth} className="w-full flex items-center justify-center gap-5 border border-gray-300 rounded-lg py-3 text-sm font-medium hover:bg-blue-500 hover:text-white transition cursor-pointer">
              <FaGoogle /> Continue with Google
            </button>
            <button onClick={githubAuth} className="w-full flex items-center justify-center gap-5 border border-gray-300 rounded-lg py-3 text-sm font-medium hover:bg-black hover:text-white transition cursor-pointer">
              <FaGithub /> Continue with GitHub
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center my-6">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="px-3 text-xs text-gray-400 uppercase">
              Or continue with email
            </span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Form */}
          <form onSubmit={onSubmitHandler} className="space-y-5">
            {state === "Register" ?
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="M Ali"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
              </div> : ""
            }

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="name@company.com"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                {state === "Login" ? <p onClick={() => navigate('/user-forget-password')} className="text-xs text-blue-600 hover:underline cursor-pointer">
                  Forgot password?
                </p> : ""}
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="••••••••"
                  autoComplete="off"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 px-3 text-gray-500 text-sm cursor-pointer"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            { state === "Register" && <div>
              <input
                type="checkbox"
                id="privacy-terms"
                className="mr-2"
                checked={privacyChecked}
                onChange={(e) => setPrivacyChecked(e.target.checked)}
              />
              <label htmlFor="privacy-terms" className="text-sm text-gray-600">
                I agree to the
                <Link to='/privacy-policy' className="text-blue-600 px-1 hover:underline">
                  Privacy Policy
                </Link>
                and
                <Link to='/terms-of-service' className="text-blue-600 px-1 hover:underline">
                  Terms of Service
                </Link>
              </label>
            </div>}

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg shadow-md transition cursor-pointer">
              {state === "Login" ? "Login to your account" : "Create your account"}
            </button>

            {state === "Login" ?
              <p className="text-left text-sm text-gray-500 mt-2">Don't have an account? <span onClick={() => setState("Register")} className="text-blue-600 hover:underline cursor-pointer">Create an account</span></p>
              :
              <p className="text-left text-sm text-gray-500 mt-2">I have an account? <span onClick={() => setState("Login")} className="text-blue-600 hover:underline cursor-pointer">Login</span></p>
            }
          </form>

        </div>
      </div>

    </div>
  )
}

export default UserLogin
