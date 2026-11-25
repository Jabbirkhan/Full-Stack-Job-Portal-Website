import React from "react";
import { FiBriefcase, FiUsers, FiTrendingUp, FiGlobe } from "react-icons/fi";

const About = () => {
  return (
    <main className="pt-10 pb-16 px-4 md:px-10 max-w-6xl mx-auto min-h-screen">

      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About RiseWorks</h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          RiseWorks is a modern job portal designed to connect talent with opportunity.
          We help candidates discover jobs and help recruiters find the right people faster.
        </p>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <FiBriefcase className="text-blue-600 text-2xl" />
          <h3 className="font-semibold text-lg mt-3">Job Opportunities</h3>
          <p className="text-gray-500 text-sm mt-1">
            Thousands of verified jobs across tech, design, and business.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <FiUsers className="text-blue-600 text-2xl" />
          <h3 className="font-semibold text-lg mt-3">Smart Hiring</h3>
          <p className="text-gray-500 text-sm mt-1">
            Recruiters can quickly find and manage top candidates.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <FiTrendingUp className="text-blue-600 text-2xl" />
          <h3 className="font-semibold text-lg mt-3">Career Growth</h3>
          <p className="text-gray-500 text-sm mt-1">
            Track applications and improve your career journey.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
          <FiGlobe className="text-blue-600 text-2xl" />
          <h3 className="font-semibold text-lg mt-3">Global Reach</h3>
          <p className="text-gray-500 text-sm mt-1">
            Work opportunities from remote and international companies.
          </p>
        </div>

      </section>

      {/* Mission */}
      <section className="mt-14 bg-white shadow-md rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
        <p className="text-gray-600 mt-3 leading-relaxed">
          At RiseWorks, our mission is to simplify hiring and empower professionals
          by providing a seamless job search experience. We believe finding a job
          should be fast, transparent, and stress-free.
        </p>
      </section>

    </main>
  );
};

export default About