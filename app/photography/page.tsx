"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Header from "@/components/header"

export default function Photography() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9] relative">
      <Header showAnimations={false} />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto py-20">
          <div className="uppercase tracking-wider text-[#d4b88e] font-medium mb-4 ml-4 md:ml-0">PHOTOGRAPHY</div>
          <div className="w-full mb-10">
            <Image 
              src="/Photography_studio.jpg" 
              alt="Photography Studio" 
              width={1920} 
              height={600} 
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black">
              Your product deserves the spotlight.
              </h1>
              <p className="text-lg md:text-xl text-black mt-6">
              In a crowded marketplace, first impressions matter — and your product photos are the first thing potential customers see. We specialize in high-impact, conversion-driven photography that brings your products to life. Whether it's crisp, clean studio shots for Amazon listings or lifestyle imagery that tells a story, we craft visuals that stop the scroll and drive sales.<br /><br />

              Our in-house photographer, based in Idaho, USA, specializes in capturing product images with precision and style. With a keen eye for composition and a deep understanding of visual storytelling, we produce high-quality product shots and beautifully styled lifestyle images. Whether you're refreshing your e-commerce store or launching a brand campaign, our photography is tailored to showcase your products at their absolute best and boost customer engagement.<br /><br /><br />

Professional, consistent, and tailored to your brand — because your product doesn't just belong on the shelf.<br /><br />
It belongs in the spotlight.
              </p>
              <Link href="/contact">
                <Button className="mt-8 bg-[#d4b88e] hover:bg-[#c5a97f] text-white px-8 py-6 rounded-lg text-lg">
                  Prenota una sessione
                </Button>
              </Link>
            </div>
            {/* Right: Two Images */}
            <div className="relative flex flex-col gap-8 items-center md:items-end">
              <div className="relative w-[420px] h-[480px] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/Photographer.png"
                  alt="Fotografo in studio"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        {/* You can add more sections here, similar to About Us, if needed */}
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

      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />
    </div>
  )
} 