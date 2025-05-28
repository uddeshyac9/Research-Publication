"use client"

import { useState, useEffect } from "react"
import TopHeader from "./components/TopHeader"
import Navigation from "./components/Navigation"
import Home from "./components/Home"
import About from "./components/About"
import ServicesSection from "./components/ServicesSection"
import JournalsSection from "./components/JournalsSection"
import StatsSection from "./components/StatsSection"
import ReasonsSection from "./components/ReasonsSection"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

function App() {
  const [showTopHeader, setShowTopHeader] = useState(true)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY
      const isScrollingDown = currentPosition > lastScrollTop

      // Hide top header when scrolling down, show when scrolling up
      if (isScrollingDown) {
        setShowTopHeader(false)
      } else {
        setShowTopHeader(true)
      }

      setLastScrollTop(currentPosition <= 0 ? 0 : currentPosition)
      setScrollPosition(currentPosition)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollTop])

  return (
    <div className="flex flex-col min-h-screen">

<div className="fixed left-0 top-1/3 hidden md:flex flex-col z-20">
          <a href="#" className="bg-[#3b5998] text-white p-3 hover:bg-blue-700 transition">
            <Facebook className="h-5 w-5" />
          </a>
          <a href="#" className="bg-black text-white p-3 hover:bg-gray-800 transition">
            <Twitter className="h-5 w-5" />
          </a>
          <a href="#" className="bg-[#0077b5] text-white p-3 hover:bg-blue-600 transition">
            <Linkedin className="h-5 w-5" />
          </a>
          <a href="#" className="bg-[#e4405f] text-white p-3 hover:bg-pink-600 transition">
            <Instagram className="h-5 w-5" />
          </a>
        </div>
      {/* Top header with conditional visibility */}
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

      {/* Navigation bar with fixed position on scroll */}
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

      {/* Main content with padding to account for fixed headers */}
      <main className="flex-grow" style={{ paddingTop: "120px" }}>
        <Home />
        <About />
        <ServicesSection />
        <JournalsSection />
        <StatsSection />
        <ReasonsSection />
      </main>
    </div>
  )
}

export default App
