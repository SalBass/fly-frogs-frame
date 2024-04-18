'use client'

import { useState } from 'react';
import Head from 'next/head'
import Image from "next/image";

export default function Home() {
  const [tokenId, setTokenId] = useState(0);
  
  function reloadFrog() {
    const random = Math.floor(Math.random() * 10000);
    setTokenId(random);
  }

  return (
    <main className="flex min-h-screen flex-col items-center">

      <div className="relative flex place-items-center">
        <Image
          src={`https://flyfrogs.nance.app/images/${tokenId}.png`}
          alt={`Fly Frog ${tokenId}`}
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="relative flex place-items-center">
        Fly Frog #{tokenId}
      </div>
      <a className="block relative flex place-items-center cursor-pointer underline underline-offset-2 hover:underline-offset-4" onClick={reloadFrog}>
        Another Frog, Ribbit
      </a>
    </main>
  );
}
