import BookImage from "../assets/bookImage.jpg"

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Social media sidebar */}
 

        <div className="text-center mb-12">
          <h2 className="text-red-500 uppercase tracking-wide font-semibold mb-2">ABOUT Gyaan Counsaltancy</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">
  Fast-Track Your Research with Publication, Patent & Digital Expertise
</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
                
  Gyaan Consultancy provides end-to-end support—from patent &amp; IPR protection and publication assistance to Web/App development, IT solutions, and digital marketing. We help researchers and businesses secure their innovations with comprehensive prior-art searches and filing guidance; craft high-impact manuscripts, theses, and technical articles; design and deploy responsive websites and mobile apps; implement scalable IT infrastructures and custom software; and drive engagement through targeted SEO, content, and social media campaigns. Our tailored approach ensures seamless execution, timely delivery, and measurable growth—so you can focus on innovation while we handle the rest.

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
