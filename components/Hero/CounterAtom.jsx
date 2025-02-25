import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Atom from "../../images/sectionsAssets/Atom.png";
import Animate from "../helpers/Animate-motion";

const CounterAtom = ({ delay, time, timeleft, isHidden = false }) => {
  return (
    <Animate delay={delay} className={`${isHidden && 'hidden md:flex'} relative -mt-12`}>
      <Tilt
        tiltMaxAngleX={50}
        tiltMaxAngleY={25}
        scale={1.1}
        transitionSpeed={250}
        className="cursor-pointer">
        <Image src={Atom} height={100} width={100} />
        <div className="absolute top-1/4 right-[40%] lg:right-[34%]">
          <p style={{ color: "black" }} className="font-bold text-center text-base lg:text-xl text-[12px]">{timeleft}</p>
          <p style={{ color: "black" }} className="text-center text-[10px] sm:text-sm">{time}</p>
        </div>
      </Tilt>
    </Animate>
  );
};

export default CounterAtom;