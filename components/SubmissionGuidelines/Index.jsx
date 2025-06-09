import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import SectionTitle from "../helpers/SectionTitle";

const SubmissionGuidelines = () => {
  const { scrollY } = useScroll();
  const [scrollRanges, setScrollRanges] = useState([9400, 9600]);

  useEffect(() => {
    const updateRanges = () => {
      if (window.innerWidth <= 1200) {
        setScrollRanges([17900, 18000]); // Mobile
      } else {
        setScrollRanges([9400, 9600]); // Desktop
      }
    };

    updateRanges();
    window.addEventListener("resize", updateRanges);
    return () => window.removeEventListener("resize", updateRanges);
  }, []);

  const sectionOpacity = useTransform(scrollY, scrollRanges, [1, 0.3]);

  return (
    <section className="relative mb-55 px-5" id="submission-guidelines">
      {/* Background Video */}
      {/* <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          src="/videos/jury.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover opacity-50"
        />
      </div> */}

      {/* Main Content */}
      <motion.div style={{ opacity: sectionOpacity }} className="relative z-10 pt-16 pb-12 lg:px-8 px-4">
        {/* Submission Guidelines */}
        <div className="m-0 p-0">
          <SectionTitle title="Submission Guidelines" />
          <div className="w-full my-6 mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl border-l-4 border-purple-400">

            <div className="space-y-2">
              <p className="text-md">
                Full-length, high-quality, original, and previously unpublished experimental or theoretical research articles with a maximum of <span className="text-green-400 font-medium">6 (Six)</span> pages and a minimum of <span className="text-green-400 font-medium">4 (Four)</span> pages, including figures, tables, and references, as per the Conference template (<span className="text-yellow-400">MS Word</span> or <span className="text-yellow-400">LaTeX</span>), shall be uploaded for ECMI-2026.
              </p>

              <p className="text-md">
                Paper Submission Link:{" "}
                <a
                  href="https://cmt3.research.microsoft.com/ECMI2026"
                  className="text-yellow-400 underline hover:text-yellow-300 break-words whitespace-pre-wrap hover:text-yellow-300 break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://cmt3.research.microsoft.com/ECMI2026
                </a>
              </p>

              <p className="text-md text-red-400 font-medium">
                Note: An additional charge of ₹500/- will apply for each extra page.
              </p>
            </div>
            <div>
              <hr className="border-gray-700 my-4" />
              <h2 className="text-white font-bold text-2xl pb-2 uppercase">
                Where to Submit
              </h2>

              <p className="leading-relaxed text-justify">
                The CMT submission link will be available soon.
              </p>
            </div>
            <div>
              <hr className="border-gray-700 my-4" />
              <h2 className="text-white font-bold text-2xl pb-2 uppercase">
                How to Submit
              </h2>
              <p className="leading-relaxed text-justify text-white">
                Authors must have a valid CMT login to proceed with submission. <br />
                Click here to create a CMT account:{" "}
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/general/account-creation.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300 break-words whitespace-pre-wrap"
                >
                  https://cmt3.research.microsoft.com/docs/help/general/account-creation.html
                </a>
                <br />
               <p> Click here for instructions on submitting a paper:{" "}</p>
                <a
                  href="https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 underline hover:text-yellow-300 break-words whitespace-pre-wrap"
                >
                  https://cmt3.research.microsoft.com/docs/help/author/author-submission-form.html
                </a>
                <br />
                The Microsoft CMT service was used for managing the peer-reviewing process for this
                conference. This service was provided for free by Microsoft and they bore all
                expenses, including costs for Azure cloud services as well as for software
                development and support.
              </p>
            </div>
          </div>

        </div>


      </motion.div>
    </section>
  );
};

export default SubmissionGuidelines;