"use client"

import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Trubot_logo from "../../public/Trubot-logo.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  // Function to handle mobile menu toggle
  const toggleMenu = () => setIsOpen(!isOpen)

  // Function to handle smooth scrolling
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false) // Close mobile menu if open
  }

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={Trubot_logo}
              alt="Trubot Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold">Trubot Electronics</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="#products"
              className="text-gray-600 hover:text-[#EF9520]"
              onClick={(e) => handleScroll(e, "products")}
            >
              Products
            </Link>
            <Link
              href="#service-section"
              className="text-gray-600 hover:text-[#EF9520]"
              onClick={(e) => handleScroll(e, "service-section")} // Match the id in ServicesSection
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-gray-600 hover:text-[#EF9520]"
              onClick={(e) => handleScroll(e, "about")}
            >
              About Us
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-[#EF9520]"
              onClick={(e) => handleScroll(e, "contact")}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={toggleMenu}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <Link
                  href="#products"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={(e) => handleScroll(e, "products")}
                >
                  Products
                </Link>
                <Link
                  href="#service-section"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={(e) => handleScroll(e, "service-section")} // Match the id in ServicesSection
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={(e) => handleScroll(e, "about")}
                >
                  About Us
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={(e) => handleScroll(e, "contact")}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}