"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedRibbon from "@/components/animated-ribbon"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from "@/components/ui/dropdown-menu"
import React from "react"

export default function AgencyPortfolio() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9] relative">
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
      
      {/* Styled JSX for carousel effect */}
      <style jsx global>{`
        #carousel-container {
          padding: 20px 10px;
        }
        
        .carousel-item {
          height: 540px;
          aspect-ratio: 0.74;
        }
        
        #carousel-container:hover .carousel-item {
          transform: scale(0.92);
          filter: brightness(0.8);
          margin: 0 -5px;
        }
        
        #carousel-container .carousel-item:hover {
          transform: scale(1.18);
          filter: brightness(1);
          z-index: 10;
          margin: 0 5px;
        }
      `}</style>
      
      {/* Animated Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40" style={{background: 'rgba(203, 184, 136, 0.9)'}}>
          {/* Close Button in header-aligned container */}
          <div className="container mx-auto flex flex-col py-6">
            <button
              className="w-20 h-20 flex items-center justify-center rounded-2xl border-2 border-white bg-transparent text-white ml-8 hover:bg-white/10 transition-colors cursor-pointer pointer-events-auto"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              <span className="sr-only">Close menu</span>
              <i className="fas fa-times fa-lg text-white"></i>
            </button>
            
            {/* Menu Items aligned under close button */}
            <nav className="flex flex-col items-start space-y-8 ml-8 mt-8 animate-fade-in-up">
              {[
                'About Us',
                'Portfolio',
                'Blog',
                'Contact'
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'About Us' ? '/about' : 
                    item === 'Portfolio' ? '/portfolio' : '#'
                  }
                  className="text-4xl md:text-5xl font-light text-white/80 hover:text-white transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-6 relative z-50">
        {/* Hamburger Button (hidden when menu is open) */}
        {!menuOpen && (
          <button
            className="text-gray-800 focus:outline-none z-50 ml-8"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fas fa-bars fa-lg text-black"></i>
          </button>
        )}
        {/* Spacer div when hamburger is hidden to maintain header layout */}
        {menuOpen && <div className="ml-8 w-6"></div>}
        {/* Logo (remains visible above overlay) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
          <Image 
            src="/Logo.png" 
            alt="Logo" 
            width={156} 
            height={52}
            className="object-contain"
          />
        </div>
        <div className="flex items-center space-x-6 mr-8">
          <Link href="#" className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <i className="fab fa-facebook-f fa-lg text-black"></i>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <i className="fab fa-instagram fa-lg text-black"></i>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <i className="fab fa-twitter fa-lg text-black"></i>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <i className="fab fa-linkedin-in fa-lg text-black"></i>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-36 overflow-hidden w-screen">
          {/* Animated Ribbon Background - covers entire hero section */}
          <div className="absolute inset-0 w-full h-full">
            <AnimatedRibbon />
          </div>

          <div className="container relative mx-auto text-center z-10 mt-16">
            <h1 className="mb-4 text-5xl font-bold uppercase tracking-tight md:text-6xl">WE DESIGN,</h1>
            <p className="text-xl md:text-2xl">Create & Elevate E-Commerce Brands</p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="container mx-auto py-16">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">what we do</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
            <h3 className="mb-4 text-center text-xl">Creative Services for Global Sellers</h3>
            <p className="max-w-2xl text-center text-gray-600">
              We're a multidisciplinary team helping brands thrive in competitive marketplaces. Whether you sell on
              Amazon, Etsy, Kickstarter, or your own DTC store – we craft the visuals and content that help you stand
              out.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 justify-center mx-auto place-items-center">
            <div className="space-y-2 text-center">
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>Product Photography</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>Retouching & Editing</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>2D & 3D Graphic Design</span>
              </p>
            </div>
            <div className="space-y-2 text-center">
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>Amazon Listing Optimization</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>Packaging & Print Design</span>
              </p>
              <p className="flex items-center">
                <span className="mr-2 text-gray-400">·</span>
                <span>Brand Storytelling & Copywriting</span>
              </p>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="container mx-auto py-16">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">selected work</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden">
              <div
                id="carousel-container"
                className="flex gap-6 transition-transform duration-500 ease-in-out"
                style={{ transform: "translateX(0px)" }}
              >
                <div className="carousel-item min-w-[400px] h-[540px] overflow-hidden rounded-lg transform transition-all duration-300 cursor-pointer hover:z-10">
                  <Image
                    src="/Pouf-Ottoman_life7_3D.jpg?height=540&width=400"
                    alt="Interior design project"
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="carousel-item min-w-[400px] h-[540px] overflow-hidden rounded-lg transform transition-all duration-300 cursor-pointer hover:z-10">
                  <Image
                    src="/24-208_KP_Cube.jpg?height=540&width=400"
                    alt="Calendar design"
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="carousel-item min-w-[400px] h-[540px] overflow-hidden rounded-lg transform transition-all duration-300 cursor-pointer hover:z-10">
                  <Image
                    src="/Caligraphy.jpg?height=540&width=400"
                    alt="Product photography"
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="carousel-item min-w-[400px] h-[540px] overflow-hidden rounded-lg transform transition-all duration-300 cursor-pointer hover:z-10">
                  <Image
                    src="/Fluted-Storage-Boxes_Sage.jpg?height=540&width=400"
                    alt="Brand identity"
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="carousel-item min-w-[400px] h-[540px] overflow-hidden rounded-lg transform transition-all duration-300 cursor-pointer hover:z-10">
                  <Image
                    src="/placeholder.svg?height=540&width=400"
                    alt="Packaging design"
                    width={400}
                    height={540}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                const container = document.getElementById("carousel-container")
                if (!container) return
                const currentTransform = container.style.transform
                const currentX = Number.parseInt(currentTransform.replace(/[^-\d.]/g, "")) || 0

                // Don't scroll past the beginning
                if (currentX >= 0) return

                const newX = Math.min(0, currentX + 406) // 400px width + 6px gap
                container.style.transform = `translateX(${newX}px)`
              }}
              className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-left fa-lg text-black"></i>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById("carousel-container")
                if (!container || !container.parentElement) return
                const currentTransform = container.style.transform
                const currentX = Number.parseInt(currentTransform.replace(/[^-\d.]/g, "")) || 0

                // Calculate max scroll (container width - visible width)
                const containerWidth = container.scrollWidth
                const visibleWidth = container.parentElement.clientWidth
                const maxScroll = -(containerWidth - visibleWidth)

                // Don't scroll past the end
                if (currentX <= maxScroll) return

                const newX = Math.max(maxScroll, currentX - 406) // 400px width + 6px gap
                container.style.transform = `translateX(${newX}px)`
              }}
              className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <i className="fas fa-chevron-right fa-lg text-black"></i>
            </button>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="container mx-auto py-16">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">why work with us</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#d4b88e]">
                <i className="fas fa-laptop-code fa-2xl"></i>
              </div>
              <h3 className="mb-2 text-lg font-medium">All-in-One Production</h3>
              <p className="text-sm text-gray-600">
                Everything from concept to final visuals – handled by one agile team.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#d4b88e]">
                <i className="fab fa-amazon fa-2xl"></i>
              </div>
              <h3 className="mb-2 text-lg font-medium">Amazon-Proven Expertise</h3>
              <p className="text-sm text-gray-600">
                We've helped dozens of brands scale on Amazon with content that sells.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 text-[#d4b88e]">
                <i className="fas fa-chart-line fa-2xl"></i>
              </div>
              <h3 className="mb-2 text-lg font-medium">Creative Meets Commerce</h3>
              <p className="text-sm text-gray-600">
                Our work isn't just beautiful – it performs. We blend strategy with stunning execution.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="container mx-auto py-16">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">ready to create together?</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-medium">Let's elevate your brand</h3>
              <div className="mb-4 h-1 w-12 bg-[#d4b88e]"></div>
              <p className="mb-6 text-gray-600">
                Ready to stand out in the competitive e-commerce landscape? Our team of experts is here to help you
                create visuals and content that convert. Fill out the form, and we'll get back to you within 24 hours.
              </p>
              <div className="mt-6 space-y-4 md:mt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-phone fa-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600">hello@agencyname.com</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="mb-1 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      id="first-name"
                      placeholder="John"
                      className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="mb-1 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      id="last-name"
                      placeholder="Doe"
                      className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
                    Service You're Interested In
                  </label>
                  <Select>
                    <SelectTrigger className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="photography">Product Photography</SelectItem>
                      <SelectItem value="retouching">Retouching & Editing</SelectItem>
                      <SelectItem value="graphic-design">Graphic Design</SelectItem>
                      <SelectItem value="amazon">Amazon Listing Optimization</SelectItem>
                      <SelectItem value="packaging">Packaging & Print Design</SelectItem>
                      <SelectItem value="copywriting">Brand Storytelling & Copywriting</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                  />
                </div>

                <Button className="w-full rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] focus:outline-none focus:ring-2 focus:ring-[#d4b88e] focus:ring-offset-2">
                  Send Message
                </Button>

                <p className="text-center text-xs text-gray-500">
                  By submitting this form, you agree to our Privacy Policy and Terms of Service.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
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
                  <Link href="#" className="hover:text-gray-900">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>hello@agencyname.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Design Street</li>
                <li>New York, NY 10001</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Agency Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

/* Add this to your global CSS or Tailwind config for animation */
/*
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  animation: fade-in-up 0.5s cubic-bezier(0.4,0,0.2,1) both;
}
*/
