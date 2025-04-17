"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")

  // Portfolio items data with categories
  const portfolioItems = [
    {
      id: 1,
      title: "Premium Watch Photography",
      category: "Product Photography",
      image: "/placeholder.svg?height=540&width=400",
      client: "Luxe Timepieces",
    },
    {
      id: 2,
      title: "Home Goods Product Retouching",
      category: "Retouching & Editing",
      image: "/placeholder.svg?height=540&width=400",
      client: "Modern Home Co.",
    },
    {
      id: 3,
      title: "Perfume Bottle 3D Rendering",
      category: "3D Modeling",
      image: "/placeholder.svg?height=540&width=400", 
      client: "Scent Luxury",
    },
    {
      id: 4,
      title: "Beauty Brand Identity",
      category: "Graphic Design",
      image: "/placeholder.svg?height=540&width=400",
      client: "Glow Cosmetics",
    },
    {
      id: 5, 
      title: "Organic Tea Packaging",
      category: "Packaging",
      image: "/placeholder.svg?height=540&width=400",
      client: "Natural Brews",
    },
    {
      id: 6,
      title: "Event Brochure Design",
      category: "Print Design",
      image: "/placeholder.svg?height=540&width=400",
      client: "Annual Summit",
    },
    {
      id: 7,
      title: "Skincare Product Photography",
      category: "Product Photography",
      image: "/placeholder.svg?height=540&width=400",
      client: "Pure Skin",
    },
    {
      id: 8,
      title: "Fashion Catalog Retouching",
      category: "Retouching & Editing",
      image: "/placeholder.svg?height=540&width=400",
      client: "Style Collection",
    },
    {
      id: 9,
      title: "Headphone 3D Model",
      category: "3D Modeling",
      image: "/placeholder.svg?height=540&width=400",
      client: "Audio Tech",
    },
  ]

  // Filter categories 
  const categories = [
    "all",
    "Product Photography",
    "Retouching & Editing",
    "3D Modeling",
    "Graphic Design",
    "Packaging",
    "Print Design"
  ]

  // Filter the portfolio items based on the active filter
  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

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
      
      {/* Animated Overlay Menu - same as in homepage */}
      {menuOpen && (
        <div className="fixed inset-0 z-40" style={{background: 'rgba(203, 184, 136, 0.9)'}}>
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
            
            <nav className="flex flex-col items-start space-y-8 ml-8 mt-8 animate-fade-in-up">
              {[
                'Home',
                'About Us',
                'Our Work',
                'Portfolio',
                'Blog',
                'Contact'
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Home' ? '/' : 
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

      {/* Header - same as in homepage */}
      <header className="container mx-auto flex items-center justify-between py-6 relative z-50">
        {!menuOpen && (
          <button
            className="text-gray-800 focus:outline-none z-50 ml-8"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <i className="fas fa-bars fa-lg text-black"></i>
          </button>
        )}
        {menuOpen && <div className="ml-8 w-6"></div>}
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
        {/* Portfolio Page Title */}
        <section className="py-16 bg-[#f5f0e6]">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="max-w-2xl mx-auto text-gray-600">
              Explore our creative work across various disciplines. Each project represents our commitment to quality and attention to detail.
            </p>
          </div>
        </section>

        {/* Filter Categories */}
        <section className="py-8 container mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 ${
                  activeFilter === category 
                  ? "bg-[#d4b88e] hover:bg-[#c5a97f] text-white border-[#d4b88e]" 
                  : "hover:bg-[#f5f0e6] hover:text-[#d4b88e] border-gray-200"
                }`}
              >
                {category === "all" ? "All Work" : category}
              </Button>
            ))}
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-8 container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group overflow-hidden rounded-lg shadow-sm border border-gray-100 bg-white transition-all hover:shadow-md">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={540}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#d4b88e] font-medium">{item.category}</span>
                  <h3 className="text-xl font-medium mt-1 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500">Client: {item.client}</p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Link 
                      href="#" 
                      className="inline-flex items-center text-sm font-medium text-[#d4b88e] hover:text-[#c5a97f]"
                    >
                      View Case Study
                      <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f5f0e6]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Let's create something amazing together. Our creative team is ready to help you bring your vision to life.
            </p>
            <Button className="rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] px-8 py-2 text-white">
              Contact Us
            </Button>
          </div>
        </section>
      </main>

      {/* Footer - same structure as homepage */}
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
                  <Link href="#" className="hover:text-gray-900">
                    Our Work
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