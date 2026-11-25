import { useNavigate } from "react-router-dom";


const CTASection = () => {

  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
    navigate('/jobs');
  }

  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Ready to rise in your career?
        </h2>

        <p className="text-slate-500 mt-4 text-lg">
          Join thousands of professionals finding meaningful work every
          day on RiseWorks.
        </p>

        <button onClick={scrollToTop} className="mt-8 bg-blue-600 hover:bg-blue-700 cursor-pointer text-white px-10 py-4 rounded-xl font-semibold">
          Get Started Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;