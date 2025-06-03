// src/pages/patent.jsx  (or wherever your router/Next.js expects this file)

import React from "react"
import OurTopServices from "../components/content/our-top-services"
import ServicesCard from "../components/content/services-cards"
import FaqSection from "../components/content/faq-section"

export default function ContentPage() {
  return (
    <div>
      <header className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-medium text-gray-800">Content</h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Content</span>
            </nav>
          </div>
        </div>
      </header>
      <OurTopServices />
      <ServicesCard/>
      <FaqSection/>
    </div>
  )
}
