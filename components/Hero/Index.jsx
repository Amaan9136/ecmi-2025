"use client"; // Ensure it's a client component for animations
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import Foreground from "../../images/sectionsAssets/ForeGround.png";
import BackGround from "../../images/sectionsAssets/Hero-background-6.png";
import balag from "../../images/speakers/balagangaswami.png";
import Nirma from "../../images/speakers/nirmalanandaswami.png";
import Animate from "../helpers/Animate-motion";
import CounterContainer from "./CounterContainer";
import Navbar from "./Navbar";

const Hero = () => {
  const { scrollY } = useScroll();

  const bgOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const scaleTitle = useTransform(scrollY, [0, 400], [1, 1.2]);
  const scaleBg = useTransform(scrollY, [0, 400], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 470, 800], ["0%", "360px", "340px"]);
  const counterOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const counterX = useTransform(scrollY, [100, 500], ["0%", "-10%"]);

  const [showForeground, setShowForeground] = useState(true);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div
        style={{ opacity: bgOpacity, scale: scaleBg, y: titleY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={BackGround}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full opacity-30"
        />
      </motion.div>

{/* START */}

      {/* Foreground Animation with AnimatePresence */}
      <AnimatePresence>
        {showForeground && (
          <motion.div
            key="foreground"
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: "-100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-[500]"
            onClick={() => setShowForeground(false)}
          >
            <Image
              src={Foreground}
              alt="Foreground Image"
              layout="fill"
              objectFit="cover"
              className="w-full h-full cursor-pointer"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle Effect on Click */}
      {!showForeground && (
        <motion.div
          className="absolute inset-0 flex flex-wrap z-[400]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 1.2 }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1/5 h-1/5 bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${Foreground.src})`,
                backgroundSize: "500% 500%",
                backgroundPosition: `${(i % 5) * 25}% ${(Math.floor(i / 5) * 25)}%`,
              }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: 0,
                x: (Math.random() - 0.5) * 200,
                y: (Math.random() - 0.5) * 200,
                rotate: Math.random() * 360,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          ))}
        </motion.div>
      )}

{/* END */}

      <Navbar />
      <div className="section-container md:pb-0 mb-4 lg:mb-0">
        <Animate className="flex flex-col lg:gap-0 relative">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Title Animation */}
            <Animate delay={8} className="flex flex-col flex-1 lg:pl-3 mb-2">
              <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
                <motion.h1
                  style={{ scale: scaleTitle, y: titleY }}
                  className="flex lg:mb-20 font-bold font-mono justify-center lg:justify-start lg:text-left text-3xl leading-[2rem] text-yellow-500"
                >
                  <Typewriter
                    options={{
                      strings: [
                        "SMART ELECTRONICS",
                        "COMMUNICATION TECHNOLOGIES",
                        "MACHINE INTELLIGENCE",
                        "INFORMATICS",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.h1>
              </Tilt>
            </Animate>

            {/* Conference Info */}
            <Animate delay={5} x={-60} y={80} duration={1} className="w-[1060px] pt-10 md:pt-4 lg:pt-0">
              <motion.div
                style={{ opacity: bgOpacity, scale: scaleTitle }}
                className="flex text-center justify-between relative"
              >
                <Image src={balag} alt="balag" className="rounded-[50%] border border-2 border-gray-400" width={100} height={100} />
                <div className="my-auto">
                  <motion.p 
                  style={{ x: titleY }}
                  className="text-3xl text-center font-bold my-1">ADICHUNCHANAGIRI INSTITUTE OF TECHNOLOGY</motion.p>
                  <motion.p
                  style={{ x: titleY }}
                   className="m-2 text-[14px]">
                    (Affiliated to VTU Belagavi, Recognized by AICTE New Delhi, accredited by NAAC with "A" Grade)
                    <br />
                    Jyothi Nagara, Chikkamagaluru-577102, Karnataka, India.
                  </motion.p>
                </div>
                <Image src={Nirma} alt="Nirma" className="rounded-[50%] border border-2 border-gray-400" width={100} height={100} />
              </motion.div>

              {/* Conference Title */}
              <Tilt className="cursor-pointer" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={500}>
                <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }} className="text-center mt-12">
                  <motion.p 
                  style={{ x: -titleY }}
                  className="text-5xl text-center font-bold my-1 mb-4">Welcome to ECMI-2025</motion.p>
                  <motion.p 
                  style={{ x: -titleY }}
                  className="text-2xl text-center my-1 font-bold text-yellow-400">
                    INTERNATIONAL CONFERENCE ON EMERGING RESEARCH IN SMART ELECTRONICS, COMMUNICATION TECHNOLOGIES,
                    INFORMATICS, AND MACHINE INTELLIGENCE
                  </motion.p>
                </motion.div>
              </Tilt>

              {/* Department Info */}
              <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }}>
                <div className="my-auto">
                  <motion.p
                  style={{ x: titleY }}
                  className="text-[14px] text-center font-bold my-1 mt-6">Organized By</motion.p>
                  <motion.p
                  style={{ x: titleY }}
                  className="text-2xl text-center font-bold my-1">DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</motion.p>
                </div>
              </motion.div>
            </Animate>
          </div>

          {/* Countdown Timer */}
          <motion.div style={{ opacity: counterOpacity, x: counterX, scale: scaleTitle }}>
            <p className="text-xl mt-[-140px] mb-[3.4rem] ml-3">November 6ᵗʰ and 7ᵗʰ 2025</p>
            <CounterContainer countDownLimit="2025-03-01T09:00:00" />
          </motion.div>
        </Animate>
      </div>
    </section>
  );
};

export default Hero;
