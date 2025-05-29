"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import dynamic from "next/dynamic"
import Header from "@/components/header"

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
      title: "Kids Cooking Set",
      category: ["Product Design","3D Modeling","Product Photography"],
      image: "/id13/id13_23-219-01.jpg",
      gridClass: "col-span-6 row-span-5",
      client: "Children's Toys",
      description: "This kids' cooking set is charmingly presented through clean, well-lit images that highlight each piece with supreme clarity. The soft colors give it a cohesive, high-quality look. Lifestyle shots featuring children actively using the product bring it to life and help parents envision real use. The packaging design is modern, minimal, and informative—clearly tailored for gifting and appeal. The images and box design make this product instantly attractive and ready for retail.",
      additionalImages: [
        { src: "/id13/id13_23-219-02.jpg", alt: "" },
        { src: "/id13/id13_23-219-03.jpg", alt: "" },
        { src: "/id13/id13_23-219-04.jpg", alt: "" },
        { src: "/id13/id13_23-219-05.jpg", alt: "" },
        { src: "/id13/id13_23-219-06.jpg", alt: "" }
      ]
    },
    {
      id: 2,
      title: "Adult Coloring Book",
      category: ["Print Design","Product Photography"],
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
      category: ["3D Modeling","Product Photography","Print Design"],
      image: "/id7/id7_musical instruments_23-191-01.jpg",
      gridClass: "col-span-3 row-span-3",
      client: "Children's Toys",
      description: "Using high-quality 3D modeling, product rendering and lifestyle photography, we created a visually striking design for a children's instrument set. Each instrument was carefully modeled and rendered to highlight natural textures and pastel tones. Paired with engaging lifestyle shots and a fun packaging design, the result is a polished, standout presentation that garners trust from parents and interest in online marketplaces.",
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
      category: ["Print Design","Product Photography","Graphic Design"],
      image: "/id8/23_010-02.jpg",
      client: "Stationery Brand",
      gridClass: "col-span-3 row-span-3",
      description: "This bold to do planner combines floral artwork with playful profanity to create a vibrant and empowering product. The richly colored botanical illustrations bring energy and personality to the dark, textured cover. Providing motivational quotes and allowing you to track your health and fitness, this standout product balances artistic charm with retail-ready attitude.",
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
      category: ["Print Design","Graphic Design","Product Photography"],
      image: "/id9/id9_24-150-01.jpg",
      gridClass: "col-span-3 row-span-3",
      client: "Stationery Brand",
      description: "This festive set of 20 Watercolor Christmas Cards features beautifully painted holiday scenes. The cards are paired with a set of 20 kraft envelopes as well as 20 matching stickers. The packaging design highlights the warmth and grace of the holiday, with natural textures and soft, seasonal tones that enhance shelf appeal. Every element was carefully coordinated to evoke a personal, heartfelt feel while remaining polished and retail-ready.",
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
      category: ["3D Modeling", "Product Photography"],
      image: "/id10/id10_24-086-01.jpg",
      gridClass: "col-span-6 row-span-6",
      client: "Furniture Brand",
      description: "High-resolution, thoughtfully styled images showcase the boucle ottoman pouf's versatility as a footrest, side table, or extra seat. Its neutral tones and soft texture are captured beautifully, helping customers envision it in both minimalist and cozy spaces—enhancing its aesthetic and sales appeal",
      additionalImages: [
        { src: "/id10/id10_24-086-02.jpg", alt: "" },
        { src: "/id10/id10_24-086-03.jpg", alt: "" },
        { src: "/id10/id10_24-086-04.jpg", alt: "" }
      ]
    },
    {
      id: 11,
      title: "Concrete book end packaging",
      category: ["Print Design","Graphic Design"],
      image: "/id11/modern bookends1 mockup.jpg",
      gridClass: "col-span-6 row-span-3",
      client: "Furniture Brand",
      description: "For this project we designed sleek, modern packaging with bold typography and minimal line art to reflect the product's style. The layout highlights functionality while clearly conveying durability, quality, and brand identity",
      additionalImages: [
        { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-01.jpg", alt: "" },
        { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-02.jpg", alt: "" },
        { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-03.jpg", alt: "" },
        { src: "/id11/id11_24-247_Concrete book end_packaging_24-247-04.jpg", alt: "" }
      ]
    },
    {
      id: 12,
      title: "Tummy Time Sensory Toy",
      category: ["Product Design","Product Photography"],
      image: "/id12/id12_23-217-01.jpg",
      gridClass: "col-span-6 row-span-5",
      client: "Children's Toys",
      description: "Vibrant, high-res images of the Tummy Time Sensory Toy showcase its textures and features, clearly communicating quality and sensory benefits. Featuring a baby in use adds emotional appeal and builds trust, helping parents feel confident in their purchase",
      additionalImages: [
        { src: "/id12/id12_24-217-02.jpg", alt: "" },
        { src: "/id12/id12_23-217-03.jpg", alt: "" },
        { src: "/id12/id12_23-217-04.jpg", alt: "" },
        { src: "/id12/id12_23-217-05.jpg", alt: "" }
      ]
    },
    {
      id: 13,
      title: "Magnetic Calendar",
      category: ["Print Design"],
      image: "/id1/id1_25-036-01.jpg",
      client: "Stationery Brand",
      gridClass: "col-span-3 row-span-3",
      description: "Magnetic Calendar. This sleek magnetic calendar combines minimal design with everyday practicality, making it perfect for brightening up kitchens, home offices or dorms. The spacious monthly layout and striking typography offer an elegant solution for organizing schedules at a glance.",
      additionalImages: [
        { src: "/id1/id1_25-036-02.jpg", alt: "Calendar detail" },
        { src: "/id1/id1_25-036-03.jpg", alt: "Calendar spread" },
        { src: "/id1/id1_25-036-04.jpg", alt: "Front cover" }
      ]
    }
  ]

  // Filter categories 
  const categories = [
    "all",
    "Print Design",
    "Graphic Design",
    "Product Photography",
    "Product Design",
    "3D Modeling"
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

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

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
        {/* Filter Categories */}
        <section className="py-8 container mx-auto main-container">
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={`rounded-full px-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
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
        <section className="py-8 container mx-auto px-4 main-container">
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
            <div className="fixed inset-0 bg-black bg-opacity-75 z-50 overflow-y-auto" style={{ pointerEvents: 'auto' }} onClick={closeModal}>
              <div className="min-h-screen px-4 flex items-center justify-center" style={{ zIndex: 99999 }}>
                <div className="bg-white w-full max-w-6xl rounded-lg overflow-hidden flex flex-col md:flex-row" onClick={e => e.stopPropagation()}>
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
                        <p className="paragraph-main">
                          {selectedItem.description || "A beautifully crafted project showcasing our expertise in " + selectedItem.category.join(', ') + "."}
                        </p>
                      </div>
                      
                      <div className="mb-8">
                        <h3 className="text-lg font-medium mb-2">Client</h3>
                        <p className="text-gray-600">{selectedItem.client}</p>
                      </div>
                      
                      <Link href="/contact" onClick={() => { document.body.style.overflow = 'auto'; }}>
                        <Button className="w-full py-6 rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                          Contact Us About This Project
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#f5f0e6] main-container">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-vidaloka mt-8">Ready to Start Your Project?</h2>
            <div className="h-1 w-16 bg-[#d4b88e] mt-2 mb-4 rounded mx-auto"></div>
            <p className="paragraph-main">
              Let's create something amazing together. Our creative team is ready to help you bring your vision to life.
            </p>
            <Link href="/contact">
              <Button className="rounded-md bg-[#d4b88e] hover:bg-[#c5a97f] px-8 py-2 text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg mt-6">
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
                <li>
                  <Link href="#" className="hover:text-gray-900 transition-all duration-300 transform hover:scale-105">
                    Product Photography
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
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-sm font-semibold uppercase">Company</h3>
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