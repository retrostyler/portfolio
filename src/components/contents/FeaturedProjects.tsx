"use client";
 
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { IoArrowForward } from "react-icons/io5";
import { Button } from '../ui/Button';
import AnimationContainer from '../utils/AnimationContainer';
import Project from '../utils/Project';
 
const FeaturedProjects = () => {
 
    const featuredProjects = projects.filter(p => p.featured);
 
    return (
        <AnimationContainer customClassName='w-full py-12 lg:py-16 relative'>
 
            <h2 className='mb-8 text-2xl font-bold tracking-tight text-center text-foreground lg:text-start'>
                Featured Projects
            </h2>
 
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-blue-500/10 hidden lg:block -z-10 w-[30rem] right-[-5rem] top-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
            />
 
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-violet-500/10 hidden lg:block -z-10 w-[30rem] left-[-5rem] bottom-[8rem] absolute h-[18rem] blur-[10rem] rounded-full"
            />
 
            <div className="z-20 grid w-full grid-cols-1 gap-4 mx-auto lg:gap-5 sm:grid-cols-2">
                {featuredProjects.map((project) => (
                    <Project key={project.title} project={project} />
                ))}
            </div>
 
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="flex items-start mt-6"
            >
                <Link href="/projects">
                    <Button variant="secondary" size="sm">
                        Show More
                        <IoArrowForward className="w-4 h-4 ml-2" />
                    </Button>
                </Link>
            </motion.div>
 
        </AnimationContainer>
    );
};
 
export default FeaturedProjects;