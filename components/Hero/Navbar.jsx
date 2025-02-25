import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Tilt from "react-parallax-tilt";
// import AIgnite from "../../images/logos/aignite-logo.png";
import AIgnite from "../../images/logos/ECMI_Logo.png";
import Animate from "../helpers/Animate-motion.jsx";
import NavLinks from "./links";

const Navbar = () => {
  const [isNavToggled, setIsNavToggled] = useState(false);
  
  return (
    <header className="flex flex-col gap-8 p-6 m-6">
      {/* <header className="flex flex-col gap-8 p-6 fixed bg-gray-900 z-[120] w-full opacity-100">  */}
      {/* Desktop menu */}
      <div className="flex justify-between items-center">
        <Animate delay={1} className="cursor-pointer">
          <Tilt
            tiltMaxAngleX={60}
            tiltMaxAngleY={40}
            scale={1.5}
            transitionSpeed={250}
          // glareEnable={true}
          // glareMaxOpacity={0.5}
          // glareColor="#fff"
          // glarePosition="all"
          // className="p-4 cursor-pointer"
          >
            <Image src={AIgnite} alt="AIgnite-Logo" width={220} height={220} priority={1} className="mt-2" />
          </Tilt>
        </Animate>

        <Animate delay={2} tag="ul" className="hidden lg:flex items-center text-sm gap-8 font-semibold text-qiskit-white mt-[-90px] z-[120] px-6 py-2 fixed right-0">
          {NavLinks.map((navLink, idx) => {
            return (
              <Tilt
                key={11 + idx}
                // tiltMaxAngleX={60}
                // tiltMaxAngleY={40}
                scale={1.1}
                transitionSpeed={250}
                className="cursor-pointer">
                <Link href={navLink.redirect}>
                  <Animate tag="li" delay={idx + 2} y={idx + 60} x={idx + 60} className="hover:text-qiskit-yellow transition-all duration-500 relative">
                    {/* {navLink.content == "Home" && (
                        <div className="absolute left-0 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                      )} */}
                    <p className="border-2 py-1 px-2 rounded-md hover:text-qiskit-yellow bg-blue-900">{navLink.content}</p>
                  </Animate>
                </Link>
              </Tilt>
            );
          })}
        </Animate>

        {/* <Animate delay={10} y={55} x={55} className="hidden lg:flex cursor-pointer">
            <Purplebutton title={"Join us"} redirect={"#footer"} 
                    needImage={true}
                    />
          </Animate> */}

        <div
          onClick={() => setIsNavToggled(!isNavToggled)}
          className="flex flex-col cursor-pointer gap-2 lg:hidden"
        >
          <div className="burger-line"></div>
          <div className="burger-line"></div>
          <div className="burger-line"></div>
        </div>
      </div>
      {/* Mobile menu */}
      {isNavToggled && (
        <div className="flex flex-col items-center lg:hidden">
          <Animate tag="ul" className="flex flex-col items-center text-xl gap-8 font-medium text-qiskit-white 2xl:text-4xl 2xl:gap-24">
            {NavLinks.map((navLink, idx) => {
              return (
                <Tilt
                  key={22 + idx}
                  tiltMaxAngleX={40}
                  tiltMaxAngleY={40}
                  scale={1.1}
                  transitionSpeed={200}
                  className="cursor-pointer">
                  <Link href={navLink.redirect}>
                    <Animate
                      tag="li" delay={idx + 2} y={idx + 80} x={idx + 80}
                      className="cursor-pointer relative transition-all duration-500 hover:text-qiskit-yellow"
                    >
                      {navLink.content == "Home" && (
                        <div className="absolute left-2 -bottom-[4px] h-[5px] w-4/6 bg-qiskit-white"></div>
                      )}
                      <p>{navLink.content}</p>
                    </Animate>
                  </Link>
                </Tilt>
              );
            })}
          </Animate>
        </div>
      )}
    </header>
  );
};

export default Navbar;
