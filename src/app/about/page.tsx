import { AboutSection } from '@/components'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "About",
  description:
    "Arham Aqeel is a Product Engineer and Mechanical Engineering student at NIT Tiruchirappalli. Built ThriftX, a self-hosted AI workstation, and led PSI Racing to AIR-2 at BAJA SAEINDIA 2024.",
  openGraph: {
    title: "About | Arham Aqeel",
    description:
      "Product Engineer at NIT Trichy — building ThriftX, self-hosted AI workstations, and BAJA SAE ATVs.",
    url: "https://arham-aqeel.vercel.app/about",
  },
  alternates: {
    canonical: "https://arham-aqeel.vercel.app/about",
  },
};

const About = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
            <AboutSection />
        </main>
    )
};

export default About