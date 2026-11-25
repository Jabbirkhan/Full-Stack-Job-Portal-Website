import React, { useContext, useState } from "react";
import { FiBold, FiItalic, FiList, FiLink, FiPlus, FiX, FiSun, FiDollarSign, FiZap } from "react-icons/fi";
import { toast } from "react-toastify";
import { all_jobs } from "../../assets/assets.js";
import { Context } from "../../context/context.jsx";
import axiosInstance from "../../utils/axiosInstance.js";
import Loader from "../../components/loader.jsx";

const AddJob = () => {

  const { auth, navigate, fetchPostedJobs } = useContext(Context)

  const [skill, setSkill] = useState("");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    salary: "",
    jobType: "",
    experienceLevel: "",
    requirements: [],
    responsibilities: [],
    skills: [],
    lastDateToApply: ""
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  }

  const addSkill = () => {
    if (!skill.trim()) return;

    const updatedSkills = [...formData.skills, skill.trim()];

    setFormData({
      ...formData,
      skills: updatedSkills
    });

    setSkill("");
  };

  const removeSkill = (index) => {
    const updatedSkills = formData.skills.filter(
      (_, i) => i !== index
    );

    setFormData({
      ...formData,
      skills: updatedSkills
    });
  };

  const [loader, setLoader] = useState(false);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if(auth.status !== 'authenticated' || auth.role !== 'recruiter'){
        return navigate('/login');
      }

      setLoader(true);

      const dataToSend = {
        ...formData,
        title: formData.title,
        description: formData.description,
        salary: formData.salary,
        jobType: formData.jobType,
        experienceLevel: formData.experienceLevel,
        requirements: formData.requirements,
        responsibilities: formData.responsibilities,
        skills: JSON.stringify(formData.skills),
        lastDateToApply: new Date(formData.lastDateToApply).toISOString()
      }

      const response = await axiosInstance.post('/api/v1/recruiter/add-job', dataToSend);
      if(response.data.success){
        toast.success(response.data.message);
        fetchPostedJobs();
        setFormData({
          title: "",
          description: "",
          salary: "",
          jobType: "",
          experienceLevel: "",
          requirements: [],
          responsibilities: [],
          skills: [],
          lastDateToApply: ""
        });
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

  return (
    <div className="bg-[#faf8ff] min-h-screen text-[#191b23] font-sans">
      <main className="pt-10 pb-20 px-4 max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Create a New Job Listing
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Attract world-class talent with a compelling job description. Reach
            over 200k active professionals today.
          </p>
        </header>

        {/* Form */}
        <form onSubmit={onSubmitHandler} className="bg-white/70 backdrop-blur-md rounded-xl p-6 md:p-10 space-y-6 shadow-sm">
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="col-span-full">
              <label className="text-sm font-medium text-gray-600">
                Job Title
              </label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                value={formData.title}
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Job Type
              </label>
              <select
                name="jobType"
                onChange={handleChange}
                value={formData.jobType}
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2"
              >
                <option value="" disabled>Select Job Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Internship</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Experience
              </label>
              <select
                name="experienceLevel"
                onChange={handleChange}
                value={formData.experienceLevel}
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2"
              >
                <option value="" disabled>Select Experience</option>
                <option>Senior</option>
                <option>Junior</option>
                <option>Intermediate</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Salary
              </label>
              <input
                name="salary"
                onChange={handleChange}
                value={formData.salary}
                type="number"
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Last Date to Apply
              </label>
              <input
                name="lastDateToApply"
                onChange={handleChange}
                value={formData.lastDateToApply}
                type="date"
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2"
              />
            </div>

          </div>

          {/* Description Editor */}
          <div>
            <label className="text-sm font-medium text-gray-600">
              Job Description
            </label>

            <div className="rounded-lg overflow-hidden mt-1">
              <textarea
                name="description"
                onChange={handleChange}
                value={formData.description}
                className="w-full min-h-40 p-4 bg-gray-100 outline-none resize-none"
              />
            </div>
          </div>

          {/* Requirements & Skills */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-600">
                Requirements
              </label>
              <textarea
                name="requirements"
                onChange={handleChange}
                value={formData.requirements}
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2 min-h-30 resize-none"
              />
            </div>
            
            <div>
              <label className="text-sm font-medium text-gray-600">
                Responsibilities
              </label>
              <textarea
                name="responsibilities"
                onChange={handleChange}
                value={formData.responsibilities}
                className="w-full mt-1 bg-gray-100 rounded-lg px-4 py-2 min-h-30 resize-none"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600">
                Skills
              </label>

              <div className="flex gap-2 mt-2">
                <input
                  name="skills"
                  onChange={(e)=>setSkill(e.target.value)}
                  value={skill}
                  placeholder="Add skill"
                  className="flex-1 bg-gray-100 rounded-lg px-3 py-2"
                  type="text"
                />
                <button
                  onClick={addSkill}
                  type="button"
                  className="bg-blue-600 text-white p-3 rounded-lg"
                >
                  <FiPlus />
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {formData.skills.map((s, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                  >
                    {s}
                    <FiX onClick={() => removeSkill(i)} className="cursor-pointer" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t">
            <p className="text-sm text-gray-500">
              By posting, you agree to our Terms & Guidelines.
            </p>

            <div className="flex gap-4 w-full md:w-auto">
              <button type="submit" className="flex-1 md:flex-none bg-blue-600 text-white px-6 py-2 rounded-lg">
                Post Job
              </button>
            </div>
          </div>
        </form>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <div className="bg-white/70 p-5 rounded-xl border">
            <FiSun className="text-yellow-500 text-xl mb-2" />
            <h3 className="font-semibold">Be Specific</h3>
            <p className="text-sm text-gray-500">
              Detailed jobs attract better candidates.
            </p>
          </div>

          <div className="bg-white/70 p-5 rounded-xl border">
            <FiDollarSign className="text-green-600 text-xl mb-2" />
            <h3 className="font-semibold">Salary Clarity</h3>
            <p className="text-sm text-gray-500">
              Transparent salary improves reach.
            </p>
          </div>

          <div className="bg-white/70 p-5 rounded-xl border">
            <FiZap className="text-blue-600 text-xl mb-2" />
            <h3 className="font-semibold">Quick Review</h3>
            <p className="text-sm text-gray-500">
              Improve listing quality instantly.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AddJob