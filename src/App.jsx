// src/App.jsx
import { useState, useEffect } from "react"
import TopHeader from "./components/TopHeader"
import Navigation from "./components/Navigation"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
// Import MainRoutes instead of listing each section here
import MainRoutes from "./mainRoutes"
import Footer from "./components/footer"

function App() {
  const [showTopHeader, setShowTopHeader] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      const isScrollingDown = currentPosition > lastScrollTop

      // Hide top header when scrolling down; show when scrolling up
      if (isScrollingDown) {
        setShowTopHeader(false)
      } else {
        setShowTopHeader(true)
      }

      setLastScrollTop(currentPosition <= 0 ? 0 : currentPosition)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollTop])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Social icons fixed on the left (desktop only) */}
      <div className="fixed left-0 top-1/3 hidden md:flex flex-col z-20">
        <a
          href="#"
          className="bg-[#3b5998] text-white p-3 hover:bg-blue-700 transition"
        >
          <Facebook className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="bg-black text-white p-3 hover:bg-gray-800 transition"
        >
          <Twitter className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="bg-[#0077b5] text-white p-3 hover:bg-blue-600 transition"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="#"
          className="bg-[#e4405f] text-white p-3 hover:bg-pink-600 transition"
        >
          <Instagram className="h-5 w-5" />
        </a>
      </div>

      {/* TopHeader (hides/shows on scroll) */}
      <div
        className={`bg-amber-500 text-white py-2 transition-all duration-300 ${
          showTopHeader ? "transform-none" : "-translate-y-full"
        }`}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 40,
          top: 0,
        }}
      >
        <TopHeader />
      </div>

      {/* Navigation bar (shifts down by 40px if TopHeader is visible) */}
      <div
        className="bg-white border-b transition-all duration-300 shadow-sm"
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 30,
          top: showTopHeader ? "40px" : 0,
        }}
      >
        <Navigation />
      </div>

      {/* The “routing placeholder”: we removed hard‐coded components and replaced with <MainRoutes /> */}
      <main className="flex-grow" style={{ paddingTop: "120px" }}>
        <MainRoutes />
      </main>
      <Footer/>
    </div>
  )
}

export default App
