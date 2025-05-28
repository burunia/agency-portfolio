import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div>
              <Image 
                src="/Logo.png" 
                alt="Logo" 
                width={156} 
                height={52}
                className="object-contain"
              />
            </div>
            <p className="text-sm text-gray-600">
              We help e-commerce brands stand out with stunning visuals and strategic content.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-900">
                <i className="fab fa-facebook-f fa-lg text-black"></i>
              </Link>
              <Link href="#" className="hover:text-gray-900">
                <i className="fab fa-instagram fa-lg text-black"></i>
              </Link>
              <Link href="#" className="hover:text-gray-900">
                <i className="fab fa-twitter fa-lg text-black"></i>
              </Link>
              <Link href="#" className="hover:text-gray-900">
                <i className="fab fa-linkedin-in fa-lg text-black"></i>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Product Photography
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Retouching & Editing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Graphic Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-900">
                  Amazon Optimization
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gray-900">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-900">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>contact@chromepress.com</li>
              <li>1611 W. Warren St</li>
              <li>Boise, Idaho</li>
              <li>83706</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Chrome Press. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 