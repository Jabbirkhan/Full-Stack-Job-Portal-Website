import React, { useContext, useState } from "react";
import {FiPlus, FiBriefcase, FiUsers, FiClock, FiEye, FiTrash2} from "react-icons/fi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../../context/context.jsx";
import Loader from "../../components/loader.jsx";
import axiosInstance from "../../utils/axiosInstance.js";

const PostedpostedJobs = () => {

  const { auth, postedJobs, setPostedJobs, navigate } = useContext(Context);

  const stats = {
    activepostedJobs: postedJobs.filter((j) => j.status).length,
    totalApplicants: postedJobs.reduce((acc, j) => acc + j.totalApplicants, 0),
    avgTime: "18 Days",
    jobViews: "45.2k",
  };

  const [loader, setLoader] = useState(false);
  
  const deleteJob = async (id) => {
    try {
      if (auth.status !== "authenticated" || auth.role !== "recruiter") {
        return navigate("/login");
      }

      setLoader(true);

      const response = await axiosInstance.delete(`/api/v1/recruiter/delete-job/${id}`)
      if (response.data.success) {
        toast.success(response.data.message);
        setPostedJobs((prev) => prev.filter((job) => job._id !== id));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  const changepostedJobstatus = async (id, status) => {
    try {
      if (auth.status !== "authenticated" || auth.role !== "recruiter") {
        return navigate("/login");
      }

      setLoader(true);

      const response = await axiosInstance.patch(`/api/v1/recruiter/job-status/${id}`, { status });
      if (response.data.success) {
        toast.success(response.data.message);
        setPostedJobs((prev) => prev.map((job) => (job._id === id ? { ...job, status } : job)));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  if(postedJobs.length === 0){
    return (
      <div className="w-full h-screen pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full h-screen bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-semibold text-slate-800">No job found</h1>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer">Home</Link>
        </div>
      </div>
    )
  }

  if(loader){
    return <Loader />
  }

  return (
    <div className="bg-[#faf8ff] min-h-screen text-[#191b23]">
      <main className="pt-10 pb-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Manage Job Postings
            </h1>
            <p className="text-gray-500 mt-1">
              Monitor performance and manage your active talent pipeline.
            </p>
          </div>

          <div className="flex gap-3">
            {/* <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-gray-600">
              <FiFilter /> Filter
            </button> */}
            <Link to="/" className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl">
              <FiPlus /> Post a Job
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/70 shadow-md rounded-xl p-4">
            <FiBriefcase className="text-blue-600" />
            <p className="text-sm text-gray-500 mt-3">Active postedJobs</p>
            <h2 className="text-2xl font-bold">{stats.activepostedJobs}</h2>
          </div>

          <div className="bg-white/70 shadow-md rounded-xl p-4">
            <FiUsers className="text-green-600" />
            <p className="text-sm text-gray-500 mt-3">Total Applicants</p>
            <h2 className="text-2xl font-bold">{stats.totalApplicants}</h2>
          </div>

          <div className="bg-white/70 shadow-md rounded-xl p-4">
            <FiClock className="text-orange-500" />
            <p className="text-sm text-gray-500 mt-3">Avg. Time to Hire</p>
            <h2 className="text-2xl font-bold">{stats.avgTime}</h2>
          </div>

          <div className="bg-white/70 shadow-md rounded-xl p-4">
            <FiEye className="text-purple-600" />
            <p className="text-sm text-gray-500 mt-3">Job Views</p>
            <h2 className="text-2xl font-bold">{stats.jobViews}</h2>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white/70 shadow-md rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-sm uppercase text-gray-500">
                    Job Title
                  </th>
                  <th className="p-4 text-sm uppercase text-gray-500">
                    Date
                  </th>
                  <th className="p-4 text-sm uppercase text-gray-500 text-center">
                    Applications
                  </th>
                  <th className="p-4 text-sm uppercase text-gray-500">
                    Status
                  </th>
                  <th className="p-4 text-sm uppercase text-gray-500 text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {postedJobs.map((job) => (
                  <tr
                    key={job._id}
                    className="hover:bg-blue-50 transition"
                  >
                    {/* Title */}
                    <td className="p-4">
                      <p className="font-semibold text-blue-600">
                        {job.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {job.recruiterData?.industry} • {job.jobType} •{" "}
                        {job.recruiterData?.location}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-gray-500 text-sm">
                      {new Date(job.lastDateToApply).toISOString().split("T")[0]}
                    </td>

                    {/* Applicants */}
                    <td className="p-4 text-center">
                      <div>
                        <p className="font-bold">{job.totalApplicants}</p>
                        <p className="text-xs text-gray-500">Applications</p>
                      </div>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      {job.status ? (
                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-600">
                          Active
                        </span>
                      ) : (
                        <span className="px-3 py-1 text-xs rounded-full bg-gray-200 text-gray-600">
                          Closed
                        </span>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <input type="checkbox" checked={job.status} onChange={(e)=>changepostedJobstatus(job._id, e.target.checked)} />
                        <button onClick={()=>deleteJob(job._id)} className="p-2 hover:bg-red-100 text-red-500 rounded cursor-pointer">
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          

        </div>
      </main>
    </div>
  );
};

export default PostedpostedJobs