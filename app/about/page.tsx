"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
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
                'Home',
                'About Us',
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
        <section className="container mx-auto py-20">
          <div className="uppercase tracking-wider text-[#d4b88e] font-medium mb-4 ml-4 md:ml-0">ABOUT US</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800">
                Creativity <span className="relative inline-block">
                  Without Borders
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d4b88e]/20 -z-10"></span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-700 mt-6">
                We're a global creative studio built for modern commerce. From product concept to polished visuals, we design, shoot, and deliver content that helps e-commerce brands grow — beautifully and strategically.
              </p>
              
              <Button className="mt-8 bg-[#5D5FEF] hover:bg-[#4a4cd8] text-white px-8 py-6 rounded-lg text-lg">
                Work With Us
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[#d4b88e]/20"></div>
              <Image 
                src="/team.jpg?height=500&width=500" 
                alt="Creative work environment"
                width={600} 
                height={600}
                className="rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#d4b88e] -z-10"></div>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section className="container mx-auto py-16 bg-white rounded-3xl my-16">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
              {/* Who We Are Section */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                  <h2 className="mx-4 text-lg font-light">who we are</h2>
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                </div>
                <p className="text-lg text-gray-700">
                  Our team spans multiple disciplines and cultures, with a core crew of copywriters, photographers, retouchers, and 2D/3D designers. We've spent years working behind the scenes for top-selling Amazon brands — and now, we're opening our doors to a wider world of product makers, DTC brands, and platforms like Etsy, Kickstarter, and Wayfair.
                </p>
              </div>

              {/* What We Believe Section */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                  <h2 className="mx-4 text-lg font-light">what we believe</h2>
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                </div>
                <p className="text-lg text-gray-700">
                  We believe that great products deserve great storytelling. That high-performing content doesn't have to be boring. That smart design and striking visuals can bridge the gap between a brand and its audience — no matter where they are in the world.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {/* Where We Work Section */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                  <h2 className="mx-4 text-lg font-light">where we work</h2>
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                </div>
                <p className="text-lg text-gray-700">
                  While our production roots are in China, our clients span the globe — from the U.S. to Europe. Whether you're a manufacturer entering Western markets or a digital-first brand looking to scale, we know how to turn your ideas into assets that convert.
                </p>
              </div>

              {/* How We Work Section */}
              <div>
                <div className="mb-6 flex items-center">
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                  <h2 className="mx-4 text-lg font-light">how we work</h2>
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                </div>
                <p className="text-lg text-gray-700">
                  We're lean, agile, and collaborative. We don't do bloated creative decks — just efficient, focused content that gets results. Our process is fast, transparent, and tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="container mx-auto py-16 mb-20">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Record and send videos to reach prospects, connect with customers
              </h2>
              <Button className="mt-4 bg-[#5D5FEF] hover:bg-[#4a4cd8] text-white px-8 py-6 rounded-lg text-lg">
                Get Started
              </Button>
            </div>
            
            <div className="md:col-span-3">
              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <div className="mb-6 flex items-center">
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                  <h2 className="mx-4 text-lg font-light">our promise</h2>
                  <div className="h-[1px] w-10 bg-gray-300"></div>
                </div>
                <h3 className="text-2xl font-medium mb-6 text-[#d4b88e]">
                  Global Perspective. Local Craft. Performance-Driven.
                </h3>
                <p className="text-lg text-gray-700">
                  That's our promise — from concept to conversion. We're built for business. Our platform goes beyond just creative services. Connect with viewers through personalized visual experiences and explore analytical insights about your audience to continuously improve and optimize your content.
                </p>
              </div>
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