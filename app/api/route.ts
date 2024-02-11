import type { NextApiResponse } from 'next'

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

export async function POST(req: Request, res: NextApiResponse) {
  const tokenId = Math.floor(Math.random() * 10000);
  const imageUrl = `https://ipfs.io/ipfs/QmTubGm6aKcjgTutgk7whbhXKeW42dHQmdXwp4GbbWxtTF/flyfrog${tokenId}.png`;

  const html = getHTML(imageUrl);

  return res.status(200).setHeader('Content-Type', 'text/html').send(html);
}