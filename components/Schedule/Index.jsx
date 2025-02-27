import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Scanner from "../../images/scanner/scanner.jpg";
import SectionTitle from "../helpers/SectionTitle";
import { importantDates, paymentDetails, registrationDetails } from "./schedule";

const Schedule = () => {
  const largeScreenRanges = [10500, 10600];
  const smallScreenRanges = [18100, 18200];

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
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="/videos/jury.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        />
      </div>

      <SectionTitle title="Schedule" />


      <motion.div
        style={{ opacity: tableOpacity }}
        className="relative flex flex-col sm:flex-row items-center mt-6 gap-6 sm:gap-4 z-[350] py-12"
      >
        {/* Important Dates Table */}
        <div className="rounded-xl border-0 border-l-4  border-purple-400 bg-gray-900 shadow-lg overflow-hidden border w-full sm:max-w-xl mx-auto">
          <h2 className="py-6 text-white text-center py-3 text-lg font-bold">
            📅 Important Dates
          </h2>
          <table className="border-collapse text-white w-full">
            <thead>
              <tr className="bg-gray-700 text-lg text-gray-300">
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
        <div className="rounded-xl border-0 border-l-4 border-purple-400 bg-gray-900 shadow-lg overflow-hidden border w-full sm:max-w-xl mx-auto">
          <h2 className="py-6 text-white text-center py-3 text-lg font-bold">
            📝 Registration Details
          </h2>
          <table className="border-collapse text-white w-full">
            <thead>
              <tr className="bg-gray-700 text-lg text-gray-300">
                <th className="border border-gray-600 p-2">Region</th>
                <th className="border border-gray-600 p-2">Category</th>
                <th className="border border-gray-600 p-2">Non-IEEE Member</th>
                <th className="border border-gray-600 p-2">IEEE Member</th>
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

        {/* Payment Details Table */}
        <div className="rounded-xl border-0 border-l-4 border-purple-400 bg-gray-900 shadow-lg overflow-hidden border w-full sm:max-w-xl">
          <h2 className="py-6 text-white text-center py-3 text-lg font-bold">
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
                      <Image src={Scanner} alt="QR Code" width={150} height={150} className="mx-auto" />
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
