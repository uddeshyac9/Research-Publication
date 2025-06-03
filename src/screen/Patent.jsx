// src/pages/patent.jsx  (or wherever your router/Next.js expects this file)

import React from "react"
import PatentRegistrationHero from "../components/patent/patent-registration-hero"
import PatentRegistrationProcess from "../components/patent/patent-registration-process"
import SimpleFourSteps from "../components/patent/simple-4-steps"

export default function PatentPage() {
  return (
    <div>
         <header className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-lg font-medium text-gray-800">Patent Registration</h1>
            <nav className="text-sm text-gray-600">
              <span>Home</span>
              <span className="mx-2">/</span>
              <span>Patent Registration</span>
            </nav>
          </div>
        </div>
      </header>
      <PatentRegistrationHero />
      <PatentRegistrationProcess/>
      <SimpleFourSteps/>
    </div>
  )
}
