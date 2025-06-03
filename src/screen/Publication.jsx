// src/pages/patent.jsx  (or wherever your router/Next.js expects this file)

import React from "react"
import PublicationSupportHero from "../components/publication/publication-support-hero"
import PublicationSupportPackages from "../components/publication/publication-support-packages"
import PublicationSupportServices from "../components/publication/publication-support-services"

export default function PublicationPage() {
  return (
    <div>
      <PublicationSupportHero />
      <PublicationSupportPackages/>
      <PublicationSupportServices/>
    </div>
  )
}
