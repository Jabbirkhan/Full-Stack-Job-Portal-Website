import React, { useMemo } from 'react'
import { FaCode, FaPalette, FaBullhorn, FaChartLine, FaDollarSign, FaHeartbeat, FaGraduationCap, FaHeadset } from "react-icons/fa";
// import { all_jobs } from '../assets/assets.js';

const Categories = () => {

    const categories = [
        {
            title: "Frontend",
            icon: <FaCode />,
            color: "text-blue-600 bg-blue-100",
        },
        {
            title: "Backend",
            icon: <FaPalette />,
            color: "text-green-600 bg-green-100",
        },
        {
            title: "DevOps",
            icon: <FaBullhorn />,
            color: "text-orange-600 bg-orange-100",
        },
        {
            title: "Full Stack",
            icon: <FaChartLine />,
            color: "text-red-600 bg-red-100",
        },
        {
            title: "UI/UX",
            icon: <FaDollarSign />,
            color: "text-pink-600 bg-pink-100",
        },
        {
            title: "Data Science",
            icon: <FaHeartbeat />,
            color: "text-purple-600 bg-purple-100",
        },
        {
            title: "Machine Learning",
            icon: <FaGraduationCap />,
            color: "text-indigo-600 bg-indigo-100",
        },
        {
            title: "Mobile Development",
            icon: <FaHeadset />,
            color: "text-cyan-600 bg-cyan-100",
        }
    ]

    // const categories = useMemo(() => {
    //     return [...new Set(all_jobs.map((job) => job.jobType))];
    // }, []);

    // const icons = [
    //     <FaCode />,
    //     <FaPalette />,
    //     <FaBullhorn />,
    //     <FaChartLine />,
    //     <FaDollarSign />,
    //     <FaHeartbeat />,
    //     <FaGraduationCap />,
    //     <FaHeadset />,
    // ];

    return (
        <div>
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center mb-14">
                        <h2 className="text-4xl font-bold">
                            Explore by Category
                        </h2>

                        <p className="text-slate-500 mt-3">
                            Find the role that perfectly fits your skill set
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {categories.map((category, index) => (
                            <div key={index} className={`${category.color} shadow-lg rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-lg transition-all`}>
                                <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-2xl">
                                    {/* {icons[index % icons.length]} */}
                                    {category.icon}
                                </div>

                                <h3 className="font-semibold mt-4">
                                    {category.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Categories
