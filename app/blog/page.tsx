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
    title: 'Advanced Editing Techniques',
    description: 'Master the art of photo editing with these professional techniques.',
    thumbnail: '/blog/photo2.jpg',
    date: '2024-03-18',
    slug: 'advanced-editing-techniques'
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

      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-card rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                    <p className="text-muted-foreground mb-4">{post.description}</p>
                    <div className="text-primary hover:underline inline-flex items-center">
                      Read more
                      <svg
                        className="w-4 h-4 ml-2"
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