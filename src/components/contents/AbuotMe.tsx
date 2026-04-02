"use client";

import React from 'react';
import AnimationContainer from '../utils/AnimationContainer';

const AboutMe = () => {
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16'>
            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                About me
            </h2>
            <p className='w-full text-base font-normal leading-7 text-justify text-muted-foreground'>
                I&apos;m a final year <strong>Mechanical Engineering</strong> student at <strong>NIT Trichy</strong>, working at the intersection of engineering precision, product thinking, and data-driven growth. My journey spans from <strong>CFD and sensor research</strong> to <strong>product building and digital marketing</strong>. I thrive on problems that are both technical and human — whether it&apos;s optimising a rotor&apos;s heat dissipation, running experiments to cut wasted ad spend, or building a marketplace from scratch. I approach every challenge the same way: understand the system, experiment, and ship results. Outside work, I lead the <strong>Anime Society</strong>, engage in <strong>public speaking</strong>, and write occasionally — because the best engineers are also great communicators.
            </p>
        </AnimationContainer>
    );
};

export default AboutMe;