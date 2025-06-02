import { MetadataRoute } from 'next'

export async function GET() {
  const humans = `/* TEAM */
Company: Sello.art
Site: https://sello.art
Contact: contact@sello.art
Location: Global

/* THANKS */
Name: Our Clients
Name: Our Partners
Name: Our Community

/* SITE */
Last update: ${new Date().toISOString().split('T')[0]}
Language: English
Doctype: HTML5
IDE: Visual Studio Code
Standards: HTML5, CSS3, JavaScript
Components: Next.js, React, Tailwind CSS
Software: Adobe Photoshop, Adobe Lightroom`

  return new Response(humans, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 