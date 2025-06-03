import { ChevronRight } from "lucide-react"

export default function AcademicProjects() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-medium text-gray-800">Academic Projects</h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Academic Projects</span>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Page Title */}
        <div className="mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-blue-600 mb-6">Academic Projects for Research Scholars</h2>

          {/* Description Paragraph */}
          <p className="text-gray-700 leading-relaxed text-justify mb-12">
            Every project related to education system is what called as academic projects they are performed by post
            graduate, under graduate students and research scholars. These academic projects enhance the capabilities of
            students. They make the students mind analytical and feed them with various information. College students
            must complete their academic project in order to get through their education students knowledge and capacity
            are analyzed through these projects. Every rule for framing project is authentically followed by mainly
            institution in order to maintain their reputation. These projects are usually presented in the website or
            college. By doing so many feedback from experts can be gained.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Mini Projects Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Mini Projects</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              It can be only done by pre final year students. It gives clear idea of their concern subject to their
              students languages such as C, C++ and java are required to complete mini projects in computer science.
              Communication, data storage, client server communication and data transmission are some of the topics that
              can become mini projects. Students of electronics can base their projects on various topics such as signal
              analyzing, data communication, designing electronic circuits, hardware configuration etc. ECE mini
              projects can be done on mobile application development, computer network distribution and various types of
              communication. Other than this .net and android related topics can also be chosen for mini projects.
            </p>

            {/* Mini Projects Link */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-1">Mini Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Final Year Projects Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Final Year Projects</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Final year projects are more elaborate and prominent than mini projects. Many institutions offer guidance
              for these projects. It is a milestone in ones career recently networking has become a host shot topic
              among computer science students to do project. Projects of networking include that of wired communication,
              wireless communication, network types like MAN, LAN and WAN, mobile Adhoc, wireless sensor and web
              service. Other than networking computer science projects can also be done on multimedia, software
              application, data mining, robotics and etc. Also projects on apache Hadoop and map reduce is done by final
              year students.
            </p>

            {/* Final Year Projects Link */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-1">Final Year Projects</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* PhD Thesis Column */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">PhD Thesis</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
              Research topics in computer science cover a wide array of computer related research areas. Every research
              scholars can choose their topic based on their field of study candidates of M.Phil degree and PhD scholars
              can become the research scholars of computer science. Various topics allow the research scholars to
              present their thesis in a very enhanced and innovative manner. After selection of topic the thesis should
              be framed with the sequence of framing the problem statement, introducing a new concept, collecting data,
              implementing code. Gaining result and finally the topic is concluded by giving future scope.
            </p>

            {/* PhD Thesis Link */}
            <div className="pt-4">
              <a
                href="#"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <span className="mr-1">PhD Thesis</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* reCAPTCHA placeholder (bottom right) */}
      <div className="fixed bottom-4 right-4">
        <div className="bg-gray-100 border border-gray-300 rounded p-2 text-xs text-gray-600">
          <div className="w-16 h-16 bg-gray-200 rounded flex items-center justify-center">reCAPTCHA</div>
        </div>
      </div>
    </div>
  )
}
