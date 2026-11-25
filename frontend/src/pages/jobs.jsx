import React, { useContext, useEffect, useMemo, useState } from "react";
import { FaSearch, FaMapMarkerAlt, FaBookmark, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { convertData } from "../utils/converter.js";
import { Link } from "react-router-dom";
import { Context } from "../context/context.jsx";
import { debounce, set } from 'lodash';
import Loader from "../components/loader.jsx";
import axiosInstance from "../utils/axiosInstance.js";
import { toast } from "react-toastify";
import Pagination from "../components/pagination.jsx";

const Jobs = () => {

  const { auth, navigate, savedJobs, setSavedJobs } = useContext(Context);

  const [title, setTitle] = useState('');
  const [jobType, setJobType] = useState([]);
  const [jobLevel, setJobLevel] = useState([]);
  const [sort, setSort] = useState('');

  const [titleInput, setTitleInput] = useState('');

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [totalJobs, setTotalJobs] = useState([]);

  // const [filteredJobs, setFilteredJobs] = useState([]);

  const handleTitle = useMemo(
    () => debounce((t) => {
      setTitle(t);
      setPage(1);
    }, 1000), []
  )

  const toggleJobType = async (type) => {
    setJobType((prev) => {
      return prev.includes(type) ?
        prev.filter((t) => t !== type) :
        [...prev, type]
    });
    setPage(1);
  }

  const toggleJobLevel = async (level) => {
    setJobLevel((prev) => {
      return prev.includes(level) ?
        prev.filter((l) => l !== level) :
        [...prev, level]
    });
    setPage(1);
  }

  // const applyFilter = async () => {
  //   let jobsCopy = jobs.slice();

  //   if (title && title !== '') {
  //     jobsCopy = jobsCopy.filter((job) => job.title.toLowerCase().includes(title.toLowerCase()));
  //   }

  //   if (location && location !== '') {
  //     jobsCopy = jobsCopy.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()));
  //   }

  //   if (jobType.length > 0) {
  //     jobsCopy = jobsCopy.filter((job) => jobType.includes(job.jobType));
  //   }

  //   if (jobLevel.length > 0) {
  //     jobsCopy = jobsCopy.filter((job) => jobLevel.includes(job.experienceLevel));
  //   }

  //   setFilteredJobs(jobsCopy);
  // }

  // const sortJobs = async (order) => {
  //   let jobsCopy = filteredJobs.slice();
  //   if (order === 'High-Low') {
  //     setFilteredJobs(jobsCopy.sort((a, b) => b.salary - a.salary));
  //   } else {
  //     setFilteredJobs(jobsCopy.sort((a, b) => a.salary - b.salary));
  //   }
  // }

  // useEffect(() => {
  //   applyFilter();
  // }, [title, location, jobType, jobLevel, jobs]);

  useEffect(() => {
    return () => {
      handleTitle.cancel();
    };
  }, [handleTitle]);

  const resetFilters = () => {
    setTitle('');
    setJobType([]);
    setJobLevel([]);
    setPage(1);
  }

  // const isFiltered = title || jobType.length > 0 || jobLevel.length > 0;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const [loader, setLoader] = useState(false);

  const saveAJob = async (id) => {
    try {
      if (auth.status !== 'authenticated' || auth.role !== 'user') {
        return navigate('/login');
      }
      setLoader(true);

      const response = await axiosInstance.post(`/api/v1/user/save-job/${id}`)
      if (response.data.success) {
        toast.success(response.data.message);
        setSavedJobs((prev) => [...prev, response.data.savedJob]);
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  const fetchJobs = async (page) => {
    try {

      const params = new URLSearchParams();
      params.append('page', page);
      params.append('limit', 10);

      if (title) params.append('title', title);
      if (sort) params.append('sort', sort);

      jobType.forEach((type) => params.append('jobType', type));
      jobLevel.forEach((level) => params.append('jobLevel', level));

      const response = await axiosInstance.get(`/api/v1/user/jobs?${params.toString()}`);
      if (response.data.success) {
        setJobs(response.data.jobs);
        setTotalJobs(response.data.totalJobs);
        setTotalPages(response.data.totalPages);
        setPage(response.data.currentPage);
      }
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  }

  useEffect(() => {
    if (auth.status === 'authenticated' && auth.role === 'user') {
      fetchJobs(page);
    }
  }, [auth, page, title, jobType, jobLevel, sort]);

  if (jobs.length === 0) {
    return <Loader />
    // return (
    //   <div className="w-full h-screen pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
    //     <div className="w-full h-screen bg-white border border-slate-200 rounded-2xl shadow-sm flex flex-col gap-4 items-center justify-center">
    //       <h1 className="text-2xl font-semibold text-slate-800">No jobs found</h1>
    //       <p onClick={()=> window.location.reload()} className="my-2 text-blue-500 hover:text-underline cursor-pointer transition-all duration-200">Refresh</p>
    //     </div>
    //   </div>
    // )
  }

  if (loader) {
    return <Loader />
  }

  return (
    <main className="pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Search Section */}
      <section className="mb-10">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center">

          <div className="relative flex-1 w-full">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={titleInput}
              onChange={(e) => {
                handleTitle(e.target.value);
                setTitleInput(e.target.value);
              }}
              placeholder="Job title, keywords, or company"
              className="w-full pl-12 pr-4 py-4 bg-slate-100 rounded-xl outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <aside className="w-full md:w-72 shrink-0 border-slate-200 rounded-2xl p-5 shadow-sm">
          <div className="sticky top-24 space-y-8">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Filters</h2>
              {title || jobType.length > 0 || jobLevel.length > 0 && <button onClick={() => resetFilters()} className="text-blue-600 text-sm font-semibold cursor-pointer hover:underline">
                Clear all
              </button>}
            </div>

            {/* Job Type */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
                Job Type
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobType('Full Time')}
                    checked={jobType.includes('Full Time')}
                    className="cursor-pointer"
                  />
                  <span>Full Time</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobType('Part Time')}
                    checked={jobType.includes('Part Time')}
                    className="cursor-pointer"
                  />
                  <span>Part Time</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobType('Internship')}
                    checked={jobType.includes('Internship')}
                    className="cursor-pointer"
                  />
                  <span>Internship</span>
                </label>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
                Experience Level
              </h3>

              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobLevel('Juniour')}
                    checked={jobLevel.includes('Juniour')}
                    className="cursor-pointer"
                  />
                  <span>Juniour</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobLevel('Intermediate')}
                    checked={jobLevel.includes('Intermediate')}
                    className="cursor-pointer"
                  />
                  <span>Intermediate</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    onChange={() => toggleJobLevel('Senior')}
                    checked={jobLevel.includes('Senior')}
                    className="cursor-pointer"
                  />
                  <span>Senior</span>
                </label>
              </div>
            </div>

            {/* Salary */}
            <div>
              <h3 className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-4">
                Salary Range
              </h3>

              <select onChange={(e) => {
                setSort(e.target.value);
                setPage(1);
              }} className="px-4 py-2 border border-slate-200 focus:outline-none">
                <option value="">Sort by range</option>
                <option value="Low-High">Low to High</option>
                <option value="High-Low">High to Low</option>
              </select>
            </div>

          </div>
        </aside>

        {/* Jobs */}
        <section className="flex-1">
          {/* Top Bar */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-6">
            <p className="text-slate-500 text-sm">
              Showing{" "}
              {jobs ? "all " : "matching "}
              <span className="font-bold text-slate-900">
                {totalJobs}
              </span>{" "}
              jobs
            </p>
          </div>

          {/* Job Cards */}
          <div className="w-full space-y-5">
            {jobs.map((job) => (
              <div
                key={job._id}
                className="group bg-white border border-slate-200 rounded-2xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition duration-300 flex flex-col md:flex-row gap-5"
              >
                {/* Logo */}
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0">
                  <img
                    src={job.recruiterData.companyLogo}
                    alt={job.recruiterData.companyName}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition">
                        {job.title}
                      </h3>

                      <p className="text-slate-500 mt-1">
                        {job.recruiterData.companyName}
                      </p>
                    </div>

                    <button className="p-2 rounded-full hover:bg-slate-100">
                      <FaBookmark onClick={() => saveAJob(job._id)} className="text-slate-500 cursor-pointer" />
                    </button>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-5">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {job.jobType}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                      Rs: {convertData(job.salary)}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                      {job.experienceLevel}
                    </span>

                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-700">
                      {job.recruiterData.location}
                    </span>

                    {job.experienceLevel === "Senior" && (
                      <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-100 text-orange-700">
                        Urgent
                      </span>
                    )}
                  </div>

                  <p className="mt-4 text-slate-600 line-clamp-2">
                    {job.description}
                  </p>

                  <div className="mt-5 pt-5 border-t border-slate-200 flex flex-col sm:flex-row gap-3 justify-between sm:items-center">
                    <span className="text-sm text-slate-500">
                      Last Date:{" "}
                      {new Date(job.lastDateToApply).toISOString().split("T")[0]}
                    </span>

                    <Link to={`/detail/${job._id}`} onClick={scrollToTop}>
                      <button className="bg-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 cursor-pointer">
                        View Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="my-10">
            <Pagination
              totalPages={totalPages}
              page={page}
              setPage={setPage}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Jobs