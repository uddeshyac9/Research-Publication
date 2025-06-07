// File: components/JournalsSection.jsx
import {
  ThumbsUp,
  Clock,
  Lightbulb,
  ShieldCheck,
  Target,
  Star,
 Headphones,
  TrendingUp
} from "lucide-react"

const JournalsSection = () => {
  const journals = [
    { id: 1, name: "Trustworthy & Transparent",     icon: <ShieldCheck className="h-5 w-5" /> },
    { id: 2, name: "On-Time Delivery",              icon: <Clock className="h-5 w-5" /> },
    { id: 3, name: "Innovative Approach",           icon: <Lightbulb className="h-5 w-5" /> },
    { id: 4, name: "Quality-First Process",         icon: <Star className="h-5 w-5" /> },
    { id: 5, name: "Research-Oriented",             icon: <Target className="h-5 w-5" /> },
    { id: 6, name: "Futuristic Approch",         icon: <ThumbsUp className="h-5 w-5" /> },
    { id: 8, name: "Personalized Support",     icon: <Headphones className="h-5 w-5" /> },
    { id: 8, name: "Guaranteed Growth",             icon: <TrendingUp className="h-5 w-5" /> },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Why Choose Gyaan Consultancy for Your Growth & Innovation?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {journals.map((journal) => (
            <div
              key={journal.id}
              className="group rounded-lg shadow-lg p-6 flex items-center justify-center transition-transform hover:scale-105 bg-white hover:bg-gradient-to-r hover:from-amber-300 hover:to-amber-400"
            >
              <div className="flex items-center">
                <div className="rounded-full p-2 mr-3 bg-gray-100 group-hover:bg-white/80 transition-colors">
                  {journal.icon}
                </div>
                <span className="text-lg font-medium">{journal.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default JournalsSection
