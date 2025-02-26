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
        <div className="absolute top-[1rem] right-[32%] ">
          <p style={{ color: "black" }} className="font-bold text-center text-base text-xl">{timeleft}</p>
          <p style={{ color: "black" }} className="text-center text-sm">{time}</p>
        </div>
      </Tilt>
    </Animate>
  );
};

export default CounterAtom;