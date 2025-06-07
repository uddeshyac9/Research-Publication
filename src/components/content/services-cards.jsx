import { Users, FileText, BarChart3, Clock, Shield, GraduationCap, Calendar, BookOpen } from "lucide-react"

export default function ServicesCards() {
  const services = [
    {
      icon: Users,
      title: "24/7 Support",
    },
    {
      icon: FileText,
      title: "Professional Academic Writing",
    },
    {
      icon: BarChart3,
      title: "Data Analysis (SPSS, AMOS, STATA)",
    },
    {
      icon: Clock,
      title: "On-Time Work Delivery",
    },
    {
      icon: Shield,
      title: "Plagiarism Free",
    },
    {
      icon: GraduationCap,
      title: "Publication Support",
    },
    {
      icon: Calendar,
      title: "Turnitin Report",
    },
    {
      icon: BookOpen,
      title: "AI Free Content",
    },
  ]

  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon Container */}
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <service.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
