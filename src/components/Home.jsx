import GyanCounsaltancy from "../assets/gyaancounsaltancy-2.jpg"

const Home = () => {
  return (
    <div className="bg-amber-50">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
        

          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="text-amber-500 uppercase tracking-wide font-semibold mb-2">Gyan Counsaltancy</div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Gyan Counsaltancy Services</h1>
            <p className="text-gray-700 leading-relaxed mb-8">
              At Gyan Counsaltancy, we specialize in publishing articles in esteemed scholarly journals and conference
              proceedings. Our mission is to ensure that each article we publish makes a significant contribution to its
              respective field, adhering to the highest standards of academic excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="bg-amber-500 text-white text-center px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
              >
                Journals
              </a>
              <a
                href="#"
                className="bg-amber-500 text-white text-center px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
              >
                Submit article
              </a>
            </div>
          </div>

          {/* Hero image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-amber-500 right-0 top-0"></div>
              <img
                src={GyanCounsaltancy}
                alt="Gyan Counsaltancy Representative"
                className="relative z-10 w-full max-w-[600px]"
              />

              {/* Floating UI elements */}
              {/* <div className="absolute top-20 right-10 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center z-20">
                <span className="text-amber-800 font-medium">∞</span>
                <span className="ml-2 text-amber-800 font-medium">Journals</span>
              </div> */}

              {/* <div className="absolute bottom-10 left-10 bg-white rounded-lg px-4 py-2 shadow-lg flex items-center z-20">
                <span className="text-amber-800 mr-2">✓</span>
                <span className="text-amber-800 font-medium">Publication</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
