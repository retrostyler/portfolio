import type { Metadata } from 'next'
// ← import whatever component your contact page uses
import { ContactSection } from '@/components' // adjust to match your actual import

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Arham Aqeel — Product Engineer and Mechanical Engineering student at NIT Tiruchirappalli. Open to internships, collaborations, and product opportunities.",
  openGraph: {
    title: "Contact | Arham Aqeel",
    description:
      "Get in touch with Arham Aqeel. Open to internships, collaborations, and product opportunities.",
    url: "https://arham-aqeel.vercel.app/contact",
  },
  alternates: {
    canonical: "https://arham-aqeel.vercel.app/contact",
  },
};

// ✅ This default export was missing — that's what caused the build error
const Contact = () => {
    return (
        <main className="relative flex flex-col items-center justify-center px-4 !z-[999] pt-20">
            <ContactSection />
        </main>
    )
};

export default Contact