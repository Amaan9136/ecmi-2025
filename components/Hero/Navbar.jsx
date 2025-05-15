import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
import ECMI from "../../images/logos/ECMI_Logo.png";
// import ieee from "../../images/logos/ieee.png";
// import ieeeBng from "../../images/logos/ieee_bng.png";
// import ieeeSoci from "../../images/logos/ieee_soci.png";
import Animate from "../helpers/Animate-motion.jsx";
import NavLinks from "./links";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);

  return (
    <header className="p-3 m-3 md:p-4 md:m-4 lg:p-5 lg:m-5">
      {/* Desktop menu */}
      <div className="flex flex-col gap-8 justify-between items-center">
      {/* LOGO TO SHOW - IEEE LOGO AND MAKE ECMI LOGO TO 150 X 150*/}
        {/* <div className="flex justify-center lg:justify-start w-full">
          <Animate delay={1} className="cursor-pointer flex gap-5 items-center mt-12 sm:mt-0">
            <Tilt tiltMaxAngleX={60} tiltMaxAngleY={40} scale={1.5} transitionSpeed={250}>
              <Image src={ieee} alt="ieee-Logo" width={100} height={100} priority={1} className="mt-2 mx-auto" />
            </Tilt>
            <Tilt tiltMaxAngleX={60} tiltMaxAngleY={40} scale={1.5} transitionSpeed={250}>
              <Image src={ieeeBng} alt="ieeeBng-Logo" width={100} height={100} priority={1} className="mt-2 mx-auto" />
            </Tilt>
            <Tilt tiltMaxAngleX={60} tiltMaxAngleY={40} scale={1.5} transitionSpeed={250}>
              <Image src={ieeeSoci} alt="ieeeSoci-Logo" width={100} height={100} priority={1} className="mt-2 mx-auto" />
            </Tilt>
          </Animate>
        </div> */}

        <div className="flex justify-center lg:justify-start w-full">
          <Animate delay={1} className="cursor-pointer flex gap-5">
            <Image src={ECMI} alt="ECMI-Logo" width={200} height={200} priority={1} className="mt-2 mx-auto" />
          </Animate>
        </div>

        {/* Desktop Links */}
        <Animate delay={2} tag="ul" className="hidden lg:flex items-center text-sm gap-3 font-semibold text-qiskit-white mt-[0px] z-[120] px-6 py-2 fixed right-0">
          {NavLinks.map((navLink, idx) => (
            <Tilt key={11 + idx} scale={1.1} transitionSpeed={250} className="cursor-pointer">
              <Link href={navLink.redirect}>
                <Animate tag="li" delay={idx + 2} y={idx + 60} x={idx + 60} className="hover:text-qiskit-yellow transition-all duration-500 relative">
                  <p className="border-2 py-1 px-2 rounded-md hover:text-qiskit-yellow bg-blue-900">{navLink.content}</p>
                </Animate>
              </Link>
            </Tilt>
          ))}
        </Animate>

        {/* Hamburger Menu (Mobile) */}
        <div
          onClick={() => setIsNavToggled(!isNavToggled)}
          className={`${isNavToggled ? "hidden" : "block"}  flex flex-col cursor-pointer gap-1.5 lg:hidden fixed top-4 right-4 z-[250] p-3 bg-gray-800 rounded-md`}
        >
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isNavToggled && (
        <div className="fixed inset-0 bg-black/30 text backdrop-blur-sm z-[200] flex flex-col items-center justify-center">
          {/* Close button */}
          <div
            onClick={() => setIsNavToggled(false)}
            className={`${isNavToggled ? "block" : "hidden"} absolute top-2 right-4 z-[250] p-3 text-2xl cursor-pointer font-bold`}
          >
            ✖
          </div>

          <Animate
            tag="ul"
            className="flex flex-col items-center text-xl gap-8"
          >
            {NavLinks.map((navLink, idx) => (
              <Tilt
                key={22 + idx}
                scale={1.1}
                transitionSpeed={200}
                className="cursor-pointer"
              >
                <Link href={navLink.redirect}>
                  <Animate
                    tag="li"
                    delay={idx + 2}
                    y={idx + 80}
                    x={idx + 80}
                    className="
            cursor-pointer relative transition-all duration-500 
            text-white text-2xl font-semibold 
            hover:text-yellow-500
            glow-text
          "
                  >
                    <p>{navLink.content}</p>
                  </Animate>
                </Link>
              </Tilt>
            ))}
          </Animate>

        </div>
      )}
    </header>
  );
};

export default Navbar;
