"use client";

import { usePathname } from 'next/navigation';
import React from 'react'

const Head = () => {

    const pathname = usePathname();

    const title = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

    const meta = {
        title: `Arham Aqeel ${pathname === "/" ? "" : "• " + title.replace(/[-/]/g, " ")}`,
        description: "I'm a Mechanical Engineering student at NIT Trichy passionate about UI/UX design, web development, and CAD/CAM/CAE. Turning ideas into reality through code, design & innovation.",
        keywords: "Arham Aqeel, NIT Trichy, Mechanical Engineer, UI/UX Designer, Web Developer, CAD/CAM/CAE, SolidWorks, AutoCAD, React, Next.js, Python, Figma, Automation, Engineering, Design.",
        type: "website",
    };

    return (
        <>
            <title>{meta.title}</title>
            <meta name='viewport' content='width=device-width, initial-scale=1' />
            <meta name='robots' content='follow, index' />
            <meta content={meta.description} name='description' />
            <meta name='keywords' content={meta.keywords} />
            <meta property='og:url' content={`https://arham-portfolio.vercel.app${pathname}`} />
            <link rel='canonical' href={`https://arham-portfolio.vercel.app${pathname}`} />
            <link rel='me' href='mailto:arhamaqeel43@gmail.com' />
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content='Arham Aqeel' />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            <meta name='twitter:card' content='summary_large_image' />
            <meta name='twitter:site' content='@mafexuwu' />
            <meta name='twitter:title' content={meta.title} />
            <meta name='twitter:description' content={meta.description} />
        </>
    )
}

export default Head
