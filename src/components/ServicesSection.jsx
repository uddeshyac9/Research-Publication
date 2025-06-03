import { FileText, Book, Star } from "lucide-react"

const ServicesSection = () => {

   const services = [
    {
      id: 1,
      title: "RESEARCH PUBLICATION",
      icon: <FileText className="h-10 w-10 text-amber-500" />,
      description:
        "Gyan Counsaltancy offers a comprehensive range of publication and consultation services for articles indexed in top‐tier databases such as Scopus.",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 2,
      title: "CONTENT WRITING",
      icon: <Book className="h-10 w-10 text-green-500" />,
      description:
        "Our Content Writing service covers everything from thesis/paper writing to blog posts and corporate collateral—tailored to your exact requirements.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
    {
      id: 3,
      title: "PATENT",
      icon: <Star className="h-10 w-10 text-amber-500" />,
      description:
        "We guide inventors through every step of the patent process—prior‐art search, drafting specifications, filing and follow‐up with patent offices.",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 4,
      title: "WEBSITE & APP DEVELOPMENT",
      icon: <FileText className="h-10 w-10 text-green-500" />,
      description:
        "From static websites to full‐stack mobile apps, our developers build responsive, SEO‐friendly, and high‐performance solutions on time and on budget.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
    {
      id: 5,
      title: "ACADEMIC PROJECT",
      icon: <Book className="h-10 w-10 text-amber-500" />,
      description:
        "Whether it’s engineering, management or science, we provide end‐to‐end support: topic selection, literature review, implementation, and final documentation.",
      iconBgColor: "bg-amber-50",
      iconBorderColor: "border-amber-500",
    },
    {
      id: 6,
      title: "PUBLICATION SUPPORT",
      icon: <Star className="h-10 w-10 text-green-500" />,
      description:
        "Need help with journal selection, formatting, peer‐review submission or post‐acceptance services? We’re your one‐stop team for every step toward publication.",
      iconBgColor: "bg-green-50",
      iconBorderColor: "border-green-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12">
          <h3 className="text-amber-500 uppercase font-semibold mb-2 text-center">OUR SERVICES</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            From Articles, Publications to Books, We Make Your Research Shine!
          </h2>
          <p className="text-gray-600 max-w-4xl mx-auto text-center">
            STR-Publication Services stands as the premier choice for publishing and consultation services, specializing
            in scholarly articles for prestigious research databases like SCOPUS, Web of Science, PubMed, and Google
            Scholar. Our dedicated team expedites the publication process, ensuring your articles receive the quality
            and recognition they deserve in top-tier indexing journals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white border border-gray-200 rounded-lg p-8 transition-all hover:shadow-lg flex flex-col items-center text-center"
            >
              <div
                className={`${service.iconBgColor} ${service.iconBorderColor} border-2 rounded-full p-5 mb-6 inline-flex items-center justify-center`}
              >
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <a href="#" className="text-amber-500 font-medium hover:text-amber-600 transition-colors mt-auto">
                Read more
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-amber-500 text-white px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
          >
            Know more
          </a>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
