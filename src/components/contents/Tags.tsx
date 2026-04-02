"use client";

import { getTags } from '@/graphql';
import { CategoryProps } from '@/types';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/Skeleton';
import AnimationContainer from '../utils/AnimationContainer';

const Tags = () => {

    const [tags, setTags] = useState<CategoryProps[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        try {
            const fetchTags = async () => {
                const data = await getTags();
                // Extract 'node' from each edge to match CategoryProps[]
                const formattedTags = data.map((item: any) => item.node);
                setTags(formattedTags);
                setIsLoading(false);
            };
            fetchTags();
        } catch (error) {
            console.log(error);
            setIsLoading(false);
        }
    }, []);

    return (
        <AnimationContainer customClassName="w-full mt-4 flex flex-wrap gap-2 items-center justify-start">

            {isLoading ? (
                <>
                    <Skeleton className="w-24 h-10 rounded-xl" />
                    <Skeleton className="w-24 h-10 rounded-xl" />
                    <Skeleton className="w-24 h-10 rounded-xl" />
                    <Skeleton className="w-24 h-10 rounded-xl" />
                    <Skeleton className="w-24 h-10 rounded-xl" />
                </>
            ) : (
                <>
                    {/* Update the map to type as CategoryProps and remove .node */}
                    {tags?.map((tag: CategoryProps) => (
                        <div key={tag.name} className="px-4 py-2 text-sm font-medium text-white bg-black dark:bg-white dark:text-black rounded-xl">
                            {tag.name}
                        </div>
                    ))}
                </>
            )}

        </AnimationContainer>
    )
};

export default Tags;