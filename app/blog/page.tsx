import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'

interface BlogPost {
  id: string
  title: string
  description: string
  thumbnail: string
  date: string
  slug: string
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with Photography',
    description: 'Learn the basics of photography and how to take better photos with your camera.',
    thumbnail: '/blog/photo1.jpg',
    date: '2024-03-20',
    slug: 'getting-started-with-photography'
  },
  {
    id: '2',
    title: 'Advanced Editing Techniques in Photoshop: Elevate Your Product Visuals',
    description: 'Discover advanced Photoshop techniques for clean, conversion-focused, and professional product visuals.',
    thumbnail: '/blog/photo2.jpg',
    date: '2024-04-11',
    slug: 'advenced_editing_techniques'
  },
  {
    id: '3',
    title: 'Our Design Process: What You Can Expect From Working With Us',
    description: 'Discover our step-by-step design process and how we ensure your vision is brought to life through clear communication and collaboration.',
    thumbnail: '/blog/photo3.jpg',
    date: '2024-04-10',
    slug: 'design-proces'
  },
  {
    id: '4',
    title: 'Top 5 Photo Angles Every Product Needs',
    description: 'Discover the five essential photography angles that will make your products stand out and drive more sales.',
    thumbnail: '/blog/photo4.jpg',
    date: '2024-04-12',
    slug: 'photo_angles'
  },
  // Add more blog posts as needed
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#fffdf9]">
      {/* Font Awesome CDN */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" 
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" 
        crossOrigin="anonymous" 
        referrerPolicy="no-referrer" 
      />

      <main className="flex-1 main-container">
        <div className="container mx-auto px-4 py-16 main-container">
          <h1 className="text-4xl font-bold text-center mb-12 font-vidaloka">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2 font-roboto">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h2 className="text-xl font-semibold mb-2 font-vidaloka">{post.title}</h2>
                    <p className="paragraph-main">{post.description}</p>
                    <div className="text-primary hover:underline inline-flex items-center transition-all duration-300 transform hover:scale-105 hover:text-[#d4b88e]">
                      Read more
                      <svg
                        className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
} 