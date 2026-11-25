import React, { useContext, useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiMessageCircle, FiHelpCircle, FiGlobe } from "react-icons/fi";
import { Context } from "../context/context";
import axiosInstance from "../utils/axiosInstance.js";
import Loader from "../components/loader.jsx";
import { toast } from "react-toastify";

const Contact = () => {

  const { auth, navigate } = useContext(Context);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const sendContactMessage = async (e) => {
    e.preventDefault();
    try {
      if (auth.status !== 'authenticated' || auth.role !== 'user') {
        return navigate('/user-login');
      }

      setLoader(true);
      const response = await axiosInstance.post(`/api/v1/user/send-contact-message`, { name, email, subject, message });
      if (response.data.success) {
        toast.success(response.data.message);
      }

    } catch (error) {
      toast.error(error.response?.data?.message);
    } finally {
      setLoader(false);
    }
  }

  if (loader) {
    return <Loader />
  }

  return (
    <main className="pt-10 pb-16 px-4 md:px-10 max-w-6xl mx-auto min-h-screen">

      {/* HERO */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Get in Touch with RiseWorks
        </h1>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Whether you're a job seeker, recruiter, or partner — we're here to help you
          build better career opportunities and hiring experiences.
        </p>
      </section>

      {/* CONTACT GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* LEFT INFO PANEL */}
        <div className="bg-white shadow-md rounded-xl p-6 space-y-6">

          <h2 className="text-lg font-semibold text-gray-900">
            Contact Information
          </h2>

          <div className="space-y-4 text-sm text-gray-600">

            <div className="flex items-start gap-3">
              <FiMail className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Email Support</p>
                <p>support@riseworks.com</p>
                <p className="text-xs text-gray-400">24/7 email response system</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiPhone className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Phone</p>
                <p>+92 300 1234567</p>
                <p className="text-xs text-gray-400">Mon - Fri, 9AM - 6PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiMapPin className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Office</p>
                <p>Islamabad, Pakistan</p>
                <p className="text-xs text-gray-400">Headquarters</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiGlobe className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Website</p>
                <p>www.riseworks.com</p>
                <p className="text-xs text-gray-400">Global job platform</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FiClock className="text-blue-600 mt-1" />
              <div>
                <p className="font-medium text-gray-800">Working Hours</p>
                <p>Mon - Fri: 9AM - 6PM</p>
                <p className="text-xs text-gray-400">Weekend support limited</p>
              </div>
            </div>

          </div>
        </div>

        {/* FORM PANEL */}
        <form onSubmit={sendContactMessage} className="lg:col-span-2 bg-white rounded-xl p-6 shadow-md">

          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Send us a Message
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)} value={name}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)} value={email}
              className="bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              onChange={(e) => setSubject(e.target.value)} value={subject}
              className="md:col-span-2 bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

            <textarea
              rows="6"
              placeholder="Write your message..."
              onChange={(e) => setMessage(e.target.value)} value={message}
              className="md:col-span-2 bg-gray-100 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
            />

          </div>

          <button type="submit" className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition cursor-pointer">
            <FiSend />
            Send Message
          </button>

        </form>
      </section>

      {/* EXTRA INFO CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <FiMessageCircle className="text-blue-600 text-xl" />
          <h3 className="font-semibold mt-2">Live Support</h3>
          <p className="text-sm text-gray-500 mt-1">
            Get instant help from our support team for urgent issues.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <FiHelpCircle className="text-blue-600 text-xl" />
          <h3 className="font-semibold mt-2">Help Center</h3>
          <p className="text-sm text-gray-500 mt-1">
            Browse FAQs and guides for job seekers and recruiters.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-5 hover:shadow-lg transition">
          <FiMail className="text-blue-600 text-xl" />
          <h3 className="font-semibold mt-2">Business Inquiries</h3>
          <p className="text-sm text-gray-500 mt-1">
            Partnerships, ads, and enterprise hiring solutions.
          </p>
        </div>

      </section>

      {/* FOOT NOTE */}
      <div className="text-center text-sm text-gray-400 mt-10">
        RiseWorks — Building smarter careers and faster hiring.
      </div>

    </main>
  );
};

export default Contact