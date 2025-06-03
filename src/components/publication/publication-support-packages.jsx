import { FileText, Settings } from "lucide-react"

export default function PublicationSupportPackages() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Publication Support Packages</h2>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Advanced Editing Full Support Pack */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 lg:p-8">
            {/* Header with Icon */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <FileText className="w-8 h-8 text-gray-600" />
                <Settings className="w-5 h-5 text-orange-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Advanced Editing</h3>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900">Full Support Pack</h4>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Advanced Editing Full Support Pack simplifies the research publication process for early-stage
              researchers. From journal selection to submission and resubmission support, we make journal submission
              easy and efficient.
            </p>

            {/* Services Included */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Services included:</h5>
              <ul className="space-y-2">
                {[
                  "Journal Selection",
                  "Pre-Submission Peer Review",
                  "Plagiarism Check",
                  "Substantive Editing",
                  "Formatting and Artwork Editing",
                  "Journal Submission",
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opt for this service */}
            <div className="mb-6">
              <div className="bg-red-600 text-white px-4 py-2 rounded-tl-lg rounded-br-lg inline-block mb-3">
                <span className="font-semibold">Opt for this service if :</span>
              </div>
              <ul className="space-y-3">
                {[
                  "You require expert guidance on selecting a target journal",
                  "You want to preempt journal peer reviewers' criticism by identifying the weaknesses in your manuscript before submission",
                  "You are submitting your research to an SCI journal for the first time",
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Know More Link */}
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Know More
              </a>
            </div>
          </div>

          {/* Advanced Editing Easy-Go Pack */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-6 lg:p-8">
            {/* Header with Icon */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <FileText className="w-8 h-8 text-gray-600" />
                <Settings className="w-5 h-5 text-orange-500 absolute -top-1 -right-1" />
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold text-gray-900">Advanced Editing</h3>
                <h4 className="text-xl lg:text-2xl font-bold text-gray-900">Easy-Go Pack</h4>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              Advanced Editing Easy-Go Pack is ideal for authors with a target journal. We handle everything from
              editing the manuscript, formatting the artwork, to submitting to the journal, ensuring a smooth submission
              process.
            </p>

            {/* Services Included */}
            <div className="mb-6">
              <h5 className="font-semibold text-gray-900 mb-3">Services included:</h5>
              <ul className="space-y-2">
                {["Substantive Editing", "Formatting and Artwork Editing", "Journal Submission"].map(
                  (service, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0"></div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ),
                )}
              </ul>
            </div>

            {/* Opt for this service */}
            <div className="mb-6">
              <div className="bg-red-600 text-white px-4 py-2 rounded-tl-lg rounded-br-lg inline-block mb-3">
                <span className="font-semibold">Opt for this service if :</span>
              </div>
              <ul className="space-y-3">
                {[
                  "You have decided on a target journal",
                  "You want to save time and effort by entrusting all editing and formatting work to specialists",
                  "You want to submit your paper to a journal in the shortest time",
                ].map((criteria, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Know More Link */}
            <div className="text-right">
              <a href="#" className="text-blue-600 hover:text-blue-800 underline font-medium">
                Know More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
