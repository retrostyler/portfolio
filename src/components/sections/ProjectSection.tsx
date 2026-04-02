// src/components/sections/ProjectSection.tsx

import ProjectCards from '../contents/ProjectCards';
import AnimationContainer from '../utils/AnimationContainer';
import Heading from '../utils/Heading';
import SectionContainer from '../utils/SectionContainer';

const ProjectSection = () => {
    return (
        <SectionContainer>
            <div className="flex flex-col items-start w-full mt-0 lg:mt-8">

              <Heading title="Projects" />

                <AnimationContainer customClassName="w-full flex flex-col gap-5 mb-8">
                    <p className="text-base text-justify lg:text-start lg:leading-8 text-muted-foreground">
                        Here are the things I&apos;ve shipped, researched, and built — from a live thrift marketplace to a custom 4WD ATV. Some are deployed, some are in progress, all of them taught me something real.
                    </p>
                </AnimationContainer>

              <ProjectCards />

            </div>
        </SectionContainer>
    )
};

export default ProjectSection;