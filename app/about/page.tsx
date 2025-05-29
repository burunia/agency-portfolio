"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Header from "@/components/header"

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
      
      <Header />

      <main className="flex-1 main-container">
        {/* Hero Section */}
        <section className="container mx-auto py-16 main-container">
          <div className="uppercase tracking-wider text-[#d4b88e] font-medium mb-4 ml-4 md:ml-0">ABOUT US</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative order-1 md:order-2">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[#d4b88e]/20"></div>
              <Image 
                src="/website png-05.png?height=500&width=500" 
                alt="Creative work environment"
                width={700} 
                height={700}
                // className="rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#d4b88e] -z-10"></div>
            </div>
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black font-vidaloka">
                Creativity Without Borders
              </h1>
              <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
              
              <p className="paragraph-main">
                We're a global creative studio built for modern commerce. From product concept to polished visuals, we design, shoot, and deliver content that helps e-commerce brands grow — beautifully and strategically.
              </p>
              
              <Link href="/contact">
                <Button className="mt-8 bg-[#d4b88e] hover:bg-[#c5a97f] text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                  Work With Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section className="container mx-auto py-16 bg-[#f5f0e6] rounded-3xl mb-16 main-container">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
              {/* Who We Are Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">who we are</h2>
                <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
                <p className="paragraph-main">
                  Our team spans multiple disciplines and cultures, with a core crew of copywriters, photographers, retouchers, and 2D/3D designers. We've spent years working behind the scenes for top-selling Amazon brands — and now, we're opening our doors to a wider world of product makers, DTC brands, and platforms like Etsy, Kickstarter, and Wayfair.
                </p>
              </div>

              {/* What We Believe Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">what we believe</h2>
                <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
                <p className="paragraph-main">
                  We believe that great products deserve great storytelling. That high-performing content doesn't have to be boring. That smart design and striking visuals can bridge the gap between a brand and its audience — no matter where they are in the world.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Where We Work Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">where we work</h2>
                <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
                <p className="paragraph-main">
                  While our production roots are in China, our clients span the globe — from the U.S. to Europe. Whether you're a manufacturer entering Western markets or a digital-first brand looking to scale, we know how to turn your ideas into assets that convert.
                </p>
              </div>

              {/* How We Work Section */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">how we work</h2>
                <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
                <p className="paragraph-main">
                  We're lean, agile, and collaborative. We don't do bloated creative decks — just efficient, focused content that gets results. Our process is fast, transparent, and tailored to your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="container mx-auto py-16 mb-20 main-container">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
            {/* Right: Features - move to top on mobile */}
            <div className="md:col-span-2 flex flex-col h-full order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">prsonalized content that performs</h2>
              <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-6 rounded"></div>
              <div className="flex flex-row justify-between items-center gap-6 mb-8">
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <i className="fas fa-desktop text-5xl text-[#d4b88e] mb-2"></i>
                  <span className="font-roboto text-base text-gray-800 mt-2 text-center">Smart design</span>
                </div>
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <i className="fas fa-bullseye text-5xl text-[#d4b88e] mb-2"></i>
                  <span className="font-roboto text-base text-gray-800 mt-2 text-center">Audience targeting</span>
                </div>
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <i className="fas fa-globe text-5xl text-[#d4b88e] mb-2"></i>
                  <span className="font-roboto text-base text-gray-800 mt-2 text-center">Global reach</span>
                </div>
                <div className="flex flex-col items-center flex-1 min-w-0">
                  <i className="fas fa-chart-line text-5xl text-[#d4b88e] mb-2"></i>
                  <span className="font-roboto text-base text-gray-800 mt-2 text-center">Actionable insights</span>
                </div>
              </div>
            </div>
            {/* Left: Our Promise */}
            <div className="md:col-span-3 flex flex-col h-full justify-start order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">our promise</h2>
              <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
              <h3 className="text-2xl font-medium mb-6 text-[#d4b88e] font-vidaloka">
                Global Perspective. Local Craft. Performance-Driven.
              </h3>
              <p className="paragraph-main">
                That's our promise — from concept to conversion. We're built for business. Our platform goes beyond just creative services. Connect with viewers through personalized visual experiences and explore analytical insights about your audience to continuously improve and optimize your content.
              </p>
              <Link href="/contact">
                <Button className="mt-8 bg-[#d4b88e] hover:bg-[#c5a97f] text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg w-fit">
                  Get Started
                </Button>
              </Link>
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
                <video 
                  src="/sello_art 2_2.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-[234px] h-[78px] object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">
                We help e-commerce brands stand out with stunning visuals and strategic content.
              </p>
              <div className="flex space-x-4">
                {["facebook-f", "instagram", "twitter", "linkedin-in"].map((icon) => (
                  <Link key={icon} href="#" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-110">
                    <i className={`fab fa-${icon} fa-lg text-black`}></i>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase font-vidaloka">Services</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  'Product Photography',
                  'Retouching & Editing',
                  'Graphic Design',
                  'Amazon Optimization'
                ].map((service) => (
                  <li key={service}>
                    <Link href="#" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase font-vidaloka">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/about" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase font-vidaloka">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>contact@chromepress.com</li>
                <li>1611 W. Warren St</li>
                <li>Boise, Idaho</li>
                <li>83706</li>
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