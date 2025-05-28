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
      publicKey: 't-nDITmlVwB7mSBbT'
    });
  }, []);

  useEffect(() => {
    setTimeout(() => setShowHeadline(true), 800)
  }, [])

  // Custom typing effect for headline and subtitle
  useEffect(() => {
    if (showHeadline) {
      const headline = "WE DESIGN,_"
      let currentIndex = 0
      
      const interval = setInterval(() => {
        if (currentIndex < headline.length) {
          setHeadlineText(prev => prev + headline[currentIndex])
          currentIndex++
        } else {
          clearInterval(interval)
          // Start typing subtitle after headline is done
          const subtitle = "Enhancing the Way your Brand Sells"
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
      let recaptchaToken = "development_token"
      
      if (recaptchaRef.current && process.env.NODE_ENV !== "development") {
        try {
          recaptchaToken = await recaptchaRef.current.executeAsync() || "token_error"
          recaptchaRef.current.reset()
        } catch (recaptchaError) {
          console.warn("reCAPTCHA error:", recaptchaError)
        }
      }

      if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
        throw new Error("Please fill out all required fields")
      }

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
        await emailjs.send(
          'service_n02r79q',
          'template_dvnupyv',
          templateParams
        );
        
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
        throw new Error(emailError.text || 'Failed to send email. Please check your network connection and try again.');
      }
    } catch (error: any) {
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
      
      <Header showAnimations={true} />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-screen w-screen overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <AnimatedRibbon />
          </div>
          <div className="container relative mx-auto text-center z-10 h-full flex flex-col justify-center">
            <motion.h1
              className="mb-4 text-5xl font-bold uppercase tracking-tight md:text-6xl"
              initial={{ opacity: 0 }}
              animate={showHeadline ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span style={{ color: '#d4b88e' }}>
                {headlineText}
              </span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl"
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
          className="container mx-auto py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          <div className="mb-12 flex flex-col items-center">
            <div className="mb-4 flex items-center">
              <div className="h-[1px] w-10 bg-gray-300"></div>
              <h2 className="mx-4 text-lg font-light">how we help you</h2>
              <div className="h-[1px] w-10 bg-gray-300"></div>
            </div>
            <h3 className="mb-4 text-center text-xl">Inspired Creations for Global Sellers</h3>
            <p className="max-w-2xl text-center text-gray-600">
              We're a global, multidisciplinary creative team with 40+ years combined 
              experience in assisting eCommerce brands to thrive in busy and 
              crowded marketplaces. From Amazon to Etsy, Kickstarter or your 
              very own online store—we craft compelling visuals and exciting 
              content that make your products impossible to ignore 
            </p>
          </div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
          >
            {[
              'Amazon Listing Optimization',
              'Packaging & Print Design',
              'Retouching & Editing',
              'Brand Marketing & Copywriting',
              'Product Photography',
              '2D & 3D Product Design'
            ].map((service, index) => (
              <div key={service} className="flex flex-col items-center text-center group">
                <div className="w-[160px] h-[160px] md:w-[180px] md:h-[180px] rounded-full border border-[#d4b88e]/50 flex items-center justify-center mb-4 transition-all hover:bg-[#f5f0e6]">
                  <span className="text-[#d4b88e] text-center px-4">{service}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.section>

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
            <div className="work-carousel relative" style={{ height: "500px", margin: "0 auto" }}>
              <button 
                onClick={handlePrevSlide}
                className="absolute left-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                aria-label="Previous slide"
              >
                <i className="fas fa-chevron-left text-black"></i>
              </button>
              
              <button 
                onClick={handleNextSlide}
                className="absolute right-4 top-1/2 z-40 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                aria-label="Next slide"
              >
                <i className="fas fa-chevron-right text-black"></i>
              </button>

              <div className="relative w-full h-full">
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
                      className={`work-carousel-item absolute transition-all duration-500 ease-in-out ${
                        isActive ? 'active' : 
                        isPrev ? 'prev' : 
                        isPrev2 ? 'prev-2' : 
                        isNext ? 'next' : 
                        isNext2 ? 'next-2' : ''
                      }`}
                      style={{ 
                        transform: isActive ? 'translate(-50%, -50%) scale(1.3)' : 
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
                        width: '400px',
                        height: '400px',
                        left: '50%',
                        top: '50%',
                        transformOrigin: 'center center'
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

        {/* Why Choose Us Section */}
        <motion.section
          className="py-24 bg-[#d4b88e] w-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          <div className="container mx-auto">
            <div className="mb-16 flex flex-col items-center">
              <div className="mb-6 flex items-center">
                <div className="h-[1px] w-10 bg-white/60"></div>
                <h2 className="mx-4 text-lg font-light text-white">why choose us?</h2>
                <div className="h-[1px] w-10 bg-white/60"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-16 md:grid-cols-3">
              {[
                {
                  icon: 'fa-laptop-code',
                  title: 'All-around Creative Help',
                  description: 'Our flexible team takes you from concept to final visuals'
                },
                {
                  icon: 'fa-amazon',
                  title: 'Proven Amazon Expertise',
                  description: 'Helping brands grow on Amazon by turning browsers into buyers'
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

        {/* Contact Form Section */}
        <motion.section
          className="container mx-auto py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
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
        </motion.section>
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
                  className="w-[156px] h-[52px] object-contain"
                />
              </div>
              <p className="text-sm text-gray-600">
                We help e-commerce brands stand out with stunning visuals and strategic content.
              </p>
              <div className="flex space-x-4">
                {["facebook-f", "instagram", "twitter", "linkedin-in"].map((icon) => (
                  <Link key={icon} href="#" className="hover:text-gray-900">
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
                    <Link href="#" className="hover:text-gray-900">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                {[
                  { name: 'About Us', href: '/about' },
                  { name: 'Portfolio', href: '/portfolio' },
                  { name: 'Blog', href: '#' },
                  { name: 'Contact', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="hover:text-gray-900">
                      {item.name}
                    </Link>
                  </li>
                ))}
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
