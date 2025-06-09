import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import Tilt from "react-parallax-tilt";
import Animate from "../helpers/Animate-motion";

const ContactUs = () => {
  const contactData = [
    { name: "Dr. Suma M", email: "suma.aug13@gmail.com", contact: "9481653956", color: "#39FF14" },
    { name: "Dr. Anil Kumar C", email: "onlyoneanil@gmail.com", contact: "9902037956", color: "#39FF14" },
    { name: "Prof. Madhu Prakash R", email: "madhuprakashr1@gmail.com", contact: "7795361426", color: "#39FF14" },
  ];

  const largeScreenRanges = [12100, 12200];
  const smallScreenRanges = [19900, 20500];

  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges(smallScreenRanges); // Mobile
      } else {
        setScrollRanges(largeScreenRanges); // Desktop
      }
    };

    updateRanges();
    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const contactOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section id="contact-us" className="section-container py-6 px-4">

      <Animate tag="h6" className="m-[26px] text-center text-gray-400 font-bold text-lg lg:text-xl">
        Click the Contacts below to <span className="text-emerald-300">Chat in WhatsApp</span>
      </Animate>

      <Animate
        delay={12}
        x={50}
        y={-50}
        className="flex flex-wrap justify-center items-center gap-6 sm:gap-8"
      >
        {contactData.map((cont, index) => (
          <motion.div key={index} style={{ opacity: contactOpacity }} className="w-full sm:w-80 md:w-96 lg:w-auto flex justify-center">
            <Tilt
              className="cursor-pointer rounded-lg p-4 lg:p-8 group text-center w-full"
              glareEnable={true}
              glareMaxOpacity={1.1}
              glareColor={cont.color}
              glarePosition="all"
            >
              <Link href={"https://wa.me/+91" + cont.contact} target="_blank">
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold leading-tight lg:leading-snug">
                  {cont.name}
                </h2>
                <p
  style={{ color: cont.color }}
  className="flex items-center justify-center sm:text-lg lg:text-xl font-medium leading-6 lg:leading-8 group-hover:hidden"
>
  <FaEnvelope style={{ marginRight: '12px' }} />
  {cont.email}
</p>
<p
  style={{ color: cont.color }}
  className="flex items-center justify-center sm:text-lg lg:text-xl font-medium leading-6 lg:leading-8 group-hover:hidden"
>
  <FaPhoneAlt style={{ marginRight: '12px' }} />
  {cont.contact}
</p>


                <span
                  className="group-hover:opacity-100 opacity-0 text-sm sm:text-lg lg:text-xl font-semibold block"
                  style={{ color: cont.color }}
                >
                  Chat With {cont.name}
                </span>
              </Link>
            </Tilt>
          </motion.div>
        ))}
      </Animate>

    </section>
  );
};

export default ContactUs;
