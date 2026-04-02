
import { Project as ProjectProps } from '@/data/projects';
import Link from 'next/link';
import { SiGithub } from "react-icons/si";
import { TbExternalLink } from "react-icons/tb";
import { Button } from '../ui/Button';
import AnimationContainer from './AnimationContainer';
 
interface Props {
    project: ProjectProps;
}
 
const Project = ({ project }: Props) => {
 
    const statusColors: Record<string, string> = {
        "Shipped": "bg-green-500/10 text-green-400 border border-green-500/20",
        "Building": "bg-blue-500/10 text-blue-400 border border-blue-500/20",
        "Research": "bg-orange-500/10 text-orange-400 border border-orange-500/20",
    };
 
    return (
        <AnimationContainer customClassName="bg-card border border-border/50 w-full hover:border-border rounded-xl">
            <div className="flex-col items-start p-4 h-full flex lg:p-5">
 
                <div className="flex items-center justify-between w-full mb-1">
                    <h4 className="text-lg font-medium text-foreground">
                        {project?.title}
                    </h4>
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusColors[project.status] || ''}`}>
                        {project.status}
                    </span>
                </div>
 
                <div className="flex flex-wrap gap-1.5 mt-2 mb-3">
                    {project.tags.map((tag) => (
                        <span
                            key={tag}
                            className="text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
 
                <p className="text-sm text-muted-foreground flex-1">
                    {project?.description}
                </p>
 
                <div className="flex items-start w-full gap-4 mt-4">
                    <Link href={project.github} target="_blank">
                        <Button variant="outline" size="sm">
                            <SiGithub className="w-5 h-5" />
                            <span className="ml-2">Github</span>
                        </Button>
                    </Link>
                    <Link href={project.view} target="_blank">
                        <Button variant="outline" size="sm">
                            <TbExternalLink className="w-5 h-5" />
                            <span className="ml-2">View</span>
                        </Button>
                    </Link>
                </div>
 
            </div>
        </AnimationContainer>
    );
};
 
export default Project;
