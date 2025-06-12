import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-900 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-full lg:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/logo.webp"
                alt="Tomcon Restorations Logo"
                width={180}
                height={180}
                className="h-auto w-auto invert"
              />
            </Link>
            <p className="mb-4 max-w-xs text-blue-100">
              Fast, reliable flood damage and restoration services for Long Island homeowners and businesses.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 text-blue-100 transition-colors hover:bg-blue-700 hover:text-white"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 text-blue-100 transition-colors hover:bg-blue-700 hover:text-white"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 text-blue-100 transition-colors hover:bg-blue-700 hover:text-white"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-blue-800 p-2 text-blue-100 transition-colors hover:bg-blue-700 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Services</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="#services" className="transition-colors hover:text-white hover:underline">
                  Flood Restoration
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-white hover:underline">
                  Water Extraction
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-white hover:underline">
                  Mold Remediation
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-white hover:underline">
                  Fire Damage Repair
                </Link>
              </li>
              <li>
                <Link href="#services" className="transition-colors hover:text-white hover:underline">
                  Storm Damage Cleanup
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Service Areas</h3>
            <ul className="space-y-2 text-blue-100">
              <li>
                <Link href="#service-areas" className="transition-colors hover:text-white hover:underline">
                  Nassau County
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="transition-colors hover:text-white hover:underline">
                  Suffolk County
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="transition-colors hover:text-white hover:underline">
                  Queens
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="transition-colors hover:text-white hover:underline">
                  Brooklyn
                </Link>
              </li>
              <li>
                <Link href="#service-areas" className="transition-colors hover:text-white hover:underline">
                  Manhattan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Contact</h3>
            <ul className="space-y-4 text-blue-100">
              <li className="flex items-start gap-3">
                <Phone className="mt-1 h-5 w-5 shrink-0" />
                <a href="tel:+16318315117" className="transition-colors hover:text-white hover:underline">
                  (631) 831-5117
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0" />
                <a href="mailto:tconley@tomconrestore.com" className="transition-colors hover:text-white hover:underline">
                  tconley@tomconrestore.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-blue-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-blue-100">© {currentYear} Tomcon Restorations. All rights reserved.</p>
            <div className="flex gap-4 text-sm text-blue-100">
              <Link href="/privacy-policy" className="transition-colors hover:text-white hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition-colors hover:text-white hover:underline">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="transition-colors hover:text-white hover:underline">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
