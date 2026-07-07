import { MapPin, Phone } from "lucide-react"
import Image from "next/image"


const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Courses", href: "#courses" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Contact Us", href: "#contact" },
]

const courses = [
  { label: "Chartered Accountant (CA)", href: "#courses" },
  { label: "Cost Management Accountant (CMA)", href: "#courses" },
  { label: "Company Secretary (CS)", href: "#courses" },
]

export default function Footer() {
  return (
    <footer className="bg-[#0d1f52] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.jpg" alt="Venus Academy logo" width={64} height={64} className="rounded-full object-cover flex-shrink-0" />
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Empowering students in Coimbatore to achieve their professional accounting and secretarial goals since 2019.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide uppercase text-xs">Quick Links</h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-white/60 hover:text-accent text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide uppercase text-xs">Our Courses</h4>
            <ul className="flex flex-col gap-2.5">
              {courses.map((c) => (
                <li key={c.label}>
                  <a href={c.href} className="text-white/60 hover:text-accent text-sm transition-colors">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 tracking-wide uppercase text-xs">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a227] mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm leading-relaxed">
                  MRK Complex, 255, Pollachi Main Road, Sundarapuram, Coimbatore
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                <a href="tel:09360918263" className="text-white/60 hover:text-accent text-sm transition-colors">
                  093609 18263
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">
            &copy; 2026 Venus Academy, Coimbatore. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">
            CA &middot; CMA &middot; CS Professional Coaching
          </p>
        </div>
      </div>
    </footer>
  )
}
