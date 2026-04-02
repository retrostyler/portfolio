// "use client";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
// import { motion } from 'framer-motion';
// import { SiMui, SiExpo, SiMongodb , SiGraphql, SiNextdotjs, SiNodedotjs, SiReact, SiRedux, SiTailwindcss, SiTypescript } from "react-icons/si";

// const AllFavTechs = () => {

//     const animation = {
//         hide: { x: -8, opacity: 0 },
//         show: { x: 0, opacity: 1 }
//     };

//     return (
//         <>
//             <motion.p
//                 initial={animation.hide}
//                 animate={animation.show}
//                 transition={{ delay: 0.2 }}
//                 className="mb-3 text-base text-center text-muted-foreground lg:text-start"
//             >
//                 My current favorite tech stack:
//             </motion.p>

//             <TooltipProvider delayDuration={0}>
//                 <motion.ul
//                     initial="hide"
//                     animate="show"
//                     transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
//                     className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0"
//                 >
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
//                                     <SiNextdotjs className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Next.js</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#61DAFB]">
//                                     <SiReact className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>React</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3178C6]">
//                                     <SiTypescript className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Typescript</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#38B2AC]">
//                                     <SiTailwindcss className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Tailwind CSS</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#8CC84B]">
//                                     <SiNodedotjs className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Node.js</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#0081CB]">
//                                     <SiMui className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Material UI</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#43b627]">
//                                     <SiMongodb className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Mongodb</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#E535AB]">
//                                     <SiGraphql className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Graphql</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
//                                     <SiExpo className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Expo</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                 </motion.ul>
                
//             </TooltipProvider>
//         </>
//     )
// };

// export default AllFavTechs


// src/components/icons/AllFavTechs.tsx
// "use client";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
// import { motion } from 'framer-motion';
// import { 
//     SiPython, 
//     SiReact, 
//     SiTailwindcss, 
//     SiFigma, 
//     SiMeta, 
//     SiGoogleanalytics,
//     SiArduino 
// } from "react-icons/si";
// // We use SiGoogleanalytics for GA4, SiMeta for Meta Ads, SiPython for ML/Data

// const AllFavTechs = () => {

//     const animation = {
//         hide: { x: -8, opacity: 0 },
//         show: { x: 0, opacity: 1 }
//     };

//     return (
//         <>
//             <motion.p
//                 initial={animation.hide}
//                 animate={animation.show}
//                 transition={{ delay: 0.2 }}
//                 className="mb-3 text-base text-center text-muted-foreground lg:text-start"
//             >
//                 My current favorite tech stack:
//             </motion.p>

//             <TooltipProvider delayDuration={0}>
//                 <motion.ul
//                     initial="hide"
//                     animate="show"
//                     transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
//                     className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0"
//                 >
//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3776AB]">
//                                     <SiPython className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Python (XGBoost, Pandas)</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>
                    
//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#61DAFB]">
//                                     <SiReact className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>React</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#38B2AC]">
//                                     <SiTailwindcss className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Tailwind CSS</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#F24E1E]">
//                                     <SiFigma className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Figma</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#0668E1]">
//                                     <SiMeta className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Meta Ads</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#E37400]">
//                                     <SiGoogleanalytics className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>GA4 / Data</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#00979D]">
//                                     <SiArduino className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Arduino / Hardware</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                 </motion.ul>
//             </TooltipProvider>
//         </>
//     )
// };

// export default AllFavTechs;



"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { motion } from 'framer-motion';
import { 
    SiPython, 
    SiCplusplus,
    SiReact, 
    SiNextdotjs,
    SiTailwindcss, 
    SiFirebase,
    SiFigma, 
    SiPandas,
    SiMeta, 
    SiGoogleanalytics
} from "react-icons/si";

const AllFavTechs = () => {

    const animation = {
        hide: { x: -8, opacity: 0 },
        show: { x: 0, opacity: 1 }
    };

    return (
        <>
            <motion.p
                initial={animation.hide}
                animate={animation.show}
                transition={{ delay: 0.2 }}
                className="mb-3 text-base text-center text-muted-foreground lg:text-start"
            >
                My core engineering & product stack:
            </motion.p>

            <TooltipProvider delayDuration={0}>
                <motion.ul
                    initial="hide"
                    animate="show"
                    transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
                    className="flex flex-wrap items-center justify-center mx-auto gap-x-5 lg:mx-0 gap-y-4"
                >
                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3776AB]">
                                    <SiPython className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Python (ML & Pipelines)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#00599C]">
                                    <SiCplusplus className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>C++ (Hardware & Firmware)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>
                    
                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#61DAFB]">
                                    <SiReact className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>React.js</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
                                    <SiNextdotjs className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Next.js</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FFCA28]">
                                    <SiFirebase className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Firebase (Auth & DB)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#38B2AC]">
                                    <SiTailwindcss className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Tailwind CSS</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#F24E1E]">
                                    <SiFigma className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Figma (UI/UX)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#150458]">
                                    <SiPandas className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Pandas (Data Analysis)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#0668E1]">
                                    <SiMeta className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Meta Ads / Performance Marketing</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#E37400]">
                                    <SiGoogleanalytics className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>GA4 / Tracking</p></TooltipContent>
                        </Tooltip>
                    </motion.li>
                </motion.ul>
            </TooltipProvider>
        </>
    )
};

export default AllFavTechs;