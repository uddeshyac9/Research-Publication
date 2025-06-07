export default function OurTopServices() {
  const services = [
  {
  title: "Thesis & Book Writing Support",
  description:
    "Gyaan Consultancy offers expert assistance for both thesis and book writing, covering everything from topic selection, literature review, and research methodology to drafting, editing, formatting, and final submission. Ideal for researchers, scholars, and academic authors.",
},
    {
      title: "Research Paper:",
      description:
        "Aimlay offers assistance with all stages of research paper writing, from conceptualization to publication which help with defining research objectives, conducting literature reviews & designing methodologies.",
    },
    {
      title: "Publication Support:",
      description:
        "Aimlay guides researchers through the publication process, from selecting appropriate journals to formatting manuscripts and addressing reviewer feedback. By providing insights into journal selection criteria.",
    },
    {
      title: "Synopsis Writing:",
      description:
        "Aimlay assists researchers in crafting concise and compelling synopsis that effectively summarize the key aspects of their research projects.",
    },
    {
      title: "Dissertation Assistance:",
      description:
        "Aimlay offers comprehensive support for graduate students undertaking dissertations. This includes guidance on topic selection, proposal development, literature review & research design.",
    },
    {
      title: "Data Analysis:",
      description:
        "Aimlay assists in analyzing your research data using various statistical and analytical methods. They help interpret the results accurately and present them clearly, ensuring the data supports your research objectives and findings effectively.",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="border-2 border-orange-400 rounded-3xl p-4 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-500 uppercase">
              THESISWRITING.IN - OUR TOP SERVICES
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left side - Services List */}
          <div className="space-y-6">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-gray-600 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <span className="font-semibold text-gray-800">{service.title}</span>
                  <span className="text-gray-600 ml-1">{service.description}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="border-2 border-orange-400 rounded-lg p-6 bg-gray-50 max-w-md w-full">
              <img
                src="https://thesiswriting.in/wp-content/uploads/2024/06/8848853.jpg"
                alt="Thesis Writing Services Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
