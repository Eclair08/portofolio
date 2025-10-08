import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Particles from "./components/Particles/Particles";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#121212]">
      <div className="absolute top-0 bottom-0 right-0 left-0 w-full h-full">
        <Particles 
        particleColors={['#ac3e3eff', '#a71414ff']}
        particleCount={400}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={false}
        alphaParticles={false}
        disableRotation={false}
        />
      </div>
      <div className="container border mx-auto h-screen ">
        <div className="grid grid-cols-12">
          <div className="col-span-6">
            <div className="flex flex-col items-start h-screen px-10 gap-6 justify-center">
              <AnimatedContent 
              distance={150}
              direction="horizontal"
              reverse={false}
              duration={1.2}
              // ease="bounce.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.3}
              >
                <div className="flex items-center gap-2">
              <h1 className="text-2xl text-white font-bold">i`m </h1>
              <RotatingText 
                texts={['Web Developer', 'Wibu', 'Sloth', 'Gamer', 'Tech Enthusiast', 'Tea Lover', 'Cat Person', 'Douchebag']}
                mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex"
                staggerFrom={"last"}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
                </div>
              </AnimatedContent>
              
              <div className="flex flex-col items-start">
                <SplitText 
                text="Muhammad Rizky Abiwafa Rulyawan" 
                className="text-2xl font-semibold text-center text-white mt-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                />
                <SplitText 
                text="Web Developer | Frontend Engineer" 
                className="text-2xl font-semibold text-center text-white mt-4"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                />
              </div>
              <div>
                <BlurText 
                text="Hello! I'm a Web Developer specializing in Front-End Engineering. I'm highly enthusiastic about exploring cutting-edge technologies, particularly within the web and internet ecosystem. With a solid foundation in HTML, CSS, JavaScript, and React, I enjoy building intuitive and responsive web interfaces. I'm also proficient in MS Word and MS Excel to support productivity and data management. Outside of coding, I'm an avid gamer, anime enthusiast, and a cat lover. I believe that a balance between hard work and hobbies is the key to sustainable creativity."
                delay={50}
                animateBy="words"
                direction="top"
                className="text-base mb-8 text-white font-semibold"
                />
              </div>
            </div> 
          </div>
          <div className="col-span-6">
            <Lanyard position={[0, 0, 15]} gravity={[0, -30, 0]}  />
          </div>
        </div>
      </div>
    </div>
  );
}
