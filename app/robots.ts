export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://pilotmieux.vercel.app/sitemap.xml',
  }
}