// src/mainRoutes.jsx
import { Routes, Route, Navigate } from "react-router-dom"
import Home from "./screen/Home"
import PatentPage from "./screen/Patent"
import ContentPage from "./screen/Content"
import WebAgency from "./screen/WebAgency"
import AcademicProjects from "./screen/Academic"
import PublicationPage from "./screen/Publication"



 
const MainRoutes = () => {
  return (
    <Routes>
      {/* Home route */}
      <Route path="/" element={<Home />} />
      {/* About page */}
      <Route path="/patent" element={<PatentPage />} />
      <Route path="/content" element={<ContentPage />} />
      <Route path="/web-agency" element={<WebAgency />} />
      <Route path="/academic" element={<AcademicProjects />} />
      <Route path="/publication" element={<PublicationPage />} />
    </Routes>
  )
}

export default MainRoutes
