import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import aitImage from "../../images/sectionsAssets/ait.png";
import deptImage from "../../images/sectionsAssets/dept.jpg";
import ecdptImage from "../../images/sectionsAssets/ecdpt.jpg";
import hrdImage from "../../images/sectionsAssets/hrd.jpg";
import mattImage from "../../images/sectionsAssets/matt.png";
import trustImage from "../../images/sectionsAssets/trust.png";
import ParagSection2 from "../helpers/ParagSection2";
import SectionTitle from "../helpers/SectionTitle";

const data = [
  {
    title: "Sri Adichunchanagiri Shikshana Trust",
    paragraph:
      `Sri Adichunchanagiri Shikshana Trust (SAST) established in 1974, has been unwavering in its commitment to the nation’s development for over five decades. The trust currently operates 515 educational institutions that emphasize quality education and value-based learning, benefiting over 150,000 students across the country. These institutions provide education at all levels, from primary to professional courses, with a particular focus on serving the youth of semi-urban and rural areas. Notable institutions under the trust include those in the fields of Medicine, Engineering, Pharmacy, Ayurveda, General Degree Programs, Management, and Pre-University Education, in addition to an educational centre for destitute individuals, as well as those with physical or mental disabilities. \n Sri Adichunchanagiri Mahasamsthana Math located approximately 110 kilometres west of Bengaluru, Karnataka, is situated on a picturesque rocky hill. This scenic environment, enriched with lush green woods and tranquil lakes, offers a sanctified atmosphere conducive to meditation and spiritual reflection. At the heart of the math stands the Lord Gangadhareshwara temple, which serves as the primary place of worship. The math is also dedicated to promoting environmental conservation and the empowerment of women. It regularly organizes Jana Jagruthi Shibiras (mass awareness camps) and Mahila Sabalikaran Shibiras (women empowerment camps) in various cities, drawing substantial participation and earning widespread appreciation from the public`,
    highlights: [
      "established in 1974",
      "operates 515 educational institutions",
      "benefiting over 150,000 students",
      "semi-urban and rural areas",
      "women empowerment camps",
      "mass awareness camps",
      "sri adichunchanagiri mahasamsthana math located approximately 110 kilometres west of bengaluru, karnataka",
    ],
    image: trustImage,
    image2: mattImage,
  },
  {
    title: "Adichunchanagiri Institute of Technology",
    paragraph:
      `Adichunchanagiri Institute of Technology (AIT), located in Chikkamagaluru, Karnataka, is a renowned engineering institution founded in 1980. The Institute is affiliated with Visvesvaraya Technological University (VTU), Belagavi, and is approved by the All India Council for Technical Education (AICTE). AIT is accredited by the National Board of Accreditation (NBA) and the National Assessment and Accreditation Council (NAAC) with an "A" grade. \n Adichunchanagiri Institute of Technology, Chikkamagaluru, offers a wide range of cutting-edge engineering programs focusing on specialized areas of study through its various well-established departments like Artificial Intelligence and Machine Learning, Civil Engineering, Computer Science and Engineering, Computer Science and Engineering (Data Science), Electronics and Communication Engineering, Electrical and Electronics Engineering, Information Science and Engineering, Mechanical Engineering and Robotics & Artificial Intelligence. \n The institute is dedicated to deliver high-quality education through postgraduate programs such as Computer Science and Engineering, Digital Electronics and Communication Systems, Structural Engineering, and Master of Business Administration (MBA), while fostering innovation and promoting research and development. It actively promotes student involvement in projects, technical competitions and industry collaborations. The institute also hosts active student chapters of renowned professional organizations such as IEEE, ISTE and IEI, supporting the technical and professional growth of its students.\n The campus provides exceptional facilities, including a well-stocked library, hostels, sports amenities and dedicated research centres. AIT maintains robust industry ties, ensuring excellent placement opportunities for students in leading organizations. The Institute also organizes a variety of co-curricular and extracurricular activities aimed at promoting students holistic development and leadership abilities. With a commitment to academic excellence, AIT is dedicated to produce skilled engineers who contribute significantly to technological advancements and societal progress.`,
    highlights: [
      "founded in 1980",
      "affiliated with visvesvaraya technological university",
      "and the National Assessment and Accreditation Council",
      "with an 'a' grade.",
      "naac",
      "nba",
      "vtu",
      "ieee",
      "iste",
      "iei",
      "undergraduate, postgraduate, and research programs",
      "ait maintains robust industry ties, ensuring excellent placement opportunities for students in leading organizations.",
    ],
    image: aitImage,
    image2: hrdImage,
  },
  {
    title: "Department of Electronics and Communication Engineering",
    paragraph:
      `The department was initially affiliated with the University of Mysore from 1981 to 1992, followed by Kuvempu University from 1992 to 1998. Currently it has been affiliated with Visvesvaraya Technological University (VTU), Belagavi, Karnataka. The Department of Electronics and Communication Engineering (ECE) was established in 1981. It is recognized by the All India Council for Technical Education (AICTE) and has been accredited twice by the National Board of Accreditation (NBA). The department offers full-time undergraduate, postgraduate and research programs. It plays a pivotal role in shaping the careers and equipping the students with essential skills for continuous professional growth, while making a significant contribution to society. \n The department boasts a highly experienced and dedicated faculty, with qualifications from esteemed institutions and expertise across various fields, including VLSI and Embedded Systems, Digital Communication, Microwave and Antenna Design, Digital Signal Processing, Image Processing, Computer Networks, Nano Electronics, and MEMS. Faculty members have contributed significantly to technical literature, with numerous research papers published in reputed journals. The department fosters a collaborative academic and research environment, supporting students in their academic pursuits.\n The department is equipped with well-established laboratories, supported by advanced software such as MATLAB, Tanner, LabVIEW, HFSS, Multisim and Vivado, along with essential tools like Spectrum Analyser and Logic Analyser for undergraduate, postgraduate, and research activities. Owing to the strong academic performance in university examinations, students have consistently secured university ranks enhancing the institution’s reputation at the state level. The majority of graduates secure placements in leading companies, paving the way for a successful future.`,
    highlights: [
      "established in 1981",
      "affiliated with Visvesvaraya Technological University (VTU), Belagavi",
      "Recognized by AICTE",
      "accredited twice by the National Board of Accreditation (NBA)",
      "UG, PG, and research programs",
      "VLSI, embedded systems, digital communication",
      "DSP, image processing, computer networks",
      "nano-electronics, and MEMS",
    ],
    image: deptImage,
    image2: ecdptImage,
  },
];


