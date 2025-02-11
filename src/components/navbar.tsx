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

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <Image
              src={ Trubot_logo }
              alt="Trubot Logo"
              className="h-8 w-8"
            />
            <span className="ml-2 text-xl font-bold">Trubot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#products" className="text-gray-600 hover:text-[#EF9520]">
              Products
            </Link>
            <Link href="#about" className="text-gray-600 hover:text-[#EF9520]">
              About Us
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#EF9520]">
              Contact
            </Link>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-4">
                <Link
                  href="#products"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
                <Link
                  href="#about"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={() => setIsOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  href="#contact"
                  className="text-lg font-medium hover:text-[#EF9520]"
                  onClick={() => setIsOpen(false)}
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

