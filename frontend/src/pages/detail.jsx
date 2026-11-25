import React, { useContext, useMemo, useState } from "react";
import {FaBookmark,FaCheckCircle,FaTasks,FaUsers,FaGlobe,FaBuilding} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { convertData } from "../utils/converter.js";
import { Context } from "../context/context.jsx";
import { toast } from "react-toastify";
import Loader from "../components/loader.jsx";
import axiosInstance from "../utils/axiosInstance.js";

const Detail = () => {

  const { auth, navigate, savedJobs, setSavedJobs, appliedJobs, setAppliedJobs, jobs } = useContext(Context);
  
  const { id } = useParams();
  const job = useMemo(()=>{
    return jobs.find((j) => j._id === id);
  },[id, jobs]);

  console.log(job);

  const [loader, setLoader] = useState(false);

  const applyJob = async (id) => {
    try {
      if(auth.status !== 'authenticated' || auth.role !== 'user'){
        return navigate('/login');
      }
      setLoader(true);

      const response = await axiosInstance.post(`/api/v1/user/apply-job/${id}`)
      if(response.data.success){
        toast.success(response.data.message);
        setAppliedJobs((prev)=> [...prev, response.data.appliedJob]);
      }
      
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  const saveAJob = async (id) => {
      try {
        if(auth.status !== 'authenticated' || auth.role !== 'user'){
          return navigate('/login');
        }
        setLoader(true);

        const response = await axiosInstance.post(`/api/v1/user/save-job/${id}`)
        if(response.data.success){
          toast.success(response.data.message);
          setSavedJobs((prev)=> [...prev, response.data.savedJob]);
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

  if(!job){
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
    <main className="bg-slate-50 min-h-screen py-10 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <section className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-sm mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">

            <div className="flex flex-col sm:flex-row gap-5">

              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl overflow-hidden bg-slate-100 shrink-0">
                <img
                  src={job.recruiterData.companyLogo}
                  alt={job.recruiterData.companyName}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">
                  {job.title}
                </h1>

                <div className="flex flex-wrap items-center gap-2 text-slate-600 mb-4">
                  <span className="font-semibold text-blue-600">
                    {job.recruiterData.companyName}
                  </span>

                  <span className="font-semibold text-green-600">
                    Rs: {convertData(job.salary)}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium">
                    {job.jobType}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                    {job.status === true ? "Active" : "Inactive"}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                    {job.experienceLevel}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-sm font-medium">
                    {job.recruiterData.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <button type="button" onClick={()=> applyJob(job._id)} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-3 rounded-xl font-semibold shadow-md">
                Apply Now
              </button>

              <button type="button" onClick={()=> saveAJob(job._id)} className="border border-blue-600 text-blue-600 hover:bg-blue-50 cursor-pointer px-8 py-3 rounded-xl font-semibold flex items-center justify-center gap-2">
                <FaBookmark />
                Save Job
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left */}
          <div className="lg:col-span-2 space-y-8">

            {/* Description */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-5">
                Job Description
              </h2>

              <p className="text-slate-600 leading-8">
                {job.description}
              </p>
            </section>

            {/* Requirement & Responsibilities */}
            <div className="grid md:grid-cols-2 gap-6">

              <section className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <FaCheckCircle className="text-blue-600" />
                  Requirements
                </h3>

                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex gap-2 text-slate-600">
                      <span className="text-blue-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="text-xl font-semibold flex items-center gap-2 mb-4">
                  <FaTasks className="text-blue-600" />
                  Responsibilities
                </h3>

                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-2 text-slate-600">
                      <span className="text-blue-600">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* Skills */}
            <section className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8">
              <h2 className="text-2xl font-semibold mb-5">
                Skills Required
              </h2>

              <div className="flex flex-wrap gap-3">
                {job.skills.map((skill, index) => (
                  <span key={index} className="px-4 py-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <aside className="space-y-6">

            {/* Company Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">

              <h3 className="text-xl font-semibold mb-6">
                About {job.recruiterData.companyName}
              </h3>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <FaUsers className="text-slate-500 text-xl" />
                  <div>
                    <p className="text-xs uppercase text-slate-500">
                      Company Size
                    </p>
                    <p className="font-medium">
                      {job.recruiterData.companySize}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaGlobe className="text-slate-500 text-xl" />
                  <div>
                    <p className="text-xs uppercase text-slate-500">
                      Website
                    </p>
                    <a href="#" className="text-blue-600 hover:underline">
                      {job.recruiterData.companyWebsite}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <FaBuilding className="text-slate-500 text-xl" />
                  <div>
                    <p className="text-xs uppercase text-slate-500">
                      Industry
                    </p>
                    <p>{job.recruiterData.industry}</p>
                  </div>
                </div>

              </div>

              <div className="border-t border-slate-200 mt-6 pt-6">

                <p className="text-slate-600 text-sm leading-7 mb-4">
                  {job.recruiterData.companyBio}
                </p>

                {/* <button className="w-full border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white cursor-poiter py-3 rounded-xl font-medium transition-all duration-300">
                  View Company Profile
                </button> */}
              </div>
            </div>

            {/* Hiring Activity */}
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">

              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                Hiring Activity
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">
                    Applicants
                  </span>

                  <span className="font-semibold">
                    {job.totalApplicants}
                  </span>
                </div>

                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div className={`${job.totalApplicants === 0 ? "w-0" : job.totalApplicants <=20 ? "w-1/4" : job.totalApplicants <= 40 ? "w-2/4" : "w-3/4"} h-full bg-green-500`}></div>
                </div>

                <p className="text-sm text-green-700 font-medium">
                  {job.totalApplicants <= 20 ? "Low competition for this role" : job.totalApplicants <= 40 ? "Moderate competition for this role" : "High competition for this role"}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-4">
                Job Information
              </h3>

              <div className="space-y-4">

                <div>
                  <p className="text-sm text-slate-500">
                    Status
                  </p>
                  <p className="font-medium capitalize">
                    {job.status === true ? "Active" : "Inactive"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">
                    Last Date To Apply
                  </p>
                  <p className="font-medium">
                    {new Date(job.lastDateToApply).toISOString().split('T')[0]}
                  </p>
                </div>

              </div>
            </div>

          </aside>

        </div>
      </div>
    </main>
  );
};

export default Detail