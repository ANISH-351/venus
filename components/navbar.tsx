"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "About", href: "#why-us" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffffff] shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            <Image
              src="/logo.jpg"
              alt="Venus Academy logo"
              width={68}
              height={68}
              className="rounded-full object-cover flex-shrink-0"
            />
            {/* <div className="leading-tight">
              <span className="block font-serif font-bold text-xl text-accent tracking-wide">Venus Academy</span>
              <span className="block text-[10px] text-primary-foreground/70 tracking-widest uppercase">CA · CMA · CS Coaching</span>
            </div> */}
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-primary-foreground/80 hover:text-accent text-sm font-medium tracking-wide transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:09360918263"
              className="ml-2 px-5 py-2 rounded  text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity bg-[#1a3a8f]"
            >
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-primary-foreground p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-primary-foreground/80 hover:text-accent py-2.5 text-base font-medium border-b border-white/5 last:border-0 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:09360918263"
              className="mt-3 text-center px-5 py-2.5 rounded bg-accent text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              Call Now
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
