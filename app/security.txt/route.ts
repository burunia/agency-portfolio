import { MetadataRoute } from 'next'

export async function GET() {
  const security = `# Security Policy
Contact: security@sello.art
Expires: 2025-12-31T23:59:59.000Z
Preferred-Languages: en
Canonical: https://sello.art/.well-known/security.txt
Policy: https://sello.art/security-policy
Hiring: https://sello.art/careers`

  return new Response(security, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
} 