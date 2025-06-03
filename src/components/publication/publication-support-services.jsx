"use client"

import { useState } from "react"
import { FileText, Users, Search, BarChart3, Shield, RefreshCw } from "lucide-react"

export default function PublicationSupportServices() {
  const [activeTab, setActiveTab] = useState("before")

  const beforeSubmissionServices = [
    {
      icon: FileText,
      title: "Journal Selection",
      description:
        "A PhD journal expert will recommend 3 to 5 journals based on your manuscript and your publication expectations.",
    },
    {
      icon: Users,
      title: "Pre-submission Peer Review",
      description:
        "Our expert reviewer will examine your manuscript from peer reviewer's point of view to identify weaknesses and suggest improvements.",
    },
    {
      icon: Search,
      title: "Plagiarism Check",
      description:
        "We will run your manuscript through iThenticate and provide a report with actionable suggestions to reduce repetition.",
    },
  ]

  const continuousSupportServices = [
    {
      icon: BarChart3,
      title: "Rejection Analysis",
      description:
        "If you are rejected by a journal recommended by us, we will analyze the causes and advise the next submission.",
    },
    {
      icon: Shield,
      title: "Rejection Shield",
      description:
        "Our editors will help you revise your manuscript against peer-reviewer comments to ensure all questions are adequately addressed.",
    },
    {
      icon: RefreshCw,
      title: "Resubmission support",
      description:
        "We will resubmit your revised manuscript with a new cover letter explaining the revisions to the same journal up to 3 times.",
    },
  ]

  const currentServices = activeTab === "before" ? beforeSubmissionServices : continuousSupportServices
  const currentDescription =
    activeTab === "before"
      ? "Specialized service targeting each step in the journal submission process."
      : "Comprehensive after-sale services within 365 days after delivery to support you till you're published!"

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Journal Publication Support Services</h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            With 18 years of experience helping researchers publish in SCI journals, we've identified the challenges in
            the journal submission process and designed services to smooth the way and significantly increase authors'
            chances of successful publication.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center mb-8">
          <div className="flex bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-8 py-4 font-semibold text-lg transition-all duration-300 relative ${
                activeTab === "before" ? "bg-red-600 text-white" : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              Before Submission
              {activeTab === "before" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-600"></div>
                </div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("continuous")}
              className={`px-8 py-4 font-semibold text-lg transition-all duration-300 relative ${
                activeTab === "continuous" ? "bg-red-600 text-white" : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              Continuous Support
              {activeTab === "continuous" && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-600"></div>
                </div>
              )}
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
          {/* Description */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700 font-medium">{currentDescription}</p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentServices.map((service, index) => (
              <div key={`${activeTab}-${index}`} className="text-center space-y-4">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-gray-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
