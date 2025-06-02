import Link from 'next/link'
import Footer from '@/components/footer'
import Image from 'next/image'

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9]">
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#d4b88e] hover:text-[#c5a97f] mb-6 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vidaloka">
              Advanced Editing Techniques in Photoshop: Elevate Your Product Visuals
            </h1>
            <div className="flex items-center text-gray-600 mb-8 font-roboto">
              <span className="mr-4">April 2024</span>
              <span className="mr-4">•</span>
              <span>7 min read</span>
            </div>
            <div className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-[#f5f0e6] flex items-center justify-center">
              <Image
                src="/blog/photo2.jpg"
                alt="Photoshop interface on Mac"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8 font-roboto">
              When it comes to product photography and branding, every pixel counts. At our agency, we don't just edit — we craft visuals that tell a story and convert. In this post, we'll walk you through some of the <strong>advanced Photoshop techniques</strong> we use to deliver clean, conversion-focused, and professional results for our clients.
            </p>
            <p className="font-roboto">
              Whether you're managing an Amazon listing or refreshing a brand's visual identity, these tools and methods can make a significant difference.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">1. Smart Objects for Flexible Editing</h2>
            <p className="font-roboto">
              We always work with <strong>Smart Objects</strong> to ensure edits are non-destructive. This means we can scale, apply filters, and transform assets without losing image quality. Perfect for projects where changes are frequent or formats need to be reused across platforms.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">2. Frequency Separation for Clean Retouching</h2>
            <p className="font-roboto">
              This high-end technique separates texture from tone, allowing us to clean up surfaces, fabrics, or product imperfections while preserving natural detail. It's especially valuable in skincare, fashion, and premium product shoots.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">3. Precision Cutouts Using Masks and Channels</h2>
            <p className="font-roboto">
              Need a clean background removal? We combine <strong>layer masks</strong>, <strong>channel-based selections</strong>, and the <strong>Pen Tool</strong> for pixel-perfect isolation—even around hair, glass, or complex product edges.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">4. Custom LUTs and Consistent Color Grading</h2>
            <p className="font-roboto">
              We create <strong>custom LUTs (Look-Up Tables)</strong> for consistent color tones across campaigns. It's a game-changer for visual consistency, especially for brands that want a strong, cohesive aesthetic across all platforms.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">5. Realistic Mockups & Composites</h2>
            <p className="font-roboto">
              By using multiple layers, shadows, and perspective corrections, we build scenes that look real—and sell. Our Photoshop composites simulate packaging in real environments, lifestyle setups, and more.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">6. Time-Saving Actions & Scripts</h2>
            <p className="font-roboto">
              We automate tasks like resizing, batch exporting, and applying overlays using custom <strong>Photoshop Actions and Scripts</strong>. This is especially useful for high-volume product photography projects, where consistency and speed matter.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">7. Advanced Typography Effects</h2>
            <p className="font-roboto">
              We don't just drop text on an image. We use <strong>paths, masks, kerning, and distortions</strong> to integrate copy beautifully into any design—ideal for hero images, ads, or content marketing visuals.
            </p>
            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Why This Matters for Your Brand</h2>
            <p className="font-roboto">
              Professional editing adds trust, appeal, and clarity. With these techniques, your visuals will not only stand out—they'll convert. That's the level of quality we bring to every project, every day.
            </p>
            <hr className="my-8" />
            <h2 className="text-2xl font-bold mt-12 mb-6 font-vidaloka">Let's Make Your Products Shine</h2>
            <p className="font-roboto">
              📩 Email us at your@email.com<br />
              👉 <a href="#" className="text-[#d4b88e] hover:underline">Explore our portfolio</a>
            </p>
            <p className="font-roboto">
              Ready to level up your product photography and branding? We're here to make it happen.
            </p>
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4 font-vidaloka">Share this article</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e] transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e] transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-twitter fa-lg"></i>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e] transition-all duration-300 transform hover:scale-110">
                  <i className="fab fa-linkedin-in fa-lg"></i>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
} 