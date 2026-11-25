import React, { useContext, useEffect, useState } from "react";
import { FaCamera, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaVenusMars, FaCalendarAlt, FaEdit, FaSave } from "react-icons/fa";
import { Context } from "../context/context";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";
import Loader from "./../components/loader.jsx";
import { FiDownload, FiFileText, FiUpload } from "react-icons/fi";
import moment from 'moment';

const Profile = () => {

  const { userProfile, setUserProfile, auth, navigate } = useContext(Context);

  const [isEditing, setIsEditing] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [resume, setResume] = useState('');

  const [userData, setUserData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    if (userProfile) {
      setUserData({
        name: userProfile.name || '',
        email: userProfile.email || '',
      });
      setAvatar(userProfile.avatar);
      setResume(userProfile.resume);
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (auth.status !== 'authenticated') {
        return navigate('/login');
      }

      setLoading(true);

      const formData = new FormData();
      formData.append("name", userData.name);
      resume && formData.append("resume", resume);
      avatar && formData.append("avatar", avatar);

      const response = await axiosInstance.patch(`/api/v1/user/update-profile`, formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setUserProfile(response.data.updatedProfile);
        setIsEditing(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}

        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            My Profile
          </h1>

          <p className="text-slate-500 mt-2">
            Manage your personal information
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Left Card */}

          <div className="bg-white rounded-3xl shadow-lg p-8 h-fit">

            <div className="flex flex-col items-center">

              <div className="relative">

                {avatar ? <img src={typeof avatar === 'string' ? avatar : URL.createObjectURL(avatar)} alt={userData.name}
                  className="w-36 h-36 rounded-full object-cover border-4 border-violet-100"
                />
                :
                <div className="w-36 h-36 rounded-full bg-gray-100 border-4 border-violet-100"></div>
                }

                {isEditing && (
                  <>
                    <label htmlFor="avatar" className="absolute bottom-1 right-1 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center cursor-pointer">
                      <FaCamera />
                    </label>
                    <input type="file" id="avatar" hidden accept="image/*" onChange={(e) => setAvatar(e.target.files[0])} />
                  </>
                )}
              </div>

              <h2 className="mt-5 text-xl font-bold">
                {userData.name}
              </h2>

              <p className="text-slate-500">
                {userData.email}
              </p>

              <button onClick={() => setIsEditing(!isEditing)} className="mt-6 flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium">
                <FaEdit /> {isEditing ? "Cancel Editing" : "Edit Profile"}
              </button>
            </div>
          </div>

          {/* Right Form */}

          <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8">

            <form 
              onSubmit={onSubmitHandler}
              className="space-y-6" >

              {/* Name */}
              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaUser /> Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={userData.name}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-violet-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="font-medium flex items-center gap-2 mb-2">
                  <FaEnvelope /> Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  disabled
                  className="w-full border rounded-xl px-4 py-3 bg-slate-100"
                />
              </div>

              <div className="border-2 border-dashed border-blue-200 bg-blue-50 rounded-xl p-6 flex flex-col lg:flex-row justify-between items-center gap-4">

                <div className="flex items-center gap-4">
                  
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                    <FiFileText className="text-blue-600 text-2xl" />
                  </div>

                  <div>
                    {
                      resume ? 
                      <h4 className="font-semibold">{typeof resume === 'string' ? userData.name + ".pdf" : resume.name}</h4>
                      :
                      <h4 className="font-semibold">Upload Resume</h4>
                    }
                    {
                      resume ?
                      <p className="text-sm text-gray-500">
                        {moment(resume?.createdAt).fromNow()}
                      </p>
                      :
                      <p>
                        <span className="text-sm text-gray-500">No time available</span>
                      </p>
                    }
                  </div>

                </div>

                <div className="flex flex-col lg:flex-row gap-3">
                  <span type="button" className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg text-blue-600 cursor-pointer">
                    {/* <FiDownload /> <a href={typeof resume === 'string' ? resume : resume ? URL.createObjectURL(resume) : "#"} target="_blank" rel="noopener noreferrer" download>Download</a> */}
                    <FiDownload /> <a href={resume} target="_blank" rel="noopener noreferrer" download>Download</a>
                    {/* <FiDownload /> <a href={`${resume}?fl_attachment=true`} target="_blank" rel="noopener noreferrer" download>Download</a> */}
                  </span>

                  {isEditing &&
                   <label htmlFor="file" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg cursor-pointer">
                    <FiUpload /> Upload
                    <input type="file" id="file" accept="application/pdf" onChange={(e)=>setResume(e.target.files[0])} hidden />
                  </label>}
                </div>
                
              </div>

              {isEditing && (
                <div className="flex justify-end">
                  <button type="submit" className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 hover:bg-linear-to-r hover:from-purple-700 hover:to-cyan-600 cursor-pointer text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-200">
                    <FaSave /> Save Profile
                  </button>
                </div>
              )}
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile