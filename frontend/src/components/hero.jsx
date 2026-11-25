import {FaCheckCircle,FaChevronRight} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    navigate('/jobs');
  }

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-linear-to-tr from-green-400 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
            <FaCheckCircle />
            2,500+ New Jobs Posted Today
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-6 leading-tight">
            Find Your Dream Job Today
          </h1>

          <p className="text-lg text-slate-600 mt-6 max-w-xl">
            Discover opportunities from top companies and build your future.
            RiseWorks connects world-class talent with innovative teams.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <button onClick={scrollToTop} className="bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-2">
              Find Jobs
              <FaChevronRight />
            </button>

            <button onClick={scrollToTop} className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-500 hover:text-white cursor-pointer transition-colors duration-300">
              Latest Jobs
            </button>
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="bg-white/70 backdrop-blur-lg p-5 rounded-3xl shadow-xl border">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="office"
              className="rounded-2xl h-[500px] w-full object-cover"
            />
          </div>

          <div className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <FaCheckCircle className="text-green-600" />
            </div>

            <div>
              <p className="font-semibold text-sm">
                Application Sent!
              </p>

              <p className="text-xs text-slate-500">
                2 mins ago
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;