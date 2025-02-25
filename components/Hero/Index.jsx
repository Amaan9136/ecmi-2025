import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Typewriter from "typewriter-effect";
// import ECMI_Logo from "../../images/logos/ECMI_Logo.png";
import BackGround from "../../images/sectionsAssets/Hero-background-7.png";
import balag from "../../images/speakers/balagangaswami.png";
import Nirma from "../../images/speakers/nirmalanandaswami.png";
import Animate from "../helpers/Animate-motion";
import CounterContainer from "./CounterContainer";
import Navbar from "./Navbar";
// import ThanksForParticipating from "./ThanksForParticipating";

const Hero = () => {
  const { scrollY } = useScroll();

  // useMotionValueEvent(scrollY, "change", (latestScrollY) => {
  //   console.log(latestScrollY);
  // });

  const bgOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const scaleTitle = useTransform(scrollY, [0, 400], [1, 1.2]);
  const titleY = useTransform(scrollY, [0, 470, 800], ["0%", "360px", "340px"]);
  const RegBtnY = useTransform(scrollY, [0, 800], ["0%", "340px"]);
  const RegBtnOpa = useTransform(scrollY, [0, 800], [1, 0]);
  const counterOpacity = useTransform(scrollY, [0, 450], [1, 0]);
  const counterX = useTransform(scrollY, [100, 500], ["0%", "-10%"]);

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Animated background image with opacity transition */}
      <motion.div
        style={{ opacity: bgOpacity, y: -titleY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src={BackGround}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="w-full h-full opacity-40"
        />
      </motion.div>

      <Navbar />
      <div className="section-container  md:pb-0 mb-4 lg:mb-0">
        {/* <div className="section-container pt-24 md:pb-0 mb-6 lg:mb-0"> */}
        <Animate className="flex flex-col lg:gap-0 relative">

          <div className="flex flex-col lg:flex-row items-center">
            {/* Animated title and subtitle */}
            <Animate delay={8} className="flex flex-col flex-1 lg:pl-3 mb-2 ">
              <Tilt className="cursor-pointer" tiltMaxAngleX={15} tiltMaxAngleY={30}>
                <motion.h1
                  style={{ scale: scaleTitle, y: titleY }}
                  className="flex lg:m-0 font-bold font-mono justify-center lg:justify-start lg:text-left text-3xl leading-[2rem] text-yellow-500"
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
              {/* <Animate delay={11} className="flex items-end justify-center lg:justify-start cursor-pointer">
                <motion.div
                  style={{ opacity: counterOpacity }}
                  className="relative lg:h-[67px] bounce h-[50px] w-[50px] lg:w-[67px]">
                  <Image src={Arrow} layout="fill" alt="Arrow" />
                </motion.div>
                <motion.div
                  style={{ scale: scaleTitle, x: RegBtnY, opacity: RegBtnOpa }}
                  className="mb-[-50px] cursor-not-allowed ">
                  <Purpulebutton
                    title={"Register Now!"}
                    redirect={"#conference"}
                    needImage={true}
                  />
                </motion.div>
              </Animate> */}
            </Animate>

            <Animate delay={5} x={-60} y={80} duration={1} className="w-[1060px] pt-10 mt-[-1rem] md:pt-4 lg:pt-0 order-first lg:order-last">
              <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }} className="flex text-center justify-between relative">
                <Image src={balag} alt="balag" className="rounded-[50%] border border-2 border-gray-400 " width={100} height={100} />
                <div className="my-auto">
                  <p className="text-3xl text-center font-bold my-1">ADICHUNCHANAGIRI INSTITUTE OF TECHNOLOGY</p>
                  <p className="m-2 text-[14px]">(Affiliated to VTU Belagavi, Recognized by AICTE New Delhi, accredited by NAAC with "A" Grade)
                    <br />
                    Jyothi Nagara, Chikkamagaluru-577102, Karnataka, India.</p>
                </div>
                <Image src={Nirma} alt="Nirma" className="rounded-[50%] border border-2 border-gray-400 " width={100} height={100} />
              </motion.div>
              <Tilt className="cursor-pointer" tiltMaxAngleX={10} tiltMaxAngleY={10} transitionSpeed={500}>
                <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }} className="text-center mt-12">
                  <p className="text-5xl text-center font-bold my-1 mb-4">Welcome to ECMI-2025</p>
                  <p className="text-2xl text-center my-1 font-bold text-yellow-400">INTERNATIONAL CONFERENCE ON EMERGING RESEARCH IN SMART ELECTRONICS, COMMUNICATION TECHNOLOGIES, INFORMATICS, AND MACHINE INTELLIGENCE</p>
                </motion.div>
              </Tilt>
              <motion.div style={{ opacity: bgOpacity, scale: scaleTitle }} className="">
                <div className="my-auto">
                  <p className="text-[14px] text-center font-bold my-1 mt-6">Organized By</p>
                  <p className="text-2xl text-center font-bold my-1">DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING</p>
                </div>
              </motion.div>
            </Animate>

          </div>

          <motion.div style={{ opacity: counterOpacity, x: counterX, scale: scaleTitle }}>
          <p className="text-xl mt-[-140px] mb-[3.4rem] ml-3">November 6ᵗʰ and 7ᵗʰ 2025</p>
            <CounterContainer countDownLimit="2025-03-01T09:00:00" />
            {/* <ThanksForParticipating /> */}
          </motion.div>

        </Animate>
      </div>
    </section>
  );
};

export default Hero;
