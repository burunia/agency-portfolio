"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import AnimatedRibbon from "@/components/animated-ribbon"
import React, { useState, useRef, ChangeEvent, FormEvent, useEffect } from "react"
import emailjs from '@emailjs/browser'
import ReCAPTCHA from "react-google-recaptcha"
import { motion } from "framer-motion"
import Header from "@/components/header"

export default function AgencyPortfolio() {
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
  const [showHeadline, setShowHeadline] = useState(false)
  const [headlineText, setHeadlineText] = useState('')
  const [subtitleText, setSubtitleText] = useState('')
  const [activeSlide, setActiveSlide] = useState(2)

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init({
      publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setShowHeadline(true), 800)
  }, [])

  // Custom typing effect for headline and subtitle
  useEffect(() => {
    if (showHeadline) {
      const headline = "WE DESIGN"
      let currentIndex = 0
      
      const interval = setInterval(() => {
        if (currentIndex < headline.length) {
          setHeadlineText(prev => prev + headline[currentIndex])
          currentIndex++
        } else {
          clearInterval(interval)
          // Start typing subtitle after headline is done
          const subtitle = "Enhancing the Way Your Brand Sells"
          let subtitleIndex = 0
          
          const subtitleInterval = setInterval(() => {
            if (subtitleIndex < subtitle.length) {
              setSubtitleText(prev => prev + subtitle[subtitleIndex])
              subtitleIndex++
            } else {
              clearInterval(subtitleInterval)
            }
          }, 100)
        }
      }, 100)
    }
  }, [showHeadline])

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
      // Remove reCAPTCHA logic
      let recaptchaToken = "not_used"

      if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
        throw new Error("Please fill out all required fields")
      }

      // Log environment variables and configuration
      console.log("Environment:", process.env.NODE_ENV);
      console.log("EmailJS Config:", {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.slice(0, 5) + '...',
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      });

      const templateParams = {
        name: `${formData.firstName} ${formData.lastName}`,
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        from_email: formData.email,
        title: `${formData.service} Inquiry`,
        service: formData.service,
        message: formData.message
      }

      console.log("Sending email with params:", {
        ...templateParams,
        message: templateParams.message.slice(0, 50) + '...'
      });

      try {
        // Add timeout to prevent infinite loading
        const timeoutPromise = new Promise((_, reject) => {
          setTimeout(() => reject(new Error('Request timeout')), 10000);
        });

        const emailPromise = emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          templateParams
        );

        const response = await Promise.race([emailPromise, timeoutPromise]);
        
        console.log("EmailJS Response:", response);
        
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          service: '',
          message: ''
        });
        setFormStatus({ loading: false, success: true, error: false, errorMessage: '' });
        
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } catch (emailError: any) {
        console.error("EmailJS Error:", {
          message: emailError.message,
          text: emailError.text,
          status: emailError.status,
          stack: emailError.stack
        });
        throw new Error(emailError.text || 'Failed to send email. Please check your network connection and try again.');
      }
    } catch (error: any) {
      console.error("Form Error:", {
        message: error.message,
        stack: error.stack
      });
      setFormStatus({ 
        loading: false, 
        success: false, 
        error: true, 
        errorMessage: error.message || 'Something went wrong. Please try again later.'
      })
      
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, error: false, errorMessage: '' }))
      }, 8000)
    }
  }

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + 8) % 8)
  }

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % 8)
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
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Vidaloka&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
      
      <Header showAnimations={true} />

      <main className="flex-1 main-container">
        {/* Hero Section */}
        <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <AnimatedRibbon />
          </div>
          <div className="container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[30%] mx-auto text-center z-10 flex flex-col items-center justify-center">
            <motion.h1
              className="mb-4 text-5xl font-bold uppercase tracking-tight md:text-6xl font-vidaloka"
              initial={{ opacity: 0 }}
              animate={showHeadline ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span style={{ color: '#d4b88e' }}>
                {headlineText}
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-roboto"
              initial={{ opacity: 0 }}
              animate={showHeadline ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {subtitleText}
            </motion.p>
          </div>
          <motion.div
            className="absolute bottom-[108px] left-0 right-0 mx-auto w-fit"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              delay: 2,
              duration: 0.5,
              ease: "easeOut"
            }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center"
            >
              <span className="text-[#d4b88e] text-sm mb-2">Scroll Down</span>
              <i className="fas fa-chevron-down text-[#d4b88e] text-2xl"></i>
            </motion.div>
          </motion.div>
        </section>

        {/* What We Do Section */}
        <motion.section
          className="py-16 main-container overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mb-12 flex flex-col items-center prose prose-lg prose-headings:font-bold prose-headings:tracking-tight prose-headings:mb-4 prose-p:text-gray-700 prose-p:mb-6 prose-p:leading-relaxed prose-p:text-lg max-w-4xl mx-auto">
            <div className="mb-8 flex items-center">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-black font-vidaloka">how we help you</h1>
            </div>
            <p className="font-roboto">
              We're a global, multidisciplinary creative team with 40+ years combined 
              experience in assisting e-commerce brands to thrive in busy and 
              crowded marketplaces. From Amazon to Etsy, Kickstarter or your 
              very own online store—we craft compelling visuals and exciting 
              content that make your products impossible to ignore.
            </p>
          </div>

          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              {[
                {
                  icon: 'fa-amazon',
                  iconType: 'fab',
                  label: 'Amazon Listing Optimization',
                  desc: 'Boost your Amazon sales with optimized listings.'
                },
                {
                  icon: 'fa-box-open',
                  iconType: 'fas',
                  label: 'Packaging & Print Design',
                  desc: 'Eye-catching packaging and print materials.'
                },
                {
                  icon: 'fa-magic',
                  iconType: 'fas',
                  label: 'Retouching & Editing',
                  desc: 'Professional retouching and image editing.'
                },
                {
                  icon: 'fa-bullhorn',
                  iconType: 'fas',
                  label: 'Brand Marketing & Copywriting',
                  desc: 'Compelling brand stories and marketing copy.'
                },
                {
                  icon: 'fa-camera-retro',
                  iconType: 'fas',
                  label: 'Product Photography',
                  desc: 'High-quality product photography for all platforms.'
                },
                {
                  icon: 'fa-cube',
                  iconType: 'fas',
                  label: '2D & 3D Product Design',
                  desc: 'Stunning 2D/3D visuals for your products.'
                }
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center text-center bg-white rounded-xl shadow-md p-8">
                  <div className="mb-6 flex items-center justify-center text-[#d4b88e] text-3xl">
                    <i className={`${item.iconType} ${item.icon}`}></i>
                  </div>
                  <div className="font-semibold text-lg mb-2 text-gray-900">{item.label}</div>
                  <div className="text-gray-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Selected Work Section */}
        <section className="container mx-auto py-16 overflow-hidden main-container">
          <div className="mb-6 md:mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black font-vidaloka">selected work</h2>
            </div>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div className="work-carousel relative w-full overflow-hidden">
              <button 
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left text-black"></i>
              </button>
              
              <button 
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right text-black"></i>
              </button>

              <div className="relative w-full h-[103.5vw] md:h-[460px] mt-6 md:mt-10">
                {[
                  { src: "/id1/id1_25-036-01.jpg", alt: "Calendar design" },
                  { src: "/id3/id3_23-137-01.jpg", alt: "Storage boxes" },
                  { src: "/id6/id6_after-02.jpg", alt: "Product photography" },
                  { src: "/id8/23_010_23_010_Swear_word_to_do_planner2.jpg", alt: "Interior design" },
                  { src: "/id9/id9_24-150-01.jpg", alt: "Product design 1" },
                  { src: "/id10/id10_24-086-01.jpg", alt: "Product design 2" },
                  { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-01.jpg", alt: "Product design 3" },
                  { src: "/id12/id12_23-217-05.jpg", alt: "Product design 4" }
                ].map((item, index) => {
                  const position = (index - activeSlide + 8) % 8
                  const isActive = position === 0
                  const isPrev = position === 7
                  const isPrev2 = position === 6
                  const isNext = position === 1
                  const isNext2 = position === 2

                  return (
                    <div 
                      key={item.src} 
                      className={`work-carousel-item absolute transition-all duration-500 ease-in-out w-[90vw] h-[90vw] md:w-[400px] md:h-[400px] ${
                        isActive ? 'active' : 
                        isPrev ? 'prev' : 
                        isPrev2 ? 'prev-2' : 
                        isNext ? 'next' : 
                        isNext2 ? 'next-2' : ''
                      }`}
                      style={{ 
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'center center',
                        transform: isActive ? (typeof window !== 'undefined' && window.innerWidth < 768 ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(1.3)') : 
                                 isPrev ? 'translate(-120%, -50%) scale(0.9)' :
                                 isPrev2 ? 'translate(-180%, -50%) scale(0.8)' :
                                 isNext ? 'translate(20%, -50%) scale(0.9)' :
                                 isNext2 ? 'translate(80%, -50%) scale(0.8)' :
                                 'translate(80%, -50%) scale(0.8)',
                        opacity: isActive ? 1 :
                                isPrev || isNext ? 0.8 :
                                isPrev2 || isNext2 ? 0.5 : 0,
                        zIndex: isActive ? 2 :
                                isPrev || isNext ? 1 : 0,
                      }}
                    >
                      <Link href="/portfolio">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={400}
                          height={400}
                          className="h-full w-full object-cover rounded-lg shadow-lg"
                        />
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <motion.section
          className="container main-container mx-auto py-16 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black font-vidaloka">ready to create together?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h3 className="mb-4 text-2xl font-medium font-vidaloka">Let's elevate your brand</h3>
              <div className="mb-4 h-1 w-12 bg-[#d4b88e]"></div>
              <p className="mb-6 text-gray-600 font-roboto">
                Ready to stand out in the competitive e-commerce landscape? Our team of experts is here to help you
                create visuals and content that converts. Fill out the form, and we'll get back to you within 24 hours.
              </p>
              <div className="mt-8 space-y-4 md:mt-8">
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-phone fa-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600">+1 (208) 631-3301</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5f0e6] text-[#d4b88e]">
                    <i className="fas fa-envelope fa-lg"></i>
                  </div>
                  <span className="text-sm text-gray-600">contact.sello.art@gmail.com</span>
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
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
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
          </div>
        </motion.section>
      </main>

      {/* Why Choose Us Section - moved outside main for full-bleed background */}
      <motion.section
        className="py-16 bg-[#d4b88e] main-container overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <div className="container mx-auto">
          <div className="mb-16 flex flex-col items-center">
            <div className="mb-6 flex items-center">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white font-vidaloka">why choose us?</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: 'fa-laptop-code',
                title: 'All-around Creative Help',
                description: 'Our flexible team takes you from concept to final visuals.'
              },
              {
                icon: 'fa-amazon',
                title: 'Proven Amazon Expertise',
                description: 'Driving Amazon growth through conversion.'
              },
              {
                icon: 'fa-chart-line',
                title: 'Creativity that Converts',
                description: 'Our eye-catching designs help drive your revenue.'
              }
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-6 text-white">
                  <i className={`${item.icon === 'fa-amazon' ? 'fab' : 'fas'} ${item.icon} fa-3x`}></i>
                </div>
                <h3 className="mb-4 text-xl font-medium text-white">{item.title}</h3>
                <p className="text-sm text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-12 overflow-hidden">
        <div className="container mx-auto px-4 main-container">
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
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Blog', href: '/blog' },
                  { name: 'Contact', href: '/contact' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase font-vidaloka">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>contact.sello.art@gmail.com</li>
                <li>1611 W. Warren St</li>
                <li>Boise, Idaho</li>
                <li>83706</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
            <p>© {new Date().getFullYear()} Sello.art. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
