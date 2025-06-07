import { FileText, Book, Star } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Publication Support",
      icon: <FileText className="h-8 w-8 text-amber-500" />,
      description:
        "Comprehensive guidance for publishing in top‐tier journals (Scopus, Web of Science).",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 2,
      title: "Content Writing",
      icon: <Book className="h-8 w-8 text-green-500" />,
      description:
        "Thesis, papers, blogs, and corporate collateral—tailored to your needs.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
    {
      id: 3,
      title: "Patents & IPR",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      description:
        "From prior‐art search to filing and follow‐up, we secure your inventions.",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 4,
      title: "Web & App Dev",
      icon: <FileText className="h-8 w-8 text-green-500" />,
      description:
        "Responsive websites and mobile apps—SEO‐friendly and high‐performance.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
    {
      id: 5,
      title: "Academic Projects",
      icon: <Book className="h-8 w-8 text-amber-500" />,
      description:
        "End‐to‐end support: topic selection, implementation, and documentation.",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 6,
      title: "Digital Marketing",
      icon: <Star className="h-8 w-8 text-green-500" />,
      description:
        "SEO, content marketing, and social media strategies to boost visibility.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
  ]

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-10">
          <h3 className="text-amber-500 uppercase font-semibold mb-1 text-center text-sm">
            Our Services
          </h3>
       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
  Publication,  Writing Support, Patents, Academic Projects, Web & App Development, IT Solutions, Digital Marketing
</h2>

     

        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-6 transition-all hover:shadow-lg flex flex-col items-center text-center"
            >
              <div
                className={`${service.iconBgColor} ${service.iconBorderColor} border-2 rounded-full p-4 mb-4 inline-flex items-center justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                {service.description}
              </p>
              <a
                href="#"
                className="text-amber-500 font-medium hover:text-amber-600 transition-colors text-sm mt-auto"
              >
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block bg-amber-500 text-white px-6 py-2 rounded font-medium hover:bg-amber-600 transition text-sm"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
