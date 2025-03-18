import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
import BackGround from "../../images/sectionsAssets/Hero-background-6.png";
import balag from "../../images/speakers/balagangaswami.png";
import Nirma from "../../images/speakers/nirmalanandaswami.png";
import Animate from "../helpers/Animate-motion";
import CounterContainer from "./CounterContainer";
import Navbar from "./Navbar";

const Hero = () => {
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 1550], [1, 0]);
  const scaleTitle = useTransform(scrollY, [0, 1500], [1, 1.2]);
  const scaleBg = useTransform(scrollY, [0, 1500], [1, 1.1]);
  const titleY = useTransform(scrollY, [0, 1570, 1500], ["0%", "360px", "340px"]);
  const counterOpacity = useTransform(scrollY, [0, 1750], [1, 0]);
  const counterX = useTransform(scrollY, [500, 1700], ["0%", "-10%"]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <motion.div style={{ opacity: bgOpacity, scale: scaleBg, y: titleY }} className="absolute inset-0 -z-10">
        <Image
          src={BackGround}
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
          className="w-full h-full opacity-30"
        />
      </motion.div>

      <Navbar />
      <div className="section-container md:pb-0 mb-4 lg:mb-0">
        <Animate className="flex flex-col lg:gap-0 relative">
          <div className="flex flex-col lg:flex-row items-center">
            {/* Title Animation */}
            <Animate delay={8} className="flex flex-col flex-1 lg:pl-3 mb-2 hidden lg:block">
              <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
                <motion.h1
                  style={{ scale: scaleTitle, y: titleY }}
                  className="flex w-[12.5rem] lg:mb-20 font-bold font-mono justify-center lg:justify-start lg:text-left text-3xl leading-[2rem] text-yellow-500"
                >
                  <Typewriter
                    options={{
                      strings: ["SMART ELECTRONICS", "COMMUNICATION TECHNOLOGIES", "MACHINE INTELLIGENCE", "INFORMATICS"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </motion.h1>
              </Tilt>
            </Animate>

            {/* Conference Info */}
            <Animate delay={5} x={-60} y={80} duration={1} className="lg:max-w-[62rem] pt-4 lg:pt-0">
              {/* Desktop View */}
              <div className="hidden lg:flex text-center justify-between relative">
                <Image src={balag} alt="balag" className="rounded-full border-2 border-gray-400 w-24 h-24" />
                <div className="my-auto">
                  <motion.p className="text-3xl font-bold my-1">
                    ADICHUNCHANAGIRI INSTITUTE OF TECHNOLOGY
                  </motion.p>
                  <motion.p className="m-2 text-lg">
                    (Affiliated to VTU Belagavi, Recognized by AICTE New Delhi, Accredited by NAAC with "A" Grade)
                    <br />
                    Chikkamagaluru-577102, Karnataka, India.
                  </motion.p>
                </div>
                <Image src={Nirma} alt="Nirma" className="rounded-full border-2 border-gray-400 w-24 h-24" />
              </div>

              {/* Mobile View */}
              <div className="flex flex-col lg:hidden text-center items-center gap-3">
                <div className="flex gap-2">
                  <Image src={balag} alt="balag" className="rounded-full border-2 border-gray-400 w-20 h-20" />
                  <Image src={Nirma} alt="Nirma" className="rounded-full border-2 border-gray-400 w-20 h-20" />
                </div>
                <div>
                  <p style={{ y: titleY }} className="text-xl font-bold my-1">
                    ADICHUNCHANAGIRI INSTITUTE OF TECHNOLOGY
                  </p>
                  <p style={{ y: titleY }} className="m-2 text-sm">
                    (Affiliated to VTU Belagavi, Recognized by AICTE New Delhi, Accredited by NAAC with "A" Grade)
                    <br />
                    Chikkamagaluru-577102, Karnataka, India.
                  </p>
                </div>
              </div>


              {/* Conference Title */}
              <Tilt className="cursor-pointer" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={500}>
                <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }} className="text-center md:-3 lg:mt-12">
                  <motion.p style={{ x: -titleY }} className="text-xl lg:text-5xl font-bold my-1 mb-4">
                    Welcome to ECMI-2025
                  </motion.p>
                  <motion.p style={{ x: -titleY }} className="text-xl lg:text-2xl my-1 font-bold text-yellow-400">
                    INTERNATIONAL CONFERENCE ON EMERGING RESEARCH IN SMART ELECTRONICS, COMMUNICATION TECHNOLOGIES, INFORMATICS AND MACHINE INTELLIGENCE
                  </motion.p>
                </motion.div>
              </Tilt>


              {/* Department Info */}
              <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }}>
                <div className="my-auto">
                  <motion.p style={{ y: -titleY }} className="text-lg text-center font-bold my-1 mt-6">
                    Organized By
                  </motion.p>
                  <motion.p style={{ y: -titleY }} className="text-xl text-center font-bold my-1">
                    DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING
                  </motion.p>
                  <motion.p className="block lg:hidden text-lg text-center">November 6ᵗʰ and 7ᵗʰ 2025</motion.p>

                </div>
              </motion.div>
            </Animate>
          </div>

          {/* Countdown Timer */}
          <motion.p className="hidden lg:block mt-[-10rem] mb-[3.8rem] ml-3 text-lg">November 6ᵗʰ and 7ᵗʰ 2025</motion.p>
          <motion.div className="hidden lg:block max-w-[20rem]" style={{ opacity: counterOpacity, x: counterX, scale: scaleTitle }}>
            <CounterContainer countDownLimit="2025-11-06T09:00:00" />
          </motion.div>
        </Animate>
      </div>
    </section>
  );
};

export default Hero;
