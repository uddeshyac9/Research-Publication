import { Check } from "lucide-react"

const ReasonsSection = () => {
  const reasons = [
    "High quality Editing and formatting",
    "Streamlined Submission Process",
    "Guaranteed Acceptance",
    "Fast Track publication",
    "End-to-End Support",
    "Flexible Pricing",
    "Global Reach",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left side with image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-amber-500 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <img src="https://images.unsplash.com/photo-1592188657297-c6473609e988?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Student with publication materials" className="relative z-10 mx-auto  w-[450px] h-[450px]" />
              <div className="absolute top-10 left-0 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center z-20 border-2 border-amber-800">
                <span className="text-amber-800 font-medium flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-amber-500"
                  >
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V10H9V17ZM13 17H11V7H13V17ZM17 17H15V13H17V17Z"
                      fill="currentColor"
                    />
                  </svg>
                  Publication
                </span>
              </div>
              <div className="absolute bottom-10 right-0 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center z-20 border-2 border-amber-800">
                <span className="text-amber-800 font-medium flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-red-500"
                  >
                    <path
                      d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM18 13H13V18H11V13H6V11H11V6H13V11H18V13Z"
                      fill="currentColor"
                    />
                  </svg>
                  Submit article
                </span>
              </div>
            </div>
          </div>

          {/* Right side with reasons */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">REASONS TO WORK WITH US</h2>
            <div className="flex items-center mb-8">
              {/* <div className="text-amber-500 flex items-center">
                {Array(20)
                  .fill("~")
                  .map((_, index) => (
                    <span key={index} className="inline-block mx-0.5">
                      ~
                    </span>
                  ))}
              </div> */}
            </div>

            <div className="space-y-5">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-amber-500 rounded-full p-1 flex-shrink-0">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-gray-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReasonsSection
