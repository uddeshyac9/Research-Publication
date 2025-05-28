import BookImage from "../assets/bookImage.jpg"

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Social media sidebar */}
 

        <div className="text-center mb-12">
          <h2 className="text-red-500 uppercase tracking-wide font-semibold mb-2">ABOUT Gyan Counsaltancy</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">
              Publish Your Articles Faster with Our Expert Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Gyan Counsaltancy Services stands as the premier choice for publishing and consultation services,
              specializing in scholarly articles for prestigious research databases like SCOPUS, Web of Science, PubMed,
              and Google Scholar. Our dedicated team expedites the publication process, ensuring your articles receive
              the quality and recognition they deserve in top-tier indexing journals.
            </p>
            <a
              href="#"
              className="inline-block bg-amber-500 text-white px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
            >
              Read More
            </a>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="border border-gray-200 rounded-lg p-4 shadow-lg">
              <img src={BookImage} alt="Astronaut on a book" className="w-full h-auto rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
