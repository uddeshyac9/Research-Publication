import GyanCounsaltancy from "../assets/gyaancounsaltancy-2.jpg";
import About from "../components/About";
import JournalsSection from "../components/JournalsSection";
import ReasonsSection from "../components/ReasonsSection";
import ServicesSection from "../components/ServicesSection";
import StatsSection from "../components/StatsSection";

const Home = () => {
  return (
    <div className="bg-amber-50 overflow-x-hidden">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="text-amber-500 uppercase tracking-wide font-semibold mb-2">
              Gyan Counsaltancy
            </div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900">
              Gyan Counsaltancy Services
            </h1>
            <p className="text-gray-700 leading-relaxed mb-8">
              At Gyan Counsaltancy, we specialize in publishing articles in
              esteemed scholarly journals and conference proceedings. Our
              mission is to ensure that each article we publish makes a
              significant contribution to its respective field, adhering to the
              highest standards of academic excellence.
              <br />
              <br />
              In addition to our academic services, we also provide expert Web
              &amp; App Development solutions tailored for researchers,
              institutions, and businesses. From responsive websites to
              cross-platform mobile applications, Gyan Counsaltancy delivers
              scalable digital tools that enhance visibility, engagement, and
              productivity.
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
              src={GyanCounsaltancy}
              alt="Gyan Counsaltancy Representative"
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
