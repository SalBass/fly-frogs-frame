import type { NextResponse } from 'next/server'

function getHTML(image: string) {
    return `
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta property="fc:frame" content="vNext" />
                <meta property="fc:frame:image" content="${image}" />
                <meta property="fc:frame:image:aspect_ratio" content="1:1" />
                <meta property="fc:frame:button:1" content="Another Frog, Ribbit" />
                <meta property="fc:frame:post_url" content="https://frame.flyfrogs.xyz/api" />
            </head>
            <body></body>
        </html>
    `
}

export async function POST(req: Request) {
  const tokenId = Math.floor(Math.random() * 10000);
  const imageUrl = `https://flyfrogs.nance.app/images/${tokenId}.png`;

  const html = getHTML(imageUrl);

  return new Response(html, {
    headers: {'Content-Type': 'text/html'},
    status: 200
  })
}