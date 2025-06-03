import { Check } from "lucide-react"

export default function PublicationSupportHero() {
  const benefits = [
    "End-to-end Support through the entire journal submission process",
    "Expert guidance to maximize chances of acceptance",
    "Ensure adherence to journal submission guidelines",
    "Support unlimited rounds of revision during journal peer review",
    "Opt for packages or select the services you need",
  ]

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Breadcrumb Navigation */}
     
          <header className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-medium text-gray-800">Publication Support</h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Publication Support</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Publication Support Services
              </h1>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-600" strokeWidth={2} />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <img
                  src="https://img.freepik.com/free-photo/person-working-office_23-2149229057.jpg?t=st=1748985374~exp=1748988974~hmac=e9b476d0cdc9bd60847376253e8611149ee5462ea88e8843a14c17f84e864dcc&w=2000"
                  alt="Professional woman working on laptop - Publication Support Services"
                  className="w-full max-w-lg h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
