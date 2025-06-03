export default function PatentRegistrationProcess() {
  const processSteps = [
    {
      title: "Necessity of an NDA",
      description:
        "Non-Disclosure Agreement Signing with us will assure and provide you with the confidence to share without resistance. It preserves the gist of your idea.",
    },
    {
      title: "Patent Verification",
      description:
        "This is the foremost step to knowing the authenticity and novelty of the concept. To confirm that our professionals search through multiple databases & published papers.",
    },
    {
      title: "Temporary Filing",
      description:
        "To remove the threat of sharing while the idea is raw, the government has made a provision to file the conceptual background initially, reserving your rights for the completion.",
    },
    {
      title: "Complete Filing",
      description:
        "This procedure is the entire disclosure of the provisional filed, which needs to be submitted within 12 months from the initial date to obtain the rights over the complete working concept.",
    },
  ]

  return (
    <section className="bg-gray-100 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Patent Registration Process</h2>
          <div className="w-16 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-700 text-lg max-w-4xl mx-auto leading-relaxed">
            A patent is an intangible asset to the owner so we guarantee 100% security and confidentiality about the
            concept till it is registered under the Government.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 min-h-[300px] flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">{step.title}</h3>
              <p className="text-gray-700 leading-relaxed text-justify flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
