addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})


async function handleRequest(request) {
  const url = new URL(request.url)


  if (url.pathname === '/sitemap.xml') {
    const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2026-03-23</lastmod>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs here -->
</urlset>`


    return new Response(sitemapContent, {
      headers: { 'Content-Type': 'application/xml; charset=utf-8' }
    })
  }


  return fetch(request)
}