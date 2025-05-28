import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'

export default function ArticlePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9]">
      <main className="flex-1">
        <article className="container mx-auto px-4 py-16">
          {/* Article Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <Link 
              href="/blog"
              className="inline-flex items-center text-[#d4b88e] hover:text-[#c5a97f] mb-6"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Getting Started with Photography: A Comprehensive Guide
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="mr-4">March 20, 2024</span>
              <span className="mr-4">•</span>
              <span>10 min read</span>
            </div>
            <div className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden">
              <Image
                src="/blog/photo1.jpg"
                alt="Photography equipment setup"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8">
              Photography is more than just taking pictures—it's about capturing moments, telling stories, and expressing creativity. Whether you're a complete beginner or looking to refine your skills, this guide will help you navigate the exciting world of photography.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">Understanding Your Camera</h2>
            <p>
              Before diving into advanced techniques, it's crucial to understand your camera's basic functions. Modern cameras, whether DSLR, mirrorless, or even smartphones, offer a range of features that can significantly impact your photography.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Key Camera Settings</h3>
            <ul className="list-disc pl-6 mb-8">
              <li>Aperture: Controls depth of field and light intake</li>
              <li>Shutter Speed: Determines motion blur and exposure time</li>
              <li>ISO: Affects light sensitivity and image noise</li>
              <li>White Balance: Ensures accurate color representation</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Composition Techniques</h2>
            <p>
              Good composition is the foundation of compelling photography. Here are some essential techniques to consider:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Rule of Thirds</h4>
                <p className="text-gray-600">
                  Divide your frame into nine equal parts and place key elements along these lines or at their intersections.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Leading Lines</h4>
                <p className="text-gray-600">
                  Use natural lines in your scene to guide the viewer's eye toward your main subject.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Lighting Fundamentals</h2>
            <p>
              Understanding light is crucial for creating impactful photographs. Natural light, artificial light, and the quality of light all play significant roles in your final image.
            </p>

            <blockquote className="border-l-4 border-[#d4b88e] pl-4 my-8 italic">
              "Photography is the art of capturing light. Master the light, and you'll master the art."
            </blockquote>

            <h2 className="text-3xl font-bold mt-12 mb-6">Post-Processing Basics</h2>
            <p>
              While getting the shot right in-camera is important, post-processing can help enhance your images and bring your vision to life. Here are some basic editing techniques to get you started:
            </p>

            <ul className="list-disc pl-6 mb-8">
              <li>Exposure adjustment</li>
              <li>Color correction</li>
              <li>Contrast enhancement</li>
              <li>Sharpening and noise reduction</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusion</h2>
            <p>
              Photography is a journey of continuous learning and experimentation. Start with these fundamentals, practice regularly, and don't be afraid to make mistakes. Every shot is an opportunity to learn and grow as a photographer.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-xl font-bold mb-4">Share this article</h3>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e]">
                  <i className="fab fa-facebook-f fa-lg"></i>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e]">
                  <i className="fab fa-twitter fa-lg"></i>
                </Link>
                <Link href="#" className="text-gray-600 hover:text-[#d4b88e]">
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