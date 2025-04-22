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
import React, { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"

export default function AgencyPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    service: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: false,
    error: false,
    errorMessage: ''
  })
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: 't-nDITmlVwB7mSBbT'
    });
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({
      ...prev,
      [id]: value
    }))
  }

  const handleServiceChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus({ loading: true, success: false, error: false, errorMessage: '' })

    try {
      let recaptchaToken = "development_token"
      
      // Only try to get a real reCAPTCHA token if not in development
      if (recaptchaRef.current && process.env.NODE_ENV !== "development") {
        try {
          recaptchaToken = await recaptchaRef.current.executeAsync() || "token_error"
          recaptchaRef.current.reset()
        } catch (recaptchaError) {
          console.warn("reCAPTCHA error:", recaptchaError)
        }
      }

      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
        throw new Error("Please fill out all required fields")
      }

      // Prepare template parameters
      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        from_email: formData.email,
        title: `${formData.service} Inquiry`,
        service: formData.service,
        message: formData.message,
        'g-recaptcha-response': recaptchaToken
      }

      try {
        // Send email using EmailJS
        const response = await emailjs.send(
          'service_n02r79q',
          'template_dvnupyv',
          templateParams
        );
        
        // Reset form and show success message
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: ''
        });
        setFormStatus({ loading: false, success: true, error: false, errorMessage: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } catch (emailError: any) {
        throw new Error(emailError.text || 'Failed to send email. Please check your network connection and try again.');
      }
    } catch (error: any) {
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: true, 
        errorMessage: error.message || 'Something went wrong. Please try again later.'
      })
      
      // Reset error message after 8 seconds
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: false, errorMessage: '' }))
      }, 8000)
    }
  }

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
        /* New carousel styling */
        .work-carousel {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 60px;
        }
        
        .work-carousel-item {
          position: absolute;
          width: 390px;
          height: 390px;
          transition: all 0.5s ease;
          opacity: 0;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .work-carousel-item.active {
          z-index: 30;
          opacity: 1;
          transform: translateX(0);
          width: 619px;
          height: 619px;
        }
        
        .work-carousel-item.prev-2 {
          z-index: 10;
          opacity: 0.4;
          transform: translateX(-650px);
        }
        
        .work-carousel-item.prev {
          z-index: 20;
          opacity: 0.7;
          transform: translateX(-364px);
        }
        
        .work-carousel-item.next {
          z-index: 20;
          opacity: 0.7;
          transform: translateX(364px);
        }
        
        .work-carousel-item.next-2 {
          z-index: 10;
          opacity: 0.4;
          transform: translateX(650px);
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
                <Link
                  key={item}
                  href={
                    item === 'About Us' ? '/about' : 
                    item === 'Portfolio' ? '/portfolio' : '#'
                  }
                  className="text-4xl md:text-5xl font-light text-white/80 hover:text-white transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
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
        <div className="hidden md:flex items-center space-x-6 mr-8">
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
            <p className="text-xl md:text-2xl">Enhancing the Way your Brand Sells</p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="container mx-auto py-16">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">how we help you</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
            <h3 className="mb-4 text-center text-xl">Inspired Creations for Global Sellers</h3>
            <p className="max-w-2xl text-center text-gray-600">
            We're a global, 
multidisciplinary creative team with 40+ years combined 
experience in assisting eCommerce brands to thrive in busy and 
crowded marketplaces. From Amazon to Etsy, Kickstarter or your 
very own online store—we craft compelling visuals and exciting 
content that make your products impossible to ignore 
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-10">
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">Amazon Listing Optimization</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">Packaging & Print Design</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">Retouching & Editing</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">Brand Marketing & Copywriting</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">Product Photography</span>
              </div>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                <span className="text-[#d4b88e] text-center px-4">2D & 3D Product Design</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Work Section */}
        <section className="container mx-auto py-16 overflow-hidden">
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">selected work</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* New Carousel Implementation */}
            <div className="work-carousel" style={{ height: "680px" }}>
              {/* Navigation Arrows */}
              <button 
                onClick={() => {
                  const items = Array.from(document.querySelectorAll('.work-carousel-item'));
                  if (items.length <= 0) return;
                  
                  // Find the current active slide and its index
                  const activeSlide = document.querySelector('.work-carousel-item.active');
                  const activeIndex = activeSlide ? items.indexOf(activeSlide as HTMLElement) : 0;
                  
                  // Calculate new indices with circular logic
                  const prevIndex = (activeIndex - 1 + items.length) % items.length;
                  
                  // Clear all position classes
                  items.forEach(item => {
                    item.classList.remove('active', 'prev', 'prev-2', 'next', 'next-2');
                  });
                  
                  // Assign all positions consistently based on the new active index
                  items[prevIndex].classList.add('active');
                  items[(prevIndex + 1) % items.length].classList.add('next');
                  items[(prevIndex + 2) % items.length].classList.add('next-2');
                  items[(prevIndex - 1 + items.length) % items.length].classList.add('prev');
                  items[(prevIndex - 2 + items.length) % items.length].classList.add('prev-2');
                }}
                className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left text-black"></i>
              </button>
              
              <button 
                onClick={() => {
                  const items = Array.from(document.querySelectorAll('.work-carousel-item'));
                  if (items.length <= 0) return;
                  
                  // Find the current active slide and its index
                  const activeSlide = document.querySelector('.work-carousel-item.active');
                  const activeIndex = activeSlide ? items.indexOf(activeSlide as HTMLElement) : 0;
                  
                  // Calculate new indices with circular logic
                  const nextIndex = (activeIndex + 1) % items.length;
                  
                  // Clear all position classes
                  items.forEach(item => {
                    item.classList.remove('active', 'prev', 'prev-2', 'next', 'next-2');
                  });
                  
                  // Assign all positions consistently based on the new active index
                  items[nextIndex].classList.add('active');
                  items[(nextIndex + 1) % items.length].classList.add('next');
                  items[(nextIndex + 2) % items.length].classList.add('next-2');
                  items[(nextIndex - 1 + items.length) % items.length].classList.add('prev');
                  items[(nextIndex - 2 + items.length) % items.length].classList.add('prev-2');
                }}
                className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right text-black"></i>
              </button>

              {/* Carousel Items */}
              <div className="work-carousel-item prev-2">
                <Image
                  src="/24-208_KP_Cube.jpg"
                  alt="Calendar design"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="work-carousel-item prev">
                <Image
                  src="/Fluted-Storage-Boxes_Sage.jpg"
                  alt="Storage boxes"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="work-carousel-item active">
                <Image
                  src="/Caligraphy.jpg"
                  alt="Product photography"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="work-carousel-item next">
                <Image
                  src="/Pouf-Ottoman_life7_3D.jpg"
                  alt="Interior design"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover"
                />
              </div>
              
              <div className="work-carousel-item next-2">
                <Image
                  src="/placeholder.svg"
                  alt="Product design 1"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover bg-[#f5f0e6]"
                />
              </div>
              
              <div className="work-carousel-item">
                <Image
                  src="/placeholder.svg"
                  alt="Product design 2"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover bg-[#e0d6c3]"
                />
              </div>
              
              <div className="work-carousel-item">
                <Image
                  src="/placeholder.svg"
                  alt="Product design 3"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover bg-[#d4b88e]"
                />
              </div>
              
              <div className="work-carousel-item">
                <Image
                  src="/placeholder.svg"
                  alt="Product design 4"
                  width={600}
                  height={600}
                  className="h-full w-full object-cover bg-[#c5a97f]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us Section */}
        <section className="py-24 bg-[#d4b88e] w-screen">
          <div className="container mx-auto">
            <div className="mb-16 flex flex-col items-center">
              <div className="mb-6 flex items-center">
                <div className="h-[1px] w-10 bg-white/60"></div>
                <h2 className="mx-4 text-lg font-light text-white">why choose us?</h2>
                <div className="h-[1px] w-10 bg-white/60"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-white">
                  <i className="fas fa-laptop-code fa-3x"></i>
                </div>
                <h3 className="mb-4 text-xl font-medium text-white">**All-around Creative Help**</h3>
                <p className="text-sm text-white/80">
                Our flexible team takes you from concept to final visuals
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-white">
                  <i className="fab fa-amazon fa-3x"></i>
                </div>
                <h3 className="mb-4 text-xl font-medium text-white">**Proven Amazon Expertise**</h3>
                <p className="text-sm text-white/80">
                Helping brands grow on Amazon by turning browsers into 
                buyers
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-white">
                  <i className="fas fa-chart-line fa-3x"></i>
                </div>
                <h3 className="mb-4 text-xl font-medium text-white">**Creativity that Converts**</h3>
                <p className="text-sm text-white/80">
                Our eye-catching designs help drive your revenue.
                </p>
              </div>
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
                  <span className="text-sm text-gray-600">contact@chromepress.com</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstName" className="mb-1 block text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="John"
                      className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="mb-1 block text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Doe"
                      className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                      required
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
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="service" className="mb-1 block text-sm font-medium text-gray-700">
                    Service You're Interested In
                  </label>
                  <Select value={formData.service} onValueChange={handleServiceChange} required>
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
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="w-full rounded-md border-gray-200 focus:border-[#d4b88e] focus:ring-[#d4b88e]"
                    required
                  />
                </div>
                
                <div className="hidden">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    size="invisible"
                    sitekey="6Lef-G4pAAAAANJNzqnYf3IW9Nk7n01JQzSngig2"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] focus:outline-none focus:ring-2 focus:ring-[#d4b88e] focus:ring-offset-2"
                  disabled={formStatus.loading}
                >
                  {formStatus.loading ? 'Sending...' : 'Send Message'}
                </Button>

                {formStatus.success && (
                  <div className="rounded-md bg-green-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-check-circle text-green-400"></i>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-green-800">
                          Your message has been sent! We'll get back to you shortly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {formStatus.error && (
                  <div className="rounded-md bg-red-50 p-4">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <i className="fas fa-exclamation-circle text-red-400"></i>
                      </div>
                      <div className="ml-3">
                        <p className="text-sm font-medium text-red-800">
                          {formStatus.errorMessage || "Oops! Something went wrong. Please try again later."}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

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
