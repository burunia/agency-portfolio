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
              className="inline-flex items-center text-[#d4b88e] hover:text-[#c5a97f] mb-6 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-vidaloka">
              Top 5 Photo Angles Every Product Needs
            </h1>
            <div className="flex items-center text-gray-600 mb-8 font-roboto">
              <span className="mr-4">April 2024</span>
              <span className="mr-4">•</span>
              <span>5 min read</span>
            </div>
            <div className="relative w-full h-[600px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/blog/photo4.jpg"
                alt="Design process illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8 font-roboto">
              In a world flooded with products, how do you make yours stand out? In order to get customers flocking to your website, eager to snatch up every last item of stock in your inventory, you will need to have items that look unmissable! Great product photography is what makes potential buyers go from thinking that they want a product to knowing that they need it. It's what turns a tertiary glance into a stop-and-stare moment sparking thoughts of how much better your product could make their lives. But how do you capture the images that make the imagination go wild? Remember, it isn't just what a client sees, but how they see it. In this article we will delve deep into the five different photography angles that will ensure your products are seen and needed.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">The Front Angle</h2>
            <p className="font-roboto">
              Usually, the first image a client sees when viewing a product online is taken using the front angle. The front angle is crucial as it displays the product the way a client would generally first see it and provides a clear view of the product's key features and design. The front angle gives clients a straightforward view of the product, enabling them to gather as much information about the product as possible, leading to an increase in trust and confidence about what they are about to potentially buy.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">The Profile Angle</h2>
            <p className="font-roboto">
              An important angle in which the product's side view is captured, the profile angle provides extra details of a product's shape and texture. Of course, not all products will need to be shot using this angle and it is primarily used on clothing accessories such as shoes or handbags. However, the profile angle can emphasize how a product will look when being used, which is important for clients to take note of as it helps them imagine how they themselves can put it to use.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">The Overhead Angle</h2>
            <p className="font-roboto">
              The overhead angle, or "top shot", can be the best shot of a product, if done correctly. Here, it is extremely important to ensure that lighting is correct and that the angle is absolutely perfect, otherwise this can be one of those "could have been better" images. The overhead angle showcases a product's symmetry, design elements and any patterns that may be missed when gazing at it from other angles. The overhead angle is also useful when capturing more than one product or item of different size and shape, enabling individual focus.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">The 45-Degree Angle</h2>
            <p className="font-roboto">
              Enabling the photographer to showcase two different sides of an item in one image, the 45-degree angle is an essential way to enable a client to see more of a product. This angle helps you showcase more details than any other angle and allows a client to see more depth and context on both the front and side of a product. Here, a photographer simply takes the front angle and shifts it by 45 degrees to provide a more natural, three-dimensional view of the product. This angle is suitable for a wide range of products and builds both trust and familiarity for clients.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">The Macro Shot</h2>
            <p className="font-roboto">
              If you have intricate or unique designs on a product that you feel need extra attention, then a macro shot is what you will need to bring them to the fore. These close-up views can provide more details on material, craftsmanship or branding that may be missed when a product is viewed from other angles. Clients are always on the look out for high quality products and a well thought out macro shot can provide the attention to detail that they are after.
            </p>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mt-12 mb-6 font-vidaloka">Conclusion</h2>
            <p className="font-roboto">
              Using a good mix of all these angles will help provide more details of your product and enable a relationship to be built with your clients. If they like what they see, they will be more inclined to purchase what you are selling. Make sure any product you sell is well presented and properly photographed to ensure that clients do not pass on the opportunity to purchase.
            </p>

            <h2 className="text-2xl font-bold mt-12 mb-6 font-vidaloka">Let's Showcase Your Product the Right Way</h2>
            <p className="font-roboto">
              Whether you're launching a new line or refining an existing brand, we're here to make your design and photography process smooth, strategic, and impactful.
            </p>
            <p className="font-roboto">
              📩 Want to chat? Email us at contact.sello.art@gmail.com<br />
              👉 <a href="#" className="text-[#d4b88e] hover:underline">Explore our portfolio</a>
            </p>
            <p className="font-roboto">
              Let's bring your next product to life, beautifully and intentionally.
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