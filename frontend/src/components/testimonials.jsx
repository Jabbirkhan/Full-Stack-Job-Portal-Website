

const Testimonials = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 rounded-[32px] p-10 lg:p-16 text-white relative overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-4xl font-bold">
                Success Stories
              </h2>

              <p className="mt-6 text-blue-100 italic text-lg">
                "RiseWorks transformed my job search. I found a Senior
                Design role at a company I've always admired within
                just two weeks."
              </p>

              <div className="flex items-center gap-4 mt-8">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
                  alt=""
                  className="w-14 h-14 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold">
                    Sarah Jenkins
                  </h4>

                  <p className="text-blue-200 text-sm">
                    Product Designer @ Lumina
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-3xl font-bold">
                  85%
                </h3>

                <p className="text-blue-100 mt-2">
                  Higher placement rate than average boards
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl">
                <h3 className="text-3xl font-bold">
                  12 Days
                </h3>

                <p className="text-blue-100 mt-2">
                  Average time from application to interview
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;