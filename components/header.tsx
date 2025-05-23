"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface HeaderProps {
  showAnimations?: boolean
}

export default function Header({ showAnimations = false }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [showSocials, setShowSocials] = useState(false)

  useEffect(() => {
    if (showAnimations) {
      setTimeout(() => setShowLogo(true), 800)
      setTimeout(() => setShowSocials(true), 1400)
    } else {
      setShowLogo(true)
      setShowSocials(true)
    }
  }, [showAnimations])

  return (
    <>
      {/* Animated Overlay Menu */}
      {menuOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100]"
          style={{background: 'rgba(203, 184, 136, 0.9)'}}
        >
          {/* Close button */}
          <motion.button
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed top-6 left-8 w-20 h-20 flex items-center justify-center rounded-2xl border-2 border-white bg-transparent text-white hover:bg-white/10 transition-colors cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <span className="sr-only">Close menu</span>
            <i className="fas fa-times fa-lg text-white"></i>
          </motion.button>

          {/* Menu content */}
          <div className="container mx-auto flex flex-col py-6">
            <nav className="flex flex-col items-start space-y-8 ml-8 mt-32 animate-fade-in-up">
              {[
                'Home',
                'About Us',
                'Portfolio',
                'Blog',
                'Contact'
              ].map((item) => (
                <Link
                  key={item}
                  href={
                    item === 'Home' ? '/' : 
                    item === 'About Us' ? '/about' : 
                    item === 'Portfolio' ? '/portfolio' : 
                    item === 'Contact' ? '/contact' : '#'
                  }
                  className="text-4xl md:text-5xl font-light text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <header className="container mx-auto flex items-center justify-between py-6 relative z-50">
        {/* Left column: hamburger */}
        <div className="flex-1 flex items-center">
          {!menuOpen && (
            <motion.div
              initial={showAnimations ? { y: -40, opacity: 0 } : false}
              animate={showLogo ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <button
                className="text-gray-800 focus:outline-none z-50 ml-8"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
              >
                <i className="fas fa-bars fa-lg text-black"></i>
              </button>
            </motion.div>
          )}
          {menuOpen && (
            <motion.div
              initial={{ y: -40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="ml-8 w-6"></div>
            </motion.div>
          )}
        </div>

        {/* Center: logo */}
        <div className="flex-1 flex justify-center">
          <motion.div
            initial={showAnimations ? { y: -100, opacity: 0 } : false}
            animate={showLogo ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Link href="/">
              <Image 
                src="/Logo.png" 
                alt="Logo" 
                width={156} 
                height={52}
                className="object-contain"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right column: social icons */}
        <div className="flex-1 flex justify-end items-center space-x-6 mr-8">
          <motion.div
            initial={showAnimations ? "hidden" : false}
            animate={showSocials ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } }
            }}
            className="flex items-center space-x-6"
          >
            {["facebook-f", "instagram", "twitter", "linkedin-in"].map((icon, i) => (
              <motion.div
                key={icon}
                variants={{
                  hidden: { y: -40, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
                }}
              >
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  <i className={`fab fa-${icon} fa-lg text-black`}></i>
                  <span className="sr-only">{icon}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </header>
    </>
  )
} 