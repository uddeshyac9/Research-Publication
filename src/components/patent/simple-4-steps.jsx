export default function SimpleFourSteps() {
  const steps = [
    {
      number: "Step 1",
      title: "Details Submission with NDA",
      description: "",
    },
    {
      number: "Step 2",
      title: "Patent Verification",
      description: "",
    },
    {
      number: "Step 3",
      title: "Patent Drafting, Complete OR Provisional",
      description: "",
    },
    {
      number: "Step 4",
      title: "Submission to GOI with Form and final drafting",
      description: "",
    },
  ]

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple 4 steps Required to file PATENT
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center min-h-[200px] flex flex-col justify-center"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.number}</h3>
              <p className="text-gray-700 font-medium leading-relaxed">{step.title}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">Get Your PATENT within 48 hours</h3>
        </div>
      </div>
    </section>
  )
}