const AboutUs = () => {
  const largeScreenRanges = [3000, 3100]
  const smallScreenRanges = [8100, 8200]

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

  return (
    <section className="relative lg:mb-28" id="about-us">
      <div className="relative">

        <motion.div
          style={{ opacity: sectionOpacity }}
          className="section-container pt-6 cursor-pointer"
        >
          <SectionTitle title="About Us" />
          {data.map((element, index) => (
            <div key={index} className="flex flex-col items-center gap-6">
              {element.title && (
                <h2 className="mt-[3rem] text-white text-xl lg:text-2xl font-bold tracking-wide border-b-4 pb-1 mb-1 border-yellow-400 uppercase text-left w-full max-w-5xl">
                  {element.title}
                </h2>
              )}

              {/* Image Container - Grid for Responsive Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
                <Image
                  src={element.image}
                  width={550}
                  height={550}
                  alt={element.title + " 1"}
                  className="rounded-sm shadow-md mt-2 w-full"
                />
                <Image
                  src={element.image2}
                  width={550}
                  height={550}
                  alt={element.title + " 2"}
                  className="rounded-sm shadow-md mt-2 w-full"
                />
              </div>

              {/* Description Section */}
              <div className="w-full max-w-5xl text-left text-justify">
                <ParagSection2
                  title={element.title}
                  paragraph={element.paragraph}
                  highlights={element.highlights}
                />
              </div>
            </div>
          ))}
        </motion.div>


      </div>
    </section>
  );
};

export default AboutUs;
