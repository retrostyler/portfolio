import { ProjectCards } from '@/components'
import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Full-stack products, ML pipelines, and engineering systems by Arham Aqeel — ThriftX P2P marketplace, Self-Hosted AI Workstation, Telecom Churn ML pipeline, BAJA SAE ATVs, and IIT Delhi research.",
  openGraph: {
    title: "Projects | Arham Aqeel",
    description:
      "Full-stack products, ML pipelines, and engineering systems — ThriftX, AI Workstation, BAJA ATVs, and more.",
    url: "https://arham-aqeel.vercel.app/projects",
  },
  alternates: {
    canonical: "https://arham-aqeel.vercel.app/projects",
  },
};

const Projects = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
            <ProjectCards />
        </main>
    )
};

export default Projects