"use client"

import Image from "next/image"
import Link from "next/link"
import React, { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import Header from "@/components/header"

export default function ContactPage() {
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
      
      <Header />

      <main className="flex-1 main-container">
        {/* Hero Section */}
        <section className="container mx-auto py-16 main-container">
          <div className="uppercase tracking-wider text-[#d4b88e] font-medium mb-4 ml-4 md:ml-0">GET IN TOUCH</div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative order-1 md:order-2">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full bg-[#d4b88e]/20"></div>
              <Image 
                src="/website speach bubbles-01.png?height=500&width=500" 
                alt="Contact us"
                width={600} 
                height={600}
                // className="rounded-full border-4 border-white shadow-xl"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-[#d4b88e] -z-10"></div>
            </div>
            <div className="space-y-6 order-2 md:order-1">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-800 font-vidaloka">
                Let's <span className="relative inline-block">
                  Create Together
                  <span className="absolute bottom-2 left-0 w-full h-3 bg-[#d4b88e]/20 -z-10"></span>
                </span>
              </h1>
              <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
              
              <p className="paragraph-main">
                Ready to elevate your brand with stunning visuals? We're here to help you stand out in the competitive marketplace and turn browsers into buyers.
              </p>
              
              <div className="mt-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-map-marker-alt fa-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-medium font-vidaloka">Our Location</h3>
                    <p className="text-gray-600 font-roboto">1611 W. Warren St, Boise, Idaho 83706</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-phone fa-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-medium font-vidaloka">Phone Number</h3>
                    <p className="text-gray-600 font-roboto">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                  <div>
                    <h3 className="font-medium font-vidaloka">Email Address</h3>
                    <p className="text-gray-600 font-roboto">contact@chromepress.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="container mx-auto py-16 mb-20 main-container">
          <div className="mb-12 flex flex-col items-center">
            <h2 className="text-3xl md:text-4xl font-bold font-vidaloka">send us a message</h2>
            <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded"></div>
            <h3 className="mb-4 text-center text-xl max-w-2xl font-vidaloka">Fill out the form below and our team will get back to you within 24 hours</h3>
          </div>

          <div className="max-w-4xl mx-auto rounded-lg border border-gray-100 bg-white p-8 shadow-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
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
                  rows={6}
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
                className="w-full rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#d4b88e] focus:ring-offset-2"
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
              <h3 className="mb-4 text-sm font-semibold uppercase">Services</h3>
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
              <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>
                  <Link href="/" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Home
                  </Link>
                </li>
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
                  <Link href="/contact" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
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