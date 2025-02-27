import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import Amith from "../../images/speakers/Amith.jpg";
import Arjunjs from "../../images/speakers/Arjunjs.png";
import Deekshith from "../../images/speakers/Deekshith.jpg";
import SushilYadav from "../../images/speakers/SushilYadav.jpg";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const AboutMentors = () => {
  const largeScreenRanges = [7600, 7700]
  const smallScreenRanges = [11600, 11700]

  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState(largeScreenRanges);

  // Set the scroll ranges based on screen size
  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges(smallScreenRanges); // Mobile
      } else {
        setScrollRanges(largeScreenRanges); // Desktop
      }
    };

    updateRanges();

    window.addEventListener('resize', updateRanges);
    return () => window.removeEventListener('resize', updateRanges);
  }, []);

  const sectionOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);
  const mentorsData = [
    {
      title: "Arjun JS",
      paragraph: "Arjun JS is a dedicated and ambitious professional currently serving as the Assistant Manager of Business Solutions at PUMA Group. With a background in Information Sciences from Manipal, he is based in Bengaluru, Karnataka. Arjun is driven by a commitment to growth and is known for his loyalty and strong work ethic. He embraces challenges and is determined to deliver exceptional results, regardless of the difficulty level, exemplifying a proactive approach to his career. Arjun's recent accomplishments include recognition for his achievements at PUMA, which he describes as a proud and unexpected moment in his career. With a growing network and a focus on delivering impactful solutions, Arjun is steadily advancing in his field, building both professional relationships and expertise.",
      highlights: ["dedicated", "ambitious", "commitment to growth", "loyalty", "strong work ethic", "proactive approach", "recognition for achievements", "impactful solutions"],
      image: Arjunjs,
      orderLast: true,
    },
    {
      title: "Sushil Kumar Yadav",
      paragraph: "Sushil Kumar Yadav, a skilled Full Stack Web Developer based in New Delhi, brings over four years of experience in creating dynamic and comprehensive web applications. Sushil's expertise covers both frontend and backend development, where he builds user-friendly, responsive interfaces and implements robust backend functionalities that cater to specific business needs. Proficient in an array of frameworks and tools, Sushil’s frontend skills include HTML, CSS, JavaScript, React.js, and jQuery, while his backend expertise spans PHP, CodeIgniter, and Laravel. His technical acumen extends to database management and cloud infrastructure, with experience in MongoDB, MySQL, and AWS, creating scalable and secure application environments.",
      highlights: ["skilled", "dynamic web applications", "frontend and backend development", "user-friendly interfaces", "responsive interfaces", "robust backend functionalities", "database management", "cloud infrastructure"],
      image: SushilYadav,
      orderLast: false,
    },
    {
      title: "Deekshith K N",
      paragraph: "Deekshith K N is a skilled Software Engineer at Capulus Technologies Private Limited, specializing in advanced areas such as computer vision, data science, and machine learning. With a solid background in predictive analytics and the Internet of Things (IoT), Deekshith brings a robust set of technical skills to the information technology sector. His expertise supports innovative solutions and applications that enhance data-driven decision-making and intelligent automation.",
      highlights: ["Software Engineer", "Capulus Technologies Private Limited", "computer vision", "data science", "machine learning", "predictive analytics", "Internet of Things (IoT)", "technical skills", "innovative solutions", "data-driven decision-making", "intelligent automation"],
      image: Deekshith,
      orderLast: true,
    },
    {
      title: "Amith J",
      paragraph: "Amith J is a dedicated Software Engineer with a Bachelor’s degree in Computer Science from AIT College (Alumini). His career at Lowe's India began as an Associate Software Engineer, and he has since progressed to his current role as a Software Engineer. With over five years of experience, he specializes in utilizing advanced skills in React.js, Redux.js, and Spring Boot to develop RESTful Web Services that power innovative retail technology solutions.",
      highlights: ["dedicated Software Engineer", "Alumini", "Bachelor’s degree in Computer Science", "five years of experience", "advanced skills in React.js", "Redux.js", "Spring Boot", "RESTful Web Services", "innovative retail technology solutions"],
      image: Amith,
      orderLast: false,
    },
  ];

  return (
    <section className="relative mb-28" id="about-mentors">
      <div className="relative">

        <motion.div
          style={{ opacity: sectionOpacity }}
          className="section-container pt-6 cursor-pointer"
        >
          <SectionTitle title={"About Mentor's"} />

          {mentorsData.map((mentor, index) => (
            <div
              key={index}
              className={`flex flex-col gap-10 items-center lg:flex-row mt-[3rem] lg:m-12 ${mentor.orderLast ? "lg:flex-row-reverse" : ""}`}
            >
              <div className="relative lg:w-[321px]">
                <Tilt className="cursor-pointer">
                  <Image src={mentor.image} width={550} height={550} alt="mentorImg" className="rounded-lg shadow-md" />
                </Tilt>
              </div>

              <div className="flex flex-col gap-11 flex-1 ">
                <ParagSection2
                  title={mentor.title}
                  paragraph={mentor.paragraph}
                  highlights={mentor.highlights}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMentors;
