import React, { useContext, useState } from "react";
import { FiBookmark, FiFilter, FiSliders, FiMapPin, FiDollarSign } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Context } from "../context/context.jsx";
import Loader from "../components/loader.jsx";
import { toast } from "react-toastify";
import axiosInstance from "../utils/axiosInstance.js";

const SavedJobs = () => {

  const { auth, navigate, savedJobs, setSavedJobs } = useContext(Context);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [loader, setLoader] = useState(false);

  const removeAJob = async (id) => {
    try {
      if (auth.status !== 'authenticated' || auth.role !== 'user') {
        return navigate('/login');
      }
      setLoader(true);

      const response = await axiosInstance.delete(`/api/v1/user/remove-saved-job/${id}`)
      if (response.data.success) {
        toast.success(response.data.message);
        setSavedJobs((prev) => prev.filter((job) => job._id !== id));
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  if (savedJobs.length === 0) {
    return (
      <div className="w-full h-screen pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full h-screen bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-semibold text-slate-800">No job found</h1>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer">Home</Link>
        </div>
      </div>
    )
  }

  if (loader) {
    return <Loader />
  }

  return (
    <main className="pt-10 pb-10 px-4 md:px-10 max-w-7xl mx-auto min-h-screen bg-gray-50">

      {/* Header */}
      <header className="mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Saved Jobs</h1>
            <p className="text-gray-500 mt-1">
              You have {savedJobs.length} jobs saved for future consideration.
            </p>
          </div>

          {/* <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
              <FiFilter /> Filter
            </button>

            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition">
              <FiSliders /> Sort
            </button>
          </div> */}
        </div>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {savedJobs.map((save) => (
          <div
            key={save._id}
            className="bg-white border rounded-xl p-5 flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >

            {/* Top */}
            <div>
              <div className="flex justify-between items-start mb-4">

                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                  <img
                    src={save.jobData.recruiterData.companyLogo}
                    alt={save.jobData.recruiterData.companyName}
                    className="w-full h-full object-cover"
                  />
                </div>

                <button onClick={()=>removeAJob(save._id)} className="p-5 text-red-400 hover:text-red-500 hover:bg-red-100 rounded-full transition cursor-pointer">
                  <FaTrashAlt />
                </button>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition">
                {save.jobData.title}
              </h3>

              <p className="text-gray-500 font-medium mt-1">
                {save.jobData.recruiterData.companyName}
              </p>

              {/* Details */}
              <div className="mt-4 space-y-2 text-sm text-gray-500">

                <div className="flex items-center gap-2">
                  <FiDollarSign />
                  <span>Rs: {save.jobData.salary}</span>
                </div>

                <div className="flex items-center gap-2">
                  <FiMapPin />
                  <span>{save.jobData.recruiterData.location}</span>
                </div>

              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">

                <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-700 font-medium">
                  {save.jobData.jobType}
                </span>

                <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                  {save.jobData.experienceLevel}
                </span>

              </div>
            </div>

            {/* Bottom Buttons */}
            <div className="mt-6 flex gap-3">
              <Link to={`/detail/${save.jobData._id}`} onClick={scrollToTop}>
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg text-sm hover:bg-blue-50 transition cursor-pointer">
                  Details
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
};

export default SavedJobs
