import React, { useContext, useEffect, useState } from "react";
import { FaBuilding, FaGlobe, FaMapMarkerAlt, FaEnvelope, FaUsers, FaIndustry, FaEdit } from "react-icons/fa";
import { Context } from "../../context/context.jsx";
import axiosInstance from "../../utils/axiosInstance.js";
import { toast } from "react-toastify";
import Loader from "../../components/loader.jsx";

const recruiterProfileProfile = () => {

  const { recruiterProfile, setRecruiterProfile, auth, navigate } = useContext(Context);

  const [isEditing, setIsEditing] = useState(false);
  const [companyLogo, setCompanyLogo] = useState(null);

  const [recruiterData, setRecruiterData] = useState({
    companyName: "",
    email: "",
    companyWebsite: "",
    industry: "",
    companySize: "",
    location: "",
    companyBio: "",
  });

  useEffect(() => {
    if (recruiterProfile) {
      setRecruiterData({
        companyName: recruiterProfile.companyName || "",
        email: recruiterProfile.email || "",
        companyWebsite: recruiterProfile.companyWebsite || "",
        industry: recruiterProfile.industry || "",
        companySize: recruiterProfile.companySize || "",
        location: recruiterProfile.location || "",
        companyBio: recruiterProfile.companyBio || "",
      });

      setCompanyLogo(recruiterProfile.companyLogo);
    }
  }, [recruiterProfile]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRecruiterData({ ...recruiterData, [name]: value });
  };

  const [loading, setLoading] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (auth.status !== "authenticated" || auth.role !== "recruiter") {
        return navigate("/login");
      }

      setLoading(true);

      const formData = new FormData();

      formData.append("companyName", recruiterData.companyName);
      formData.append("companyWebsite", recruiterData.companyWebsite);
      formData.append("industry", recruiterData.industry);
      formData.append("companySize", recruiterData.companySize);
      formData.append("location", recruiterData.location);
      formData.append("companyBio", recruiterData.companyBio);

      if (companyLogo) {
        formData.append("companyLogo", companyLogo);
      }

      const response = await axiosInstance.patch("/api/v1/recruiter/update-profile", formData);
      if (response.data.success) {
        toast.success(response.data.message);
        setRecruiterProfile(response.data.updatedProfile);
        setIsEditing(false);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 md:px-8 py-10">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            Company Profile
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your company information and details
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT CARD */}
          <div className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center">

            <div className="relative">

              {companyLogo ? (
                <img src={typeof companyLogo === "string" ? companyLogo : URL.createObjectURL(companyLogo)}
                  alt={recruiterData.companyName}
                  className="w-32 h-32 rounded-full object-cover border-4 border-violet-100"
                />
              ) : (
                <div className="w-32 h-32 rounded-full bg-slate-100 flex items-center justify-center border-4 border-violet-100">
                  <FaBuilding className="text-4xl text-slate-400" />
                </div>
              )}

              {isEditing && (
                <>
                  <label
                    htmlFor="companyLogo"
                    className="absolute bottom-0 right-0 w-10 h-10 bg-violet-600 text-white rounded-full flex items-center justify-center cursor-pointer"
                  >
                    <FaEdit />
                  </label>

                  <input
                    type="file"
                    id="companyLogo"
                    hidden
                    accept="image/*"
                    onChange={(e) => setCompanyLogo(e.target.files[0])}
                  />
                </>
              )}
            </div>

            <h2 className="mt-5 text-xl font-bold text-slate-900">
              {recruiterData.companyName}
            </h2>

            <p className="text-slate-500 flex items-center gap-2 mt-2">
              <FaMapMarkerAlt />
              {recruiterData.location}
            </p>

            <p className="text-slate-600 mt-4 text-sm leading-relaxed">
              {recruiterData.companyBio}
            </p>

            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="mt-6 flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:scale-105 transition"
            >
              <FaEdit />
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>
          </div>

          {/* RIGHT FORM */}
          <form
            onSubmit={onSubmitHandler}
            className="lg:col-span-2 bg-white rounded-3xl shadow-lg p-8"
          >

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Company Name */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="block text-slate-600 mb-2">
                  Company Name
                </label>

                <input
                  type="text"
                  name="companyName"
                  value={recruiterData.companyName}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

              {/* Email */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="flex items-center gap-2 text-slate-600 mb-2">
                  <FaEnvelope />
                  Email
                </label>

                <input
                  type="email"
                  value={recruiterData.email}
                  disabled
                  className="w-full border rounded-xl px-4 py-3 bg-slate-100"
                />
              </div>

              {/* Website */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="flex items-center gap-2 text-slate-600 mb-2">
                  <FaGlobe />
                  Website
                </label>

                <input
                  type="text"
                  name="companyWebsite"
                  value={recruiterData.companyWebsite}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

              {/* Industry */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="flex items-center gap-2 text-slate-600 mb-2">
                  <FaIndustry />
                  Industry
                </label>

                <input
                  type="text"
                  name="industry"
                  value={recruiterData.industry}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

              {/* Company Size */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="flex items-center gap-2 text-slate-600 mb-2">
                  <FaUsers />
                  Company Size
                </label>

                <input
                  type="text"
                  name="companySize"
                  value={recruiterData.companySize}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

              {/* Location */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                <label className="flex items-center gap-2 text-slate-600 mb-2">
                  <FaMapMarkerAlt />
                  Location
                </label>

                <input
                  type="text"
                  name="location"
                  value={recruiterData.location}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100"
                />
              </div>

            </div>

            {/* About Company */}
            <div className="mt-8 p-6 rounded-2xl bg-linear-to-r from-violet-50 to-cyan-50 border border-violet-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                About Company
              </h3>

              <textarea
                rows="5"
                name="companyBio"
                value={recruiterData.companyBio}
                onChange={handleChange}
                disabled={!isEditing}
                className="w-full border rounded-xl px-4 py-3 disabled:bg-slate-100 resize-none"
              />
            </div>

            {isEditing && (
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="flex items-center gap-2 bg-linear-to-r from-violet-600 to-cyan-500 text-white px-8 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Save Profile
                </button>
              </div>
            )}

          </form>
        </div>
      </div>
    </div>
  );
};

export default recruiterProfileProfile