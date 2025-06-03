import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Main Footer Section */}
      <div className="bg-gray-50 py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* STR Insights Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-orange-400 pb-2 inline-block">
                Gyan Insights
              </h3>
              <nav className="space-y-3">
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  About us
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Submit Portal
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Refund Policy
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </nav>
            </div>

            {/* Key Links Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-orange-400 pb-2 inline-block">
                Key links
              </h3>
              <nav className="space-y-3">
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Help Center
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Guidance & Support
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  FAQ
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Feedback
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Services
                </a>
                <a href="#" className="block text-gray-700 hover:text-gray-900 transition-colors">
                  Newsletter
                </a>
              </nav>

              {/* Social Groups Section */}
              <div className="pt-4">
                <p className="text-gray-700 mb-3">Join our groups for more updates:</p>
                <div className="flex space-x-3">
                  <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                    <Facebook className="w-6 h-6" />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a href="#" className="text-green-600 hover:text-green-800 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                    <span className="sr-only">WhatsApp</span>
                  </a>
                  <a href="#" className="text-blue-500 hover:text-blue-700 transition-colors">
                    <MessageCircle className="w-6 h-6" />
                    <span className="sr-only">Telegram</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Us Column */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900 border-b-2 border-orange-400 pb-2 inline-block">
                Contact us
              </h3>
              <div className="space-y-3 text-gray-700">
                <div>
                  <span className="font-medium">Email :-</span>
                  <div className="mt-1">
                    <a href="mailto:info@gyanpublication.com" className="hover:text-gray-900 transition-colors">
                      info@gyanpublication.com
                    </a>
                    <span>,</span>
                  </div>
                  <div>
                    <a href="mailto:youreducation88@gmail.com" className="hover:text-gray-900 transition-colors">
                      youreducation88@gmail.com
                    </a>
                    <span>,</span>
                  </div>
                  <div>
                    <a href="mailto:youreducation88gmail.comcom" className="hover:text-gray-900 transition-colors">
                      youreducation88@gmail.com
                    </a>
                  </div>
                </div>

                <div>
                  <span className="font-medium">Location:-</span> India
                </div>

                <div>
                  <span className="font-medium">Phone No:-</span>
                  <a href="tel:+917906767266" className="hover:text-gray-900 transition-colors ml-1">
                    +91 7906767266
                  </a>
                </div>

                <div>
                  <span className="font-medium">Timing:-</span> 24/7 support
                </div>

                <div className="pt-2">
                  <p className="mb-3">Visit our social approach:</p>
                  <div className="flex space-x-3">
                    <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors">
                      <Facebook className="w-6 h-6" />
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">
                      <Twitter className="w-6 h-6" />
                      <span className="sr-only">Twitter</span>
                    </a>
                    <a href="#" className="text-pink-600 hover:text-pink-800 transition-colors">
                      <Instagram className="w-6 h-6" />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-blue-700 hover:text-blue-900 transition-colors">
                      <Linkedin className="w-6 h-6" />
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="bg-gray-800 py-4 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <p className="text-white text-sm">Copyright © 2025 Gyan Counsaltancy</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors text-sm">
              Terms & condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
