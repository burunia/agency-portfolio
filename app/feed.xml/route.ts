import { MetadataRoute } from 'next'

export async function GET() {
  const baseUrl = 'https://sello.art'
  
  const blogPosts = [
    {
      title: 'Getting Started with Photography',
      description: 'Learn the basics of photography and how to take better photos with your camera.',
      url: '/blog/getting-started-with-photography',
      date: '2024-03-20',
    },
    {
      title: 'Advanced Editing Techniques in Photoshop',
      description: 'Discover advanced Photoshop techniques for clean, conversion-focused, and professional product visuals.',
      url: '/blog/advenced_editing_techniques',
      date: '2024-04-11',
    },
    {
      title: 'Our Design Process: What You Can Expect From Working With Us',
      description: 'Discover our step-by-step design process and how we ensure your vision is brought to life.',
      url: '/blog/design-proces',
      date: '2024-04-10',
    },
    {
      title: 'Top 5 Photo Angles Every Product Needs',
      description: 'Discover the five essential photography angles that will make your products stand out.',
      url: '/blog/photo_angles',
      date: '2024-04-12',
    },
  ]

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Sello.art Blog</title>
        <link>${baseUrl}</link>
        <description>Expert insights on product photography, e-commerce optimization, and design trends.</description>
        <language>en-US</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
        ${blogPosts.map(post => `
          <item>
            <title><![CDATA[${post.title}]]></title>
            <link>${baseUrl}${post.url}</link>
            <guid>${baseUrl}${post.url}</guid>
            <pubDate>${new Date(post.date).toUTCString()}</pubDate>
            <description><![CDATA[${post.description}]]></description>
          </item>
        `).join('')}
      </channel>
    </rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 