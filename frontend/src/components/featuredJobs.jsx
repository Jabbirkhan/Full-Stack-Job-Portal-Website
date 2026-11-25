import { FaArrowRight } from "react-icons/fa";
import JobCard from "./jobCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../context/context.jsx";

const FeaturedJobs = () => {

  const { jobs } = useContext(Context);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  if(jobs.length === 0){
    return (
      <div className="pt-10 pb-16 px-4 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row gap-4 items-center">
          <h1 className="text-2xl font-semibold text-slate-800">No jobs found</h1>
        </div>
      </div>
    )
  }

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-slate-900">
              Featured Jobs
            </h2>

            <p className="text-slate-500 mt-2">
              Top-tier positions from high-growth companies
            </p>
          </div>

          <Link to='/jobs' onClick={scrollToTop} className="hidden group md:flex items-center gap-2 text-blue-600 font-semibold">
            See All Jobs
            <FaArrowRight className="hidden group-hover:block" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;