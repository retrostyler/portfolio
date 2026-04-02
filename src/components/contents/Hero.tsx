import Image from 'next/image'
import AnimationContainer from '../utils/AnimationContainer'
import TypingAnimation from '../ui/TypingAnimation'

const Hero = () => {
    const roles = ["Engineer", "Designer", "Developer", "Innovator", "Creator", "Thinker"];

    return (
        <div className="relative flex flex-col-reverse items-center justify-between w-full py-12 lg:py-16 lg:flex-row">
            <AnimationContainer customClassName="flex flex-col items-center justify-between max-w-lg lg:items-start p-0 lg:pr-8">
                <h3 className="text-sm lg:text-xl text-muted-foreground">
                    Hey there, I'm{" "}
                    <span className="text-foreground">👋</span>
                </h3>
                <h1 className="py-2 text-xl font-bold text-foreground lg:py-4 sm:text-3xl lg:text-5xl">
                    Arham Aqeel
                </h1>
                <div className="flex flex-col items-center lg:items-start gap-2">
                    <h3 className="text-base text-center lg:text-start lg:text-lg text-muted-foreground">
                        <span className="font-medium text-foreground">
                            <TypingAnimation words={roles} className="text-emerald-500 dark:text-emerald-400" />
                        </span>
                    </h3>
                    <p className="text-sm text-center lg:text-start text-muted-foreground max-w-md">
                        Turning ideas into reality through code, design & innovation.
                    </p>
                </div>
            </AnimationContainer>

            <AnimationContainer customClassName="mb-8 relative lg:mb-0">
                <div className="relative">
                    <Image
                        src='/images/arham.jpg'
                        alt='Arham Aqeel'
                        height={2190}
                        width={2190}
                        sizes='30vw'
                        priority
                        className="object-cover object-top w-32 h-32 transition duration-300 ease-out rounded-xl shadow-lg filter grayscale hover:grayscale-0 lg:w-40 lg:h-40"
                    />
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
                </div>
                <div className="absolute block w-44 h-44 rounded-full md:hidden top-0 left-0 right-1/2 -z-10 bg-emerald-500/40 blur-[5rem]"></div>
            </AnimationContainer>
        </div>
    )
}

export default Hero
