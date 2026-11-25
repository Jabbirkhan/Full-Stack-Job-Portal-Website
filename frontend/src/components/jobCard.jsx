import {FaMoneyBillWave,FaBriefcase,FaBuilding} from "react-icons/fa";
import { convertData } from "../utils/converter.js";
import { Link } from "react-router-dom";

const JobCard = ({ job }) => {

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
      <div className="flex items-start justify-between">
        <img
          src={job.recruiterData.companyLogo}
          alt={job.recruiterData.companyName}
          className="w-12 h-12 rounded-lg object-cover"
        />

        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
          {job.jobType}
        </span>
      </div>

      <h3 className="text-xl font-semibold mt-5">
        {job.title}
      </h3>

      <div className="flex items-center gap-2 mt-2 text-slate-500">
        <FaBuilding />
        <span>{job.recruiterData.companyName}</span>
      </div>

      <p className="text-slate-600 mt-4 line-clamp-2">
        {job.description}
      </p>

      <div className="border-t mt-5 pt-5 space-y-3">
        <div className="flex items-center gap-2 text-slate-600">
          <FaBriefcase />
          <span>{job.experienceLevel}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-600">
          <FaMoneyBillWave />
          <span>
            Rs: {convertData(job.salary)}
          </span>
        </div>
      </div>

      <Link to={`/detail/${job._id}`} onClick={scrollToTop}>
        <button className="w-full mt-5 bg-blue-50 text-blue-600 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-pointer">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default JobCard;