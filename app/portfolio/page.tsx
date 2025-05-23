"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"

const BeforeAfterSlider = dynamic(() => import("@/components/BeforeAfterSlider"), { ssr: false })

// Define interfaces for type safety
interface AdditionalImage {
  src: string;
  alt: string;
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string[];
  image: string;
  client: string;
  gridClass: string;
  bgColor?: string;
  description?: string;
  additionalImages?: AdditionalImage[];
  beforeImage?: string;
  afterImage?: string;
}

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [isFiltered, setIsFiltered] = useState(false)

  // Portfolio items data with categories and custom sizes
  const portfolioItems: PortfolioItem[] = [
     {
      id: 1,
      title: "Magnetic Calendar",
      category: ["Print Design"],
      image: "/id1/id1_25-036-01.jpg",
      client: "Stationery Brand",
      gridClass: "col-span-6 row-span-5",
      description: "Magnetic Calendar. This sleek magnetic calendar combines minimal design with everyday practicality, making it perfect for brightening up kitchens, home offices or dorms. The spacious monthly layout and striking typography offer an elegant solution for organizing schedules at a glance.",
      additionalImages: [
        { src: "/id1/id1_25-036-02.jpg", alt: "Calendar detail" },
        { src: "/id1/id1_25-036-03.jpg", alt: "Calendar spread" },
        { src: "/id1/id1_25-036-04.jpg", alt: "Front cover" },
      ]
    },
     {
      id: 2,
      title: "Adult Coloring Book",
      category: ["Print Design"],
      image: "/id2/id2_25-036-01.jpg",
      client: "Stationery Brand",
      gridClass: "col-span-3 row-span-3",
      description: "Adult Coloring Book. This set of two adult coloring books promotes self-expression and relaxation through art. Each book features 64 pages of unique designs paired with inspirational quotes, offering a soothing, creative escape.",
      additionalImages: [
        { src: "/id2/id2_25-036-02.jpg", alt: "Book spread" },
        { src: "/id2/id2_25-036-03.jpg", alt: "Book detail" },
        { src: "/id2/id2_25-036-04.jpg", alt: "Infographic" }
      ]
    },
     
{
id: 3,
title: "High Contrast Baby Book Toy Set of 3",
category: ["Product Design"],
image: "/id3/id3_23-137-01.jpg",
client: "Children's Toys",
gridClass: "col-span-3 row-span-3",
description: "This baby book toy set supports early development in babies aged 3 months and up. It includes a soft cotton, 4-double-page book with a tie rope and built-in sounder, a crinkle toy with a teether, and a toy block featuring a rattle. Made from fabrics designed for safety, each piece inspires play that stimulates visual and tactile senses.",
additionalImages: [
{ src: "/id3/id3_23-137-02.jpg", alt: "Book spread" },
{ src: "/id3/id3_23-137-03.jpg", alt: "Toy detail" },
{ src: "/id3/id3_23-137-04.jpg", alt: "Set overview" }
]
},
    
{
  id: 4,
  title: "Soft Baby Book",
  category: ["Product Design", "Product Photography"],
  image: "/id4/id4_22-040-01.jpg",
  client: "Stationery Brand",
  gridClass: "col-span-3 row-span-3",
  description: "This soft baby book was designed to aid in the sensory development of infants through gentle textures and calming colors. Featuring a variety of soft fabrics, every detail supports sensory exploration and early development.",
  additionalImages: [
    { src: "/id4/id4_22-040-02.jpg", alt: "Book spread" },
    { src: "/id4/id4_22-040-03.jpg", alt: "Book detail" },
    { src: "/id4/id4_22-040-04.jpg", alt: "Texture close-up" },
    { src: "/id4/id4_22-040-05.jpg", alt: "Book pages" },
    { src: "/id4/id4_22-040-06.jpg", alt: "Full set" }
  ]
},
{
  id: 5,
  title: "Kids Gardening Set",
  category: ["Product Design"],
  image: "/id5/id5_24-069-01.jpg",
  client: "Children's Toys",
  gridClass: "col-span-3 row-span-3",
  description: "This fun gardening set for kids inspires hands-on learning and outdoor play. Available in pink for girls and sage for boys—it includes all the tools a young one needs to go outside and get gardening. Featuring high-quality materials and wooden handles, every detail was created with safety, style, and functionality in mind.",
  additionalImages: [
    { src: "/id5/id5_24-069-02.jpg", alt: "Garden tools set" },
    { src: "/id5/id5_24-069-03.jpg", alt: "Tools detail" },
    { src: "/id5/id5_24-069-04.jpg", alt: "Set overview" },
    { src: "/id5/id5_24-069-05.jpg", alt: "Tools in use" },
    { src: "/id5/id5_24-069-06.jpg", alt: "Full collection" }
  ]
},
    
{
  id: 6,
  title: "Product Photography",
  category: ["Product Photography"],
  image: "/id6/id6_after-02.jpg",
  client: "E-commerce Brands",
  gridClass: "col-span-3 row-span-3",
  description: "Our photography and editing work evolves everyday product shots into visually pleasing images for online marketplaces. Our team balances natural light, thoughtful composition, and expert retouching to create scenes that elevate your brand while showcasing product details with clarity and style. No matter the product, our stand-out visuals are crafted to capture attention, build trust, and drive sales.",
  beforeImage: "/id6/id6_after-01.jpg",
  afterImage: "/id6/id6_after-02.jpg",
  additionalImages: [
    { src: "/id6/id6_after-02.jpg", alt: "Before and after product shot" },
    { src: "/id6/id6_before-03.jpg", alt: "Raw product photography" },
    { src: "/id6/id6_after-04.jpg", alt: "Enhanced product image" },
    { src: "/id6/id6_before-05.jpg", alt: "Original product photo" },
    { src: "/id6/id6_after-06.jpg", alt: "Final product showcase" }
  ]
},
{
  id: 7,
  title: "Musical Instruments for Kids",
  category: ["Product Design"],
  image: "/id7/id7_musical instruments_23-191-01.jpg",
  gridClass: "col-span-3 row-span-3",
  description: "",
  client: "Children's Toys",
  additionalImages: [
    { src: "/id7/id7_musical instruments_23-191-02.jpg", alt: "Musical instruments" },
    { src: "/id7/id7_musical instruments_23-191-03.jpg", alt: "Musical instruments" },
    { src: "/id7/id7_musical instruments_23-191-04.jpg", alt: "Musical instruments" },
    { src: "/id7/id7_musical instruments_23-191-05.jpg", alt: "Musical instruments" },
    { src: "/id7/id7_musical instruments_23-191-06.jpg", alt: "Musical instruments" }
  ]
},
 {
  id: 8,
  title: "Spiral Notebook",
  category: ["Print Design"],
  image: "/id8/23_010-02.jpg",
  client: "Stationery Brand",
  gridClass: "col-span-3 row-span-3",
  description: "Spiral notebook with handmade floral art and cheeky calligraphy.",
  additionalImages: [
    { src: "/id8/23_010_23_010_Swear_word_to_do_planner4.jpg", alt: "Front mockup on marble tray" },
    { src: "/id8/23_010_23_010_Swear_word_to_do_planner2.jpg", alt: "Hand painting florals" },
    { src: "/id8/23_010_23_010_Swear_word_to_do_planner3.jpg", alt: "Top-down mockup with pens" },
    { src: "/id8/23_010-02.jpg", alt: "Front cover" }
  ]
},
{
        id: 9,
        title: "Christmas Cards",
        category: ["Print Design"],
        image: "/id9/id9_24-150-01.jpg",
        gridClass: "col-span-3 row-span-3",
        description: ".",
        client: "Stationery Brand",
        additionalImages: [
          { src: "/id9/id9_24-150-02.jpg", alt: "" },
          { src: "/id9/id9_24-150-03.jpg", alt: "" },
          { src: "/id9/id9_24-150-04.jpg", alt: "" },
          { src: "/id9/id9_24-150-05.jpg", alt: "" }
        ]
      },
      {
        id: 10,
        title: "Boucle pouf ottoman",
        category: ["Product Design", "Product Photography"],
        image: "/id10/id10_24-086-01.jpg",
        gridClass: "col-span-6 row-span-6",
        description: ".",
        client: "Furniture Brand",
        additionalImages: [
          { src: "/id10/id10_24-086-02.jpg", alt: "" },
          { src: "/id10/id10_24-086-03.jpg", alt: "" },
        { src: "/id10/id10_24-086-04.jpg", alt: "" }
        ]
          },
          {
            id: 11,
            title: "Concrete book end packaging" ,
            category: ["Print Design"],
            image: "/id11/modern bookends1 mockup.jpg",
            gridClass: "col-span-6 row-span-3",
            client: "Furniture Brand",
            description: ".",
            additionalImages: [
            { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-01.jpg", alt: "" },
            { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-02.jpg", alt: "" },
            { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-03.jpg", alt: "" },
            { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-04.jpg", alt: "" },

            ]
            },
    {
      id: 12,
      title: "Handmade Textiles",
      category: ["Interior Design"],
      image: "/placeholder.svg",
      bgColor: "bg-[#e9d9c9]",
      client: "Textile Artisans",
      gridClass: "col-span-4 row-span-3"
    },
    {
      id: 13,
      title: "Wellness Products",
      category: ["Product Photography"],
      image: "/placeholder.svg",
      bgColor: "bg-[#dae1d9]",
      client: "Organic Spa",
      gridClass: "col-span-4 row-span-4"
    },
  ]

  // Filter categories 
  const categories = [
    "all",
    "Product Photography",
    "Interior Design",
    "Graphic Design",
    "Print Design",
    "Product Design"
  ]

  // Filter the portfolio items based on the active filter
  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category.includes(activeFilter))

  // Handle portfolio item click
  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item)
    setModalOpen(true)
    document.body.style.overflow = 'hidden' // Prevent scrolling when modal is open
  }

  // Close modal and reset body overflow
  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  // Reset isFiltered when activeFilter changes to "all"
  useEffect(() => {
    if (activeFilter === "all") {
      setIsFiltered(false)
    }
  }, [activeFilter])

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

        {/* Portfolio Grid - Custom Masonry Layout */}
        <section className="py-8 container mx-auto px-4">
          <style jsx>{`
            .masonry-grid {
              display: grid;
              grid-template-columns: repeat(12, 1fr);
              grid-auto-rows: 160px;
              gap: 16px;
            }
            
            /* Desktop to Tablet Transition */
            @media (max-width: 1200px) {
              .masonry-grid {
                grid-template-columns: repeat(6, 1fr);
                grid-auto-rows: 140px;
              }
              
              .masonry-grid > div {
                grid-column: span min(var(--cols, 3), 6) !important;
              }
              
              .masonry-grid > div.col-span-5 {
                --cols: 6;
              }
              
              .masonry-grid > div.col-span-4 {
                --cols: 3;
              }
              
              .masonry-grid > div.col-span-3 {
                --cols: 3;
              }
            }
            
            /* Tablet to Mobile Transition */
            @media (max-width: 768px) {
              .masonry-grid {
                grid-template-columns: repeat(2, 1fr);
                grid-auto-rows: 220px;
                gap: 12px;
              }
              
              .masonry-grid > div {
                grid-column: span 2 !important;
                grid-row: span 1 !important;
              }
            }
            
            /* Small Mobile */
            @media (max-width: 480px) {
              .masonry-grid {
                grid-template-columns: 1fr;
                grid-auto-rows: 300px;
                gap: 10px;
              }
              
              .masonry-grid > div {
                grid-column: span 1 !important;
              }
            }
            
            /* Hover effect styles */
            .image-overlay {
              position: absolute;
              inset: 0;
              background: rgba(0, 0, 0, 0.3);
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              opacity: 0;
              transition: opacity 0.3s ease;
              color: white;
              text-align: center;
              padding: 2rem;
            }
            
            .portfolio-item:hover .image-overlay {
              opacity: 1;
            }
            
            .image-overlay h3 {
              font-size: 2rem;
              font-weight: 300;
              margin-bottom: 0.5rem;
            }
            
            .image-overlay p {
              font-size: 1.2rem;
              opacity: 0.9;
            }
            
            @media (max-width: 768px) {
              .image-overlay h3 {
                font-size: 1.5rem;
              }
              
              .image-overlay p {
                font-size: 1rem;
              }
            }
          `}</style>
          
          <div className="masonry-grid">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className={`portfolio-item group overflow-hidden rounded-lg transition-all ${item.gridClass} cursor-pointer`}
                data-col={item.gridClass.split('-')[2]}
                onClick={() => handleItemClick(item)}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={1200}
                    className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 ${item.bgColor || ''}`}
                  />
                  <div className="image-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.category.join(', ')}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Detailed Project Modal */}
          {modalOpen && selectedItem && (
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto" style={{ pointerEvents: 'none' }}>
              <div className="min-h-screen px-4 flex items-center justify-center" style={{ pointerEvents: 'auto', zIndex: 99999 }}>
                <div className="bg-white w-full max-w-6xl rounded-lg overflow-hidden flex flex-col md:flex-row">
                  {/* Close button */}
                  <button 
                    onClick={closeModal} 
                    className="absolute top-4 right-4 text-white text-2xl z-50 h-10 w-10 flex items-center justify-center rounded-full bg-black bg-opacity-50 hover:bg-opacity-70"
                  >
                    ×
                  </button>
                  
                  {/* Left side: Scrollable images */}
                  <div className="md:w-2/3 p-0 overflow-y-auto max-h-[90vh] md:max-h-[80vh]">
                    <div className="sticky top-0 bg-white p-6 md:hidden">
                      <h2 className="text-2xl font-medium">{selectedItem.title}</h2>
                      <p className="text-gray-500">{selectedItem.category.join(', ')}</p>
                    </div>
                    
                    <div className="space-y-4 p-4">
                      {/* Main image */}
                      <div className="w-full">
                        {selectedItem.beforeImage && selectedItem.afterImage ? (
                          <BeforeAfterSlider
                            before={selectedItem.beforeImage}
                            after={selectedItem.afterImage}
                            altBefore="Przed edycją"
                            altAfter="Po edycji"
                          />
                        ) : (
                          <Image
                            src={selectedItem.image}
                            alt={selectedItem.title}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        )}
                      </div>
                      
                      {/* Additional images */}
                      {selectedItem.additionalImages && selectedItem.additionalImages.map((img: AdditionalImage, index: number) => (
                        <div key={index} className="w-full">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            width={1200}
                            height={800}
                            className="w-full h-auto object-cover rounded-lg"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Right side: Project details */}
                  <div className="md:w-1/3 p-6 bg-[#f8f8f8] hidden md:block">
                    <div className="sticky top-6">
                      <h2 className="text-3xl font-medium mb-3">{selectedItem.title}</h2>
                      <p className="text-gray-500 mb-6">{selectedItem.category.join(', ')}</p>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-medium mb-2">About this project</h3>
                        <p className="text-gray-600 leading-relaxed">
                          {selectedItem.description || "A beautifully crafted project showcasing our expertise in " + selectedItem.category.join(', ') + "."}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-medium mb-2">Client</h3>
                        <p className="text-gray-600">{selectedItem.client}</p>
                      </div>
                      
                      <Button className="w-full py-6 rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] text-white">
                        Contact Us About This Project
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f5f0e6]">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              Let's create something amazing together. Our creative team is ready to help you bring your vision to life.
            </p>
            <Link href="/contact">
              <Button className="rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] px-8 py-2 text-white">
                Contact Us
              </Button>
            </Link>
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
                  <Link href="/portfolio" className="hover:text-gray-900">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-gray-900">
                    Blog
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