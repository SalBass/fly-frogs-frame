import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fly Frogs Frame",
  description: 'Put some Fly Frogs in a frame',
  openGraph: {
    images: [
      {
        url: 'https://ipfs.io/ipfs/QmTubGm6aKcjgTutgk7whbhXKeW42dHQmdXwp4GbbWxtTF/flyfrog0.png',
        width: 600,
        height: 600,
      }
    ],
  },
  other: {
    'fc:frame': 'vNext',
    'fc:frame:image': 'https://ipfs.io/ipfs/QmTubGm6aKcjgTutgk7whbhXKeW42dHQmdXwp4GbbWxtTF/flyfrog0.png',
    'fc:frame:image:aspect_ratio': '1:1',
    'fc:frame:button:1': 'Show Me a Frog, Ribbit',
    'fc:frame:post_url': 'https://frame.flyfrogs.xyz/api'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
