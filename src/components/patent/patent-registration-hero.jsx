export default function PatentRegistrationHero() {
  return (
    <section className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <img
                src="https://img.freepik.com/free-photo/patented-brand-identity-license-product-copyright-concept_53876-122707.jpg"
                alt="Patent Registration Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <div className="bg-amber-500 text-white p-6 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">Quick & Easy</h1>
              <h2 className="text-2xl md:text-3xl font-bold">
                Patent <span className="text-blue-900">Registration</span>
              </h2>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">Patent Verification within 24 hours</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">Get Patent Application Number in a day</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">No Hidden cost, complete transparency</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">Complete handling of Examinations</p>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-black rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-800 text-lg">Assured Government protection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
