import {FaCheckCircle,FaPaperPlane,FaRocket,FaLock} from "react-icons/fa";

const features = [
  {
    title: "Verified Companies",
    description:
      "Every employer is manually vetted to ensure legitimate job listings and safe communication.",
    icon: <FaCheckCircle />,
    color: "text-green-600 bg-green-100",
  },
  {
    title: "Easy Applications",
    description:
      "Apply with a single click using your stored profile and portfolio.",
    icon: <FaPaperPlane />,
    color: "text-blue-600 bg-blue-100",
  },
  {
    title: "Career Growth",
    description:
      "Access mentorship, webinars, and skill assessments to level up.",
    icon: <FaRocket />,
    color: "text-orange-600 bg-orange-100",
  },
  {
    title: "Secure Platform",
    description:
      "Enterprise-grade security protecting your personal data.",
    icon: <FaLock />,
    color: "text-red-600 bg-red-100",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Why Career Seekers Trust Us
          </h2>

          <p className="text-slate-500 mt-3">
            We provide the tools you need to accelerate your career growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item) => (
            <div key={item.title} className="bg-white p-8 rounded-2xl">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl ${item.color}`}>
                {item.icon}
              </div>

              <h3 className="font-semibold text-xl mt-5">
                {item.title}
              </h3>

              <p className="text-slate-500 mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;