// File: components/JournalsSection.jsx
import { Award, Search, Globe, Settings, BookOpen, FileText, CheckSquare, Calendar } from "lucide-react"

const JournalsSection = () => {
  const journals = [
    { id: 1, name: "Top-tier Journals",       icon: <Award className="h-5 w-5" /> },
    { id: 2, name: "Scopus Indexed",          icon: <Search className="h-5 w-5" /> },
    { id: 3, name: "Web of Science",          icon: <Globe className="h-5 w-5" /> },
    { id: 4, name: "Engineering Index",       icon: <Settings className="h-5 w-5" /> },
    { id: 5, name: "Google Scholar",          icon: <BookOpen className="h-5 w-5" /> },
    { id: 6, name: "ABDC Indexed",            icon: <FileText className="h-5 w-5" /> },
    { id: 7, name: "UGC Listed Journals",     icon: <CheckSquare className="h-5 w-5" /> },
    { id: 8, name: "Backdate Journals",       icon: <Calendar className="h-5 w-5" /> },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Explore the wide array of journals available for your publication
          </h2>
          {/* <div className="flex items-center justify-center mb-2">
            <span className="mx-4 text-xl font-medium text-amber-500">Guaranteed Acceptance</span>
          </div> */}
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
