"use client";

import { getProjects } from '@/graphql';
import { Project as ProjectProps } from '@/types';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';
import Card from '../utils/Card';

const ProjectCards = () => {

    const [projects, setProjects] = useState<ProjectProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchProjects = async () => {
                const data = await getProjects();
                // Extract the 'node' from each item so it matches the Project[] type
                const formattedProjects = data.map((item: any) => item.node);
                setProjects(formattedProjects);
                setIsLoading(false);
            };
            fetchProjects();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, []);

    return (
        <AnimationContainer customClassName="w-full flex flex-col">

            <div className="flex flex-col items-center justify-center w-full mt-8 space-y-5 md:space-y-8">

                {isLoading ? (
                    <>
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                        <Skeleton className="w-full h-40" />
                    </>
                ) : (
                    <>
                        {/* Map directly over the projects state */}
                        {projects && projects.map((project: ProjectProps) => (
                            <Card key={project.title} project={project} />
                        ))}
                    </>
                )}

            </div>
        </AnimationContainer>
    )
};

export default ProjectCards;