"use client";

import { getAbout } from '@/graphql';
import { AboutProps } from '@/types';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Experience from '../contents/Experience';
import MySkills from '../contents/MySkills';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import SectionContainer from '../utils/SectionContainer';

const AboutSection = () => {

    const [about, setAbout] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        try {
            const fetchAbout = async () => {
                const data = await getAbout();
                setAbout(data);
                setIsLoading(false);
            };
            fetchAbout();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, []);

    const data = about?.map((item: any) => item.node);

    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

                <Heading title="About Me" />

                <AnimationContainer customClassName="w-full flex flex-col relative gap-5 mb-8">
                    {isLoading ? (
                        <>
                            <Skeleton className="w-full h-24" />
                            <Skeleton className="w-full h-32" />
                        </>
                    ) : (
                        <>
                            {data.map((item: AboutProps, index: number) => (
                                <p key={index} className="flex flex-col w-full text-base text-justify lg:text-start lg:leading-8 text-muted-foreground">
                                    {item.description?.split('\n').map((line: string, lineIndex: number, array: string[]) => (
                                        <React.Fragment key={lineIndex}>
                                            {line}
                                            {lineIndex !== array.length - 1 && (
                                                <span className="w-full h-4 bg-transparent" />
                                            )}
                                        </React.Fragment>
                                    ))}
                                </p>
                            ))}
                        </>
                    )}
                </AnimationContainer>

                <Experience />

                <MySkills />

                <div className="w-full mt-8">
                    <AnimationContainer customClassName="w-full flex flex-col">
                        <div className="flex justify-center w-full md:justify-start">
                            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                                Future Endeavors
                            </h2>
                        </div>
                        <div className="w-full mb-8 space-y-5">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.2,
                                }}
                                className="text-base leading-8 text-muted-foreground"
                            >
                                Looking ahead, I am focused on building highly scalable, intelligent web applications. I want to bridge the gap between complex AI infrastructure and intuitive, seamless user experiences, crafting digital products that solve real-world friction.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.3,
                                }}
                                className="text-base leading-8 text-muted-foreground"
                            >
                                I am also deeply invested in applied machine learning and LLM operations (LLMOps). Having deployed local AI models and ML pipelines, my goal now is to build production-grade, context-aware systems that adapt to user needs and augment human capabilities securely and efficiently.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: 'spring',
                                    bounce: 0.25,
                                    delay: 0.4,
                                }}
                                className="text-base leading-8 text-muted-foreground"
                            >
                                Beyond shipping independent products, I am actively looking to contribute to the open-source ecosystem. I want to collaborate with other high-agency builders, scale my technical depth, and turn ambitious, boundary-pushing ideas into market-ready realities.
                            </motion.p>
                        </div>
                    </AnimationContainer>
                </div>

            </div>
        </SectionContainer>
    )
};

export default AboutSection;