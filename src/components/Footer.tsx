"use client";

import { FaGithub } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { HiMiniDocumentText } from "react-icons/hi2";
import { IoBook, IoBriefcase, IoBrowsers, IoDocumentText, IoMail, IoPerson } from "react-icons/io5";
import { Button } from './ui/Button';
import MotionButton from './ui/MotionButton';
import AnimationContainer from './utils/AnimationContainer';

const Footer = () => {

    return (
        <footer className="flex flex-col items-center justify-center w-full mx-auto lg:max-w-screen-md">

            <hr className="w-full h-px border border-border" />

            <AnimationContainer customClassName="w-full grid grid-cols-3 place-items-center gap-2 lg:gap-4 mx-4 py-12 lg:py-8">

                {/* Column 1: Main Pages */}
                <div className="flex flex-col space-y-4">
                    <MotionButton href="/" delay={0}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <GoHomeFill className="inline-block w-5 h-5 mr-2" />
                            Home
                        </Button>
                    </MotionButton>

                    <MotionButton href="/about" delay={0.5}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoPerson className="inline-block w-5 h-5 mr-2" />
                            About
                        </Button>
                    </MotionButton>

                    <MotionButton href="/projects" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoBrowsers className="inline-block w-5 h-5 mr-2" />
                            Projects
                        </Button>
                    </MotionButton>
                </div>

                {/* Column 2: Resume Links & Contact */}
                <div className="flex flex-col space-y-4">
                    <MotionButton href="/resumes/tech-resume.pdf" target="_blank" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoDocumentText className="inline-block w-5 h-5 mr-2" />
                            Tech Resume
                        </Button>
                    </MotionButton>

                    <MotionButton href="/contact" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoMail className="inline-block w-5 h-5 mr-2" />
                            Contact
                        </Button>
                    </MotionButton>

                    <MotionButton href="/resumes/product-resume.pdf" target="_blank" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoDocumentText className="inline-block w-5 h-5 mr-2" />
                            Product Resume
                        </Button>
                    </MotionButton>
                </div>

                {/* Column 3: Socials & Master CV */}
                <div className="flex flex-col h-full space-y-4">
                    <MotionButton href="https://github.com/retrostyler" target="_blank" delay={0}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <FaGithub className="inline-block w-5 h-5 mr-2" />
                            GitHub
                        </Button>
                    </MotionButton>

                    <MotionButton href="https://linkedin.com/in/arham-aqeel-675459273" target="_blank" delay={0.5}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoBriefcase className="inline-block w-5 h-5 mr-2" />
                            LinkedIn
                        </Button>
                    </MotionButton>

                    {/* Added target="_blank" to open in a new tab instead of forcing a download script */}
                    <MotionButton href="/resumes/master-cv.pdf" target="_blank" delay={1}>
                        <Button variant="ghost" size="sm" className="font-normal transition ease-out text-muted-foreground hover:text-foreground">
                            <IoDocumentText className="inline-block w-5 h-5 mr-2" />
                            Complete CV
                        </Button>
                    </MotionButton>
                </div>

            </AnimationContainer>

        </footer>
    )
};

export default Footer;