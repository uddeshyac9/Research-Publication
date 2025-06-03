import { Mail, Phone } from "lucide-react"

const TopHeader = () => {
  return (
    <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
      <div className="flex items-center space-x-4 text-sm md:text-base">
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-1" />
          <span>youreducation88@gmail.com</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-1" />
          <span>+91 7906767266</span>
        </div>
      </div>
      <div className="hidden md:flex space-x-4 text-sm">
        <a href="#" className="hover:underline">
          About us
        </a>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Refund Policy
        </a>
        <a href="#" className="hover:underline">
          Newsletter
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    </div>
  )
}

export default TopHeader
