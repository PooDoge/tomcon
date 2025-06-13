"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="inline-flex">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Tomcon Restorations Logo"
              width={40}
              height={40}
              className="max-h-full max-w-md h-full"
              priority
            />
          </Link>
<div className="pl-2 text-xl font-bold text-gray-700 content-center">TOMCON RESTORATION</div>


          </div>
        </div>
        <nav
          className={cn(
            "absolute left-0 top-16 w-full flex-col gap-4 border-b bg-white p-4 md:static md:flex md:w-auto md:flex-row md:border-0 md:p-0",
            isMenuOpen ? "flex" : "hidden md:flex",
          )}
        >
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#why-choose-us"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Why Choose Us
          </Link>
          <Link
            href="#service-areas"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Service Areas
          </Link>
          <Link
            href="#reviews"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            href="#blog"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium text-gray-700 transition-colors hover:text-blue-700"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+16318315117" className="hidden items-center gap-2 text-sm font-medium text-blue-700 md:flex">
            <Phone className="h-4 w-4" />
            <span>(631) 831-5117</span>
          </a>
          <Button asChild className="hidden bg-blue-700 hover:bg-blue-800 md:inline-flex">
            <a href="tel:+16318315117">Call Now</a>
          </Button>
          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </header>
  )
}
