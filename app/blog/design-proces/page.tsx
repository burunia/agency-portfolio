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
              Our Design Process: What You Can Expect From Working With Us
            </h1>
            <div className="flex items-center text-gray-600 mb-8 font-roboto">
              <span className="mr-4">April 2024</span>
              <span className="mr-4">•</span>
              <span>6 min read</span>
            </div>
            <div className="relative w-full h-[600px] md:h-[400px] rounded-xl overflow-hidden">
              <img
                src="/blog/photo3.jpg"
                alt="Design process illustration"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Article Content */}
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="lead text-xl text-gray-700 mb-8 font-roboto">
              We understand how daunting outsourcing designs can be, whether for product photography, branding or design. What happens after you say yes? How do we make sure your vision is brought to life? That's where our streamlined design process comes in, built on clear, open communication and a collaborative system that keeps you informed every step of the way without overwhelming you.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Step 1: Creating Your Dedicated Project Space</h2>
            <p className="font-roboto">
              Once we start working together, we'll set you up with your own Basecamp account. This is your space to upload briefs, view timelines, share your feedback and stay connected with your team throughout the project.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Step 2: The Start of the Workflow</h2>
            <p className="font-roboto">
              Once a new product brief has been uploaded to your Basecamp, whether it be for product design, image stacks or product packaging, it instantly syncs to our internal team Trello system. There, your project is assigned to a suitable designer on our team and the work begins immediately.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Step 3: Review, Clarify & Collaborate</h2>
            <p className="font-roboto">
              Before jumping in and starting the new project, we take the time to carefully read through your brief. If anything needs clarification or could benefit from a discussion, we'll reach out, either via Basecamp or a quick call. We believe that great designs start with clear communication, and we work closely with you to ensure we're aligned before moving forward.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Step 4: Initial Concepts & Your Feedback</h2>
            <p className="font-roboto">
              Once we are confident we have all the necessary information and all teams are set up for success, our design team starts crafting your visuals and building concepts. Once ready, we'll send you the first round for review. You'll have the opportunity to provide feedback, request changes or confirm if we're on the right track. Your input is always highly regarded.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Step 5: The Final Design & Delivery</h2>
            <p className="font-roboto">
              After any revisions and feedback we move into final production. Whether it be high-converting image stacks, product packaging or a fully designed product, we deliver everything in the formats you need, on time and ready to use.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6 font-vidaloka">Why Clients Love This Process</h2>
            <ul className="list-disc pl-6 mb-8 font-roboto">
              <li>You stay in control, without having to manage the process yourself.</li>
              <li>Everything is organized and in one place: no scattered emails.</li>
              <li>You know exactly who is working on your project and what is next.</li>
              <li>We make time for real conversations when you need them.</li>
              <li>And, most importantly, your brand looks at its best, every time.</li>
            </ul>

            <hr className="my-8" />

            <h2 className="text-2xl font-bold mt-12 mb-6 font-vidaloka">Let's Build Something That Works for You</h2>
            <p className="font-roboto">
              Whether you're a new seller or an established brand, we are here to make your design experience smooth, effective, and enjoyable.
            </p>
            <p className="font-roboto">
              📩 Ready to chat? Email us at your@email.com<br />
              👉 <a href="#" className="text-[#d4b88e] hover:underline">View Our Portfolio</a>
            </p>
            <p className="font-roboto">
              We'd love to bring your next product to life, beautifully and strategically.
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