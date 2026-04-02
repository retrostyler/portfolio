// "use client";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
// import { motion } from 'framer-motion';
// import { SiRedux, SiExpo, SiFramer, SiIonic, SiMui, SiPostgresql, SiReactquery, SiRedis, SiSocketdotio, SiTrpc } from "react-icons/si";

// const AllLearningTechs = () => {

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
//                 I am currently working or interested in learning:
//             </motion.p>

//             <TooltipProvider delayDuration={0}>
//                 <motion.ul
//                     initial="hide"
//                     animate="show"
//                     transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
//                     className="flex flex-wrap items-center justify-center gap-5 mx-auto lg:mx-0"
//                 >
                    
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#1F1F1F]">
//                                     <SiFramer className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Framer Motion</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#764ABC]">
//                                     <SiRedux className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Redux</p>
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
//                                     <SiSocketdotio className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Socket.io</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#00BFFF]">
//                                     <SiTrpc className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>TRPC</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF4154]">
//                                     <SiReactquery className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>React Query</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
                    
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3880FF]">
//                                     <SiIonic className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Ionic</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#336791]">
//                                     <SiPostgresql className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Postgresql</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#DC382D]">
//                                     <SiRedis className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>Redis</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                     <motion.li
//                         variants={animation}
//                         className="opacity-100"
//                     >
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF9900]">
//                                     {/* <SiAmazonaws className="w-6 h-6" /> */}
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent>
//                                 <p>AWS</p>
//                             </TooltipContent>
//                         </Tooltip>
//                     </motion.li>
//                 </motion.ul>
//             </TooltipProvider>
//         </>
//     )
// };

// export default AllLearningTechs


// src/components/icons/AllLearningTechs.tsx
// "use client";

// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
// import { motion } from 'framer-motion';
// import { 
//     SiNextdotjs, 
//     SiEspressif, 
//     SiScikitlearn, 
//     SiZapier,
//     SiVercel,
//     SiSupabase
// } from "react-icons/si";
// // Using SiEspressif for ESP32/IoT, SiScikitlearn for Advanced ML

// const AllLearningTechs = () => {

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
//                 I am currently working or interested in learning:
//             </motion.p>

//             <TooltipProvider delayDuration={0}>
//                 <motion.ul
//                     initial="hide"
//                     animate="show"
//                     transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
//                     className="flex flex-wrap items-center justify-center gap-5 mx-auto lg:mx-0"
//                 >
                    
//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
//                                     <SiNextdotjs className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Next.js</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3CB371]">
//                                     <SiSupabase className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Supabase</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#F8981D]">
//                                     <SiScikitlearn className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Advanced Machine Learning</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF4A00]">
//                                     <SiZapier className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Advanced Automation</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#E7352C]">
//                                     <SiEspressif className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>IoT (ESP32)</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>

//                     <motion.li variants={animation} className="opacity-100">
//                         <Tooltip>
//                             <TooltipTrigger>
//                                 <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
//                                     <SiVercel className="w-6 h-6" />
//                                 </div>
//                             </TooltipTrigger>
//                             <TooltipContent><p>Vercel / Deployment</p></TooltipContent>
//                         </Tooltip>
//                     </motion.li>
                    
//                 </motion.ul>
//             </TooltipProvider>
//         </>
//     )
// };

// export default AllLearningTechs;

"use client";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/Tooltip";
import { motion } from 'framer-motion';
import { 
    SiTensorflow,
    SiScikitlearn, 
    SiJupyter,
    SiDocker,
    SiSupabase,
    SiArduino,
    SiEspressif, 
    SiZapier,
    SiVercel
} from "react-icons/si";
import { FaAws } from "react-icons/fa"; 
const AllLearningTechs = () => {

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
                Currently exploring & scaling with:
            </motion.p>

            <TooltipProvider delayDuration={0}>
                <motion.ul
                    initial="hide"
                    animate="show"
                    transition={{ delayChildren: 0.2, staggerChildren: 0.05 }}
                    className="flex flex-wrap items-center justify-center gap-5 mx-auto lg:mx-0 gap-y-4"
                >
                    
                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF6F00]">
                                    <SiTensorflow className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>TensorFlow (Deep Learning)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#F8981D]">
                                    <SiScikitlearn className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Scikit-learn (Machine Learning)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#F37626]">
                                    <SiJupyter className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Jupyter (Data Science)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#2496ED]">
                                    <SiDocker className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Docker (Containerization)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF9900]">
                                    <FaAws className="w-6 h-6" /> {/* <-- NOW USING FaAws */}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>AWS (Cloud Infra)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#3CB371]">
                                    <SiSupabase className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Supabase (Backend-as-a-Service)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#00979D]">
                                    <SiArduino className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Arduino (Microcontrollers)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#E7352C]">
                                    <SiEspressif className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>IoT (ESP32 & Sensors)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-[#FF4A00]">
                                    <SiZapier className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Zapier (Automations)</p></TooltipContent>
                        </Tooltip>
                    </motion.li>

                    <motion.li variants={animation} className="opacity-100">
                        <Tooltip>
                            <TooltipTrigger>
                                <div className="transition duration-300 ease-out text-muted-foreground hover:text-foreground">
                                    <SiVercel className="w-6 h-6" />
                                </div>
                            </TooltipTrigger>
                            <TooltipContent><p>Vercel / CI-CD</p></TooltipContent>
                        </Tooltip>
                    </motion.li>
                    
                </motion.ul>
            </TooltipProvider>
        </>
    )
};

export default AllLearningTechs;