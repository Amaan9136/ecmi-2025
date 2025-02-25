import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Scanner from "../../images/scanner/scanner.jpg";
import atom from "../../images/shapes/atom.png";
import GDGAlgiers from "../../images/shapes/GDGAlgiers.png";
import SectionTitle from "../helpers/SectionTitle";
import { importantDates, paymentDetails, registrationDetails } from "./schedule";

const Schedule = () => {
  const largeScreenRanges = [9100, 9200];
  const smallScreenRanges = [8300, 9400];

  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState(largeScreenRanges);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges(smallScreenRanges);
      } else {
        setScrollRanges(largeScreenRanges);
      }
    };

    updateRanges();
    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const tableOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section id="schedule" className="relative section-container text-white pt-6">
      <div className="absolute right-0 top-0 sm:right-[596px] sm:top-0 w-[28px] h-[30px]  lg:w-[47px] lg:h-[50px]">
        <Image
          src={atom}
          alt="atom"
        />
      </div>
      <div className="relative">
        <div className="absolute top-[460px] right-0 sm:top-[-70px] sm:right-0 lg:top-[-32px] lg:right-0  w-[68px] h-[58px] lg:w-[106px] lg:h-[74px]">
          <Image
            src={GDGAlgiers}
            alt="GDG"
          />
        </div>
      </div>
      <SectionTitle title="Schedule" />


      <motion.div style={{ opacity: tableOpacity }} className="flex items-center mt-12 gap-3">
        {/* Important Dates Table */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 mb-6 max-w-xl w-full mx-auto">
          <h2 className="bg-cyan-600 text-white text-center py-3 text-lg font-bold">
            📅 Important Dates
          </h2>
          <table className="border-collapse text-white w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="border border-gray-600 p-3">Event</th>
                <th className="border border-gray-600 p-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {importantDates.map((date, index) => (
                <tr key={index} className="border border-gray-600 text-center">
                  <td className="border border-gray-600 p-3">{date.event}</td>
                  <td className="border border-gray-600 p-3">{date.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Registration Details Table */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 max-w-xl w-full mx-auto">
          <h2 className="bg-cyan-600 text-white text-center py-3 text-lg font-bold">
            📝 Registration Details
          </h2>
          <table className="border-collapse text-white w-full">
            <thead>
              <tr className="bg-gray-700 text-gray-300">
                <th className="border border-gray-600 p-3">Region</th>
                <th className="border border-gray-600 p-3">Category</th>
                <th className="border border-gray-600 p-3">Non-IEEE Member</th>
                <th className="border border-gray-600 p-3">IEEE Member</th>
              </tr>
            </thead>
            <tbody>
              {registrationDetails.map((detail, index) => (
                <tr key={index} className="border border-gray-600 text-center">
                  <td className="border border-gray-600 p-3">{detail.region}</td>
                  <td className="border border-gray-600 p-3">{detail.category}</td>
                  <td className="border border-gray-600 p-3">{detail.nonIeee}</td>
                  <td className="border border-gray-600 p-3">{detail.ieee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>


      </motion.div>
      <motion.div style={{ opacity: tableOpacity }} className="flex flex-col md:flex-row items-center justify-center mt-12 gap-6">
        {/* Payment Details Table */}
        <div className="bg-gray-800 shadow-lg rounded-lg overflow-hidden border border-gray-700 max-w-xl w-full">
          <h2 className="bg-cyan-600 text-white text-center py-3 text-lg font-bold">
            💳 Payment Details
          </h2>
          <table className="border-collapse text-white w-full">
  <tbody className="border border-gray-600 text-center">
    {paymentDetails.map((detail, index) => (
      <tr key={index}>
        <td className="border border-gray-600 p-3 font-semibold">{detail.label}</td>
        <td className="border border-gray-600 p-3">{detail.value}</td>
        {index === 0 && (
          <td className="border border-gray-600 p-3 text-center align-middle" rowSpan={paymentDetails.length}>
            <Image src={Scanner} alt="QR Code" width={150} height={150} className="rounded-lg mx-auto" />
          </td>
        )}
      </tr>
    ))}
  </tbody>
</table>

        </div>

      </motion.div>
    </section>
  );
};

export default Schedule;
