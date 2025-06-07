import GyaanCounsaltancy from "../assets/gyaancounsaltancy-2.jpg";
import About from "../components/About";
import JournalsSection from "../components/JournalsSection";
import ReasonsSection from "../components/ReasonsSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div className="bg-[#ADD8E6] overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
         <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
  <div className="text-amber-500 uppercase tracking-wide font-semibold mb-2">
    Gyaan Counsaltancy
  </div>
  <h1 className="text-4xl font-bold mb-6 text-gray-900">
    Gyaan Counsaltancy Services
  </h1>
  <ol className="list-decimal list-inside text-gray-700 leading-relaxed mb-6 space-y-3">
    <li>
      <span className="font-semibold">Patent &amp; IPR:</span> Expert drafting, filing, and management to protect your innovations.
    </li>
    <li>
      <span className="font-semibold">Writing &amp; Publication Support:</span> High-quality research papers and technical articles for top journals and conferences.
    </li>
    <li>
      <span className="font-semibold">Web &amp; App Development:</span> Responsive websites and mobile apps tailored to researchers and businesses.
    </li>
    <li>
      <span className="font-semibold">IT Solutions:</span> End-to-end services from infrastructure setup to custom software.
    </li>
    <li>
      <span className="font-semibold">Digital Marketing:</span> SEO, content marketing, and social media strategies to boost your online presence.
    </li>
  </ol>
  <p className="text-gray-700 leading-relaxed mb-8">
    At Gyaan Counsaltancy, we bridge research, technology, and innovation to help you grow and stand out.
  </p>
  <div className="flex flex-col sm:flex-row gap-4">
    <a
      href="#"
      className="bg-amber-500 text-white text-center px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
    >
      Journals
    </a>
    <a
      href="https://wa.me/917906767266"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-amber-500 text-white text-center px-8 py-3 rounded font-medium hover:bg-amber-600 transition"
    >
      Enquiry
    </a>
  </div>
</div>


          {/* Hero image */}
          <div className="w-full lg:w-1/2 relative">
            {/* Only show the large circle on medium+ screens */}
            <div className="hidden md:block absolute -z-10 w-[500px] h-[500px] rounded-full bg-amber-500 right-0 top-0" />
            <img
              src={GyaanCounsaltancy}
              alt="Gyaan Counsaltancy Representative"
              className="relative z-10 w-full h-auto max-w-full"
            />
          </div>
        </div>
      </div>

      <About />
      <ServicesSection />
      <JournalsSection />
      <StatsSection />
      <ReasonsSection />
    </div>
  );
};

export default Home;
