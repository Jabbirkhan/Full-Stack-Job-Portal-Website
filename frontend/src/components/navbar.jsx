import React, { useContext, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FaBars, FaUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance.js';
import { Context } from '../context/context';
import Loader from './loader.jsx';

const Navbar = () => {

  const { setAuth, auth, navigate, userProfile } = useContext(Context);
  const profile = userProfile || {};

  const [loader, setLoader] = useState(false);

  const [visible, setVisible] = useState(false);
  const location = useLocation();

  if (location.pathname === '/user-login' || location.pathname === '/user-forget-password' || location.pathname === '/verify-email' || location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service') {
    return null;
  }

  const handleLogout = async () => {
    try {
      if (auth.status !== 'authenticated') {
        return navigate('/login');
      }
      const response = await axiosInstance.post(`/api/v1/user/logout`, {});
      if (response.data.success) {
        toast.success(response.data.message);
        setAuth({
          status: 'unauthenticated',
          role: null
        });
        navigate('/login');
      }
    } catch (error) {
      if (response.status !== 401) {
        toast.error(error.response?.data?.message);
      }
    }
  }

  const sendOtpForEmailVerification = async () => {
    try {
      if (auth.status !== 'authenticated' || auth.role !== 'user') {
        return navigate('/login');
      }

      setLoader(true);
      const response = await axiosInstance.get('/api/v1/user/send-verify-email-otp');
      if (response.data.success) {
        toast.success(response.data.message);
        navigate('/verify-email');
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
    <div>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <h1 className="text-2xl font-bold text-blue-600">
            RiseWorks
          </h1>

          <ul className="hidden md:flex gap-8 font-medium text-gray-600">
            <NavLink to="/" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">Home</NavLink>
            <NavLink to="/jobs" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1">Jobs</NavLink>
            <NavLink to='/about' className='hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1'>About</NavLink>
            <NavLink to='/contact' className='hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1'>Contact</NavLink>
          </ul>

          <div className="flex gap-3 items-center">

            <Link to='/applied-jobs' className="hidden sm:block px-5 py-2 rounded-xl text-white font-semibold bg-blue-600 hover:bg-blue-700 transition-color duration-300 cursor-pointer">
              Applied Jobs
            </Link>

            <div className="text-gray-600 hover:text-blue-600 cursor-pointer group relative">
              <FaUserCircle className="text-3xl sm:text-4xl text-blue-600 hover:text-blue-700 transition-colors duration-300" />
              <div className="absolute w-40 top-9 right-0 bg-white shadow-lg p-2 rounded-md hidden group-hover:flex flex-col items-start gap-3">
                <Link to='/profile' className="text-gray-600 hover:text-blue-600 cursor-pointer">Profile</Link>
                {profile.isAccountVerified ? (
                  <p className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    Verified
                  </p>
                ) : (
                  <p
                    onClick={sendOtpForEmailVerification}
                    className="text-gray-600 hover:text-blue-600 cursor-pointer"
                  >
                    Verify email
                  </p>
                )}
                <Link to='/saved-jobs' className="text-gray-600 hover:text-blue-600 cursor-pointer">Saved Jobs</Link>
                {auth.status === 'authenticated' ?
                  <button className="text-gray-600 hover:text-blue-600 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </button>
                  :
                  <Link to='/login' className="text-gray-600 hover:text-blue-600 cursor-pointer">
                    Login
                  </Link>
                }
              </div>
            </div>

            <div className='md:hidden text-2xl' onClick={() => setVisible(true)}>
              <FaBars />
            </div>

          </div>

        </nav>

        {/* Mobile Menu */}
        <nav className={`fixed top-0 left-0 w-full h-screen bg-black/50 backdrop-blur-sm z-40 ${visible ? 'flex' : 'hidden'} justify-end`} onClick={() => setVisible(false)}>
          {/* Prevent click from propagating to the backdrop */}
          <div className="w-3/4 h-full bg-white p-6 flex flex-col gap-6" onClick={(e) => e.stopPropagation()}>
            <NavLink to="/" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1" onClick={() => setVisible(false)}>Home</NavLink>
            <NavLink to="/jobs" className="hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1" onClick={() => setVisible(false)}>Jobs</NavLink>
            <NavLink to='/about' className='hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1' onClick={() => setVisible(false)}>About</NavLink>
            <NavLink to='/contact' className='hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1' onClick={() => setVisible(false)}>Contact</NavLink>
            <NavLink to='/applied-jobs' className='sm:hidden hover:text-blue-600 hover:border-b-2 hover:border-blue-600 pb-1' onClick={() => setVisible(false)}>Applied Jobs</NavLink>
          </div>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
