"use client"

import { useState } from "react"
import { ChevronDown, Menu, X } from "lucide-react"
import logo from "../assets/sslogo.jpg"

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (isMenuOpen) {
      setActiveDropdown(null)
    }
  }

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  const servicesItems = [
    { name: "Content writing", link: "/content" },
    { name: "Patent", link: "/patent" },
    { name: "Website & App Development", link: "/web-agency" },
    { name: "Book Writing Support", link: "/content" },
    { name: "Acadmic Project", link: "/academic" },
    { name: "Publication Support", link: "/publication" },

  ]

  const journalsItems = [
    { name: "Thesis/Paper Writing", link: "/content" },
    { name: "Book Writing", link: "/content" },
  
  ]

  return (
    <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
      <div className="flex-shrink-0">
        <a href="/"><img src={logo} alt="Gyaan Consultancy Logo" className="h-14 w-auto" /></a>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center space-x-6">
          <a href="/" className="font-medium">
          Home
        </a>
        <div className="relative group">
          <button
            className="flex items-center space-x-1 font-medium"
            onClick={() => toggleDropdown("services")}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>Services</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-64 z-50 transition-all duration-200 ${
              activeDropdown === "services" ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {servicesItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-amber-50 text-gray-800 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <div className="relative group">
          <button
            className="flex items-center space-x-1 font-medium"
            onClick={() => toggleDropdown("journals")}
            onMouseEnter={() => setActiveDropdown("journals")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <span>Content writing</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${activeDropdown === "journals" ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`absolute top-full left-0 bg-white shadow-md rounded-md py-2 w-64 z-50 transition-all duration-200 ${
              activeDropdown === "journals" ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            onMouseEnter={() => setActiveDropdown("journals")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {journalsItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="block px-4 py-2 hover:bg-amber-50 text-gray-800 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>

        <a href="/patent" className="font-medium">
          Patent
        </a>
        <a href="/web-agency" className="font-medium">
          Website & App Development
        </a>
        <a href="/academic" className="font-medium">
          Acadmic Project
        </a>
        <a href="/publication" className="font-medium">
          Publication Support
        </a>
       
        <a
  href="https://wa.me/917906767266"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-amber-500 text-white px-6 py-2 rounded hover:bg-amber-600 transition"
>
  Enquiry
</a>

      </nav>

      {/* Mobile Menu Button */}
      <button className="lg:hidden z-50" onClick={toggleMenu}>
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6 overflow-y-auto">
          <div className="space-y-4">
            <div className="border-b pb-2 ">
              <button
                className="flex items-center justify-between w-full py-2 font-medium "
                onClick={() => toggleDropdown("services")}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "services" ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="py-2 pl-4 space-y-2">
                  {servicesItems.map((item, index) => (
                    <a key={index} href={item.link} className="block py-2 text-gray-700 hover:text-amber-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-b pb-2">
              <button
                className="flex items-center justify-between w-full py-2 font-medium"
                onClick={() => toggleDropdown("journals")}
              >
                <span>Content writing</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${activeDropdown === "journals" ? "rotate-180" : ""}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === "journals" ? "max-h-60" : "max-h-0"
                }`}
              >
                <div className="py-2 pl-4 space-y-2">
                  {journalsItems.map((item, index) => (
                    <a key={index} href={item.link} className="block py-2 text-gray-700 hover:text-amber-600">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <a href="/patent" className="block py-2 border-b font-medium">
              Patent
            </a>
            <a href="/web-agency" className="block py-2 border-b font-medium">
            Website & App Development
            </a>
            <a href="/academic" className="block py-2 border-b font-medium">
            Acadmic Project 
            </a>
             <a href="/publication" className="block py-2 border-b font-medium">
            Publication Support
            </a>
            <div className="pt-4 space-y-3">
  <a
    href="https://wa.me/917906767266"
    target="_blank"
    rel="noopener noreferrer"
    className="block w-full bg-amber-500 text-white px-6 py-3 rounded text-center hover:bg-amber-600 transition"
  >
    Enquiry
  </a>
</div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation
