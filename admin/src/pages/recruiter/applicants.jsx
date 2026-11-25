import React, { useContext, useState } from "react";
import { FiSearch, FiFilter, FiArrowUp, FiCheckCircle, FiCalendar, FiXCircle, FiEye, FiFileText } from "react-icons/fi";
import { applied_jobs } from "../../assets/assets.js";
import { Context } from "../../context/context.jsx";
import axiosInstance from "../../utils/axiosInstance.js";
import { toast } from "react-toastify";
import Loader from "../../components/loader.jsx";
import { Link } from "react-router-dom";

const Applicants = () => {
  const { auth, navigate, applicants, setApplicants } = useContext(Context);

  const stats = {
    total: applicants.length,
    interviews: applicants.filter(
      (a) => a.status === "Interviewing"
    ).length,
    pending: applicants.filter((a) => a.status === "Pending").length,
    avgTime: "18d",
  };

  const [loader, setLoader] = useState(false);

  const changeApplicationStatus = async (id, status) => {
    try {
      if (auth.status !== "authenticated" || auth.role !== "recruiter") {
        return navigate("/login");
      }

      setLoader(true);

      const response = await axiosInstance.patch(`/api/v1/recruiter/application-status/${id}`, { status });
      if (response.data.success) {
        toast.success(response.data.message);
        setApplicants((prev) => prev.map((app) => (app._id === id ? { ...app, status } : app)));
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  if (applicants.length === 0) {
    return (
      <div className="w-full h-screen pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="w-full h-screen bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4 items-center justify-center">
          <h1 className="text-2xl font-semibold text-slate-800">No application found</h1>
          <Link to="/" className="px-4 py-2 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-all duration-200 cursor-pointer">Home</Link>
        </div>
      </div>
    )
  }

  if (loader) {
    return <Loader />
  }

  return (
    <div className="bg-[#f8fafc] min-h-screen text-[#191b23]">
      <main className="pt-10 pb-20 px-4 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">
              Applicant Management
            </h1>
            <p className="text-gray-500 mt-1">
              Review and manage candidates for all your active job postings.
            </p>
          </div>

          <div className="flex gap-2 items-center">
            {/* <div className="relative">
              <FiSearch className="absolute left-3 top-3 text-gray-400" />
              <input
                placeholder="Search candidates..."
                className="pl-10 pr-4 py-2 bg-white border rounded-xl w-64 text-sm"
              />
            </div> */}

            {/* <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl">
              <FiFilter /> Filter
            </button> */}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">

          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Total Applicants</p>
            <div className="flex items-center gap-2 mt-1">
              <h2 className="text-2xl font-bold">{stats.total}</h2>
              <span className="text-green-600 flex items-center text-sm">
                +12% <FiArrowUp />
              </span>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Interviews Scheduled</p>
            <h2 className="text-2xl font-bold mt-1">{stats.interviews}</h2>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Pending Review</p>
            <h2 className="text-2xl font-bold text-orange-500 mt-1">
              {stats.pending}
            </h2>
          </div>

          <div className="bg-white shadow-md rounded-xl p-4">
            <p className="text-gray-500 text-sm">Avg. Time to Hire</p>
            <h2 className="text-2xl font-bold mt-1">{stats.avgTime}</h2>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-md rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="p-4 text-sm text-gray-500 uppercase">
                    Candidate
                  </th>
                  <th className="p-4 text-sm text-gray-500 uppercase">
                    Position
                  </th>
                  <th className="p-4 text-sm text-gray-500 uppercase">
                    Applied
                  </th>
                  <th className="p-4 text-sm text-gray-500 uppercase">
                    Resume
                  </th>
                  <th className="p-4 text-sm text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="p-4 text-sm text-gray-500 uppercase text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody>
                {applicants.map((a) => (
                  <tr key={a._id} className="hover:bg-gray-50 transition">
                    {/* Candidate */}
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                          {a.userData.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="font-semibold">
                            {a.userData.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {a.userData.email}
                          </p>
                        </div>
                      </div>
                    </td>

                    {/* Job */}
                    <td className="p-4">
                      <p className="font-medium">
                        {a.jobData.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {a.jobData.jobType} •{" "}
                        {a.jobData.experienceLevel}
                      </p>
                    </td>

                    {/* Date */}
                    <td className="p-4 text-sm text-gray-500">
                      {new Date(a.jobData.lastDateToApply).toISOString().split("T")[0]}
                    </td>

                    {/* Resume */}
                    <td className="p-4">
                      <span className="flex items-center gap-2 text-blue-600 text-sm">
                        <FiFileText /> <a href={a.resume} target="_blank" rel="noopener noreferrer" download>Download</a>
                      </span>
                    </td>

                    {/* Status */}
                    <td className="p-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full ${a.status === "Pending"
                            ? "bg-gray-100 text-gray-600"
                            : a.status === "Accepted"
                              ? "bg-green-100 text-green-600"
                              : a.status === "Rejected"
                                ? "bg-red-100 text-red-600"
                                : a.status === "Interviewing"
                                  ? "bg-blue-100 text-blue-600"
                                  : a.status === "Shortlisted"
                                    ? "bg-orange-100 text-orange-600"
                                    : a.status === "Offer"
                                      ? "bg-teal-100 text-teal-600"
                                      : "bg-gray-100 text-gray-600"
                          }`}
                      >
                        {a.status}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <select
                          value={a.status}
                          onChange={(e) => changeApplicationStatus(a._id, e.target.value)}
                          className="px-4 py-2 border border-gray-200"
                        >
                          <option value="Pending">Pending</option>
                          <option value="Accepted">Accepted</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Interviewing">Interviewing</option>
                          <option value="Shortlisted">Shortlisted</option>
                          <option value="Offer">Offer</option>
                        </select>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {/* <div className="flex justify-between items-center p-4 border-t bg-gray-50">
            <p className="text-sm text-gray-500">
              Showing {applications.length} candidates
            </p>

            <div className="flex gap-2">
              <button className="p-2 border rounded">
                <FiEye />
              </button>
            </div>
          </div> */}
        </div>
      </main>
    </div>
  );
};

export default Applicants