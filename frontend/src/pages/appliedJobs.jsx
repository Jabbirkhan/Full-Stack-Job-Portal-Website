import React, { useContext, useState } from "react";
import {FiSearch,FiFilter,FiDownload,FiMoreVertical,FiTrendingUp,FiBriefcase,FiChevronLeft,FiChevronRight} from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import Loader from "../components/loader.jsx";
import { Context } from "../context/context.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { convertData } from "../utils/converter.js";

const AppliedJobs = () => {

  const { auth, navigate, appliedJobs, setAppliedJobs, fetchAppliedJobs } = useContext(Context);

  const [loader, setLoader] = useState(false);
  
  const cancelApplication = async (id) => {
      try {
        if(auth.status !== 'authenticated' || auth.role !== 'user'){
          return navigate('/login');
        }
        setLoader(true);

        const response = await axiosInstance.patch(`/api/v1/user/cancel-application/${id}`)
        if(response.data.success){
          toast.success(response.data.message);
          // setAppliedJobs((prev)=>prev.filter((job) => job._id !== id));
          fetchAppliedJobs();
        }
        
      } catch (error) {
        toast.error(error.response?.data?.message);
      } finally {
        setLoader(false);
      }
  }
  
  if(loader){
    return <Loader />
  }

  if(appliedJobs.length === 0){
    return (
      <div className="w-full h-screen pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full h-screen bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-semibold text-slate-800">No job found</h1>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer">Home</Link>
        </div>
      </div>
    )
  }

  return (
    <main className="grow pt-10 pb-10 px-4 md:px-10 max-w-7xl mx-auto w-full text-gray-900">

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Applied Jobs</h1>
            <p className="text-gray-500 mt-1">
              Track and manage your professional journey across applications.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center border">
                <FiTrendingUp size={14} />
              </div>
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border">
                <FiBriefcase size={14} />
              </div>
            </div>
            <span className="text-sm text-gray-500">
              Active Search: <span className="text-blue-600 font-semibold">On</span>
            </span>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 rounded-xl border-l-4 border-blue-500">
        <div className="bg-white/80 backdrop-blur shadow-md rounded-xl p-4">
          <p className="text-xs uppercase text-gray-500">Total Sent</p>
          <p className="text-2xl font-bold mt-1">{appliedJobs.length}</p>
        </div>

        <div className="bg-white/80 backdrop-blur shadow-md rounded-xl p-4 border-l-4 border-yellow-500">
          <p className="text-xs uppercase text-gray-500">Interviewing</p>
          <p className="text-2xl font-bold text-blue-600 mt-1">
            {appliedJobs.filter(j => j.status === "Interviewing").length}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur shadow-md rounded-xl p-4 border-l-4 border-red-500">
          <p className="text-xs uppercase text-gray-500">Rejected</p>
          <p className="text-2xl font-bold text-red-600 mt-1">
            {appliedJobs.filter(j => j.status === "Rejected").length}
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur shadow-md rounded-xl p-4 border-l-4 border-green-500">
          <p className="text-xs uppercase text-gray-500">Accepted</p>
          <p className="text-2xl font-bold mt-1">
            {appliedJobs.filter(j => j.status === "Accepted").length}
          </p>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white/80 backdrop-blur shadow-md rounded-xl overflow-hidden">

        {/* Table Header */}
        <div className="p-4 border-b flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <div className="relative w-full md:max-w-sm">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search applications..."
              className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-50">
              <FiFilter /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700">
              <FiDownload /> Export
            </button>
          </div> */}
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="p-4 text-xs uppercase text-gray-500">Company</th>
                <th className="p-4 text-xs uppercase text-gray-500">Job Title</th>
                <th className="p-4 text-xs uppercase text-gray-500">Salary</th>
                <th className="p-4 text-xs uppercase text-gray-500">Status</th>
                <th className="p-4 text-xs uppercase text-gray-500">Action</th>
              </tr>
            </thead>

            <tbody>
              {appliedJobs.map((job) =>{
                // const jobData = all_jobs.find(j => j._id === job.jobId);
                return (
                  <tr key={job._id} className="hover:bg-blue-50 transition">
                  <td className="p-4 flex items-center gap-3">
                    <img
                      src={job.jobData.recruiterData.companyLogo}
                      alt={job.jobData.recruiterData.companyName}
                      className="w-10 h-10 rounded-lg object-cover border"
                    />
                    <span className="font-medium">{job.jobData.recruiterData.companyName}</span>
                  </td>

                  <td className="p-4 font-medium">{job.jobData.title}</td>

                  <td className="p-4 text-sm text-gray-500">
                    Rs: {convertData(job.jobData.salary)}
                  </td>

                  <td className="p-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-full 
                      ${job.status === "Pending" ? "bg-gray-100 text-gray-800" : job.status === "Accepted" ? "bg-green-100 text-green-800" : job.status === "Rejected" ? "bg-red-100 text-red-800" : job.status === "Interviewing" ? "bg-yellow-100 text-yellow-800" : "bg-blue-100 text-blue-800"}
                      `}>
                      {job.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <button onClick={()=> cancelApplication(job._id)} className="p-5 hover:bg-red-100 rounded-full cursor-pointer">
                      {!job.cancelled && <FaTrashAlt className="text-red-500" />}
                    </button>
                  </td>
                </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        
      </div>
    </main>
  );
};

export default AppliedJobs