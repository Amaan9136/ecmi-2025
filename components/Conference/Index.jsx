import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { FaDatabase, FaMicrochip, FaRobot } from "react-icons/fa";
import SectionTitle from "../helpers/SectionTitle";

const ConferenceSection = () => {
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
    <section className="relative mb-55 px-5" id="conference">
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

      {/* Main Content */}
      <motion.div style={{ opacity: sectionOpacity }} className="relative z-10 pt-16 pb-12 lg:px-8 px-4">
        {/* About The Conference */}
        <div className="m-0 p-0">
          <SectionTitle title="About The Conference" />
          <div className="w-full text-justify my-6 mb-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 rounded-xl shadow-xl border-l-4 border-purple-400">
            <p className="leading-relaxed text-justify">
              <span className="font-semibold text-yellow-400"> The International Conference on Emerging Research in Smart Electronics
                and Machine Informatics</span> serves as a premier platform for researchers,
              academicians, industry professionals, and students to present and discuss the latest advancements,
              innovations, and challenges in these rapidly evolving domains.
            </p>
            <p className="mt-4">This conference aims to foster collaboration and knowledge exchange, focusing on cutting-edge topics such as:</p>
            <ul className="list-disc list-inside mt-2">
              <li>Smart electronics and embedded systems.</li>
              <li>Emerging communication technologies, including IoT and 5G/6G.</li>
              <li>Advanced informatics for data-driven solutions.</li>
              <li>Breakthroughs in machine intelligence and artificial intelligence applications.</li>
            </ul>
            <p className="mt-4 font-bold text-yellow-400 text-justify"> ECMI-2026 welcomes contributions in the form of original research papers, innovative prototypes,
              and industrial case studies. By bringing together experts from academia and industry, the
              conference aims to inspire groundbreaking research and foster new partnerships.
              Participants will have the opportunity to explore emerging trends, engage in interdisciplinary
              discussions, and contribute to shaping the future of technology and innovation.</p>
          </div>
        </div>


        {/* Technical Tracks */}
        <div className="m-0 p-0 mt-2">
          <SectionTitle title="Technical Tracks" />
          <div className="my-6 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {[
              {
                title: "Smart Electronics",
                description: [
                  "Design and development of advanced embedded systems.",
                  "Innovations in semiconductor devices and fabrication techniques.",
                  "MEMS and NEMS: Applications and advancements.",
                  "Flexible and wearable electronics.",
                  "Power electronics for renewable energy and electric vehicles.",
                  "Sensor technologies for IoT and smart applications.",
                  "Low-power and energy-efficient electronics.",
                  "Mixed-signal IC design and testing.",
                  "Hardware security and trusted computing.",
                ],
                icon: <FaMicrochip size={20} className="text-yellow-400" />,
              },

              {
                title: "Informatics",
                description: [
                  "Big data analytics and visualization techniques.",
                  "Cloud computing: Architectures and security challenges.",
                  "Blockchain technology and its applications.",
                  "Data mining and knowledge discovery in various domains.",
                  "Human-computer interaction and user experience design.",
                  "Geographic Information Systems (GIS) and spatial informatics.",
                  "Cybersecurity and information assurance.",
                  "E-governance and smart city informatics.",
                  "Green computing and sustainable information systems.",
                ],
                icon: <FaDatabase size={20} className="text-yellow-400" />,
              },
              {
                title: "Machine Intelligence",
                description: [
                  "Deep learning algorithms and architectures.",
                  "Explainable AI and ethical AI systems.",
                  "Reinforcement learning and real-time decision-making systems.",
                  "AI for natural language processing and computer vision.",
                  "Autonomous systems and robotics.",
                  "Quantum Machine Learning.",
                  "AI-driven predictive maintenance in industrial systems.",
                  "Hybrid AI models for complex problem-solving.",
                  "AI in healthcare: Diagnosis, drug discovery and personalized medicine.",
                  "Federated learning and distributed AI models.",
                ],
                icon: <FaRobot size={20} className="text-yellow-400" />,
              },
            ].map((track, index) => (
              <div
                key={index}
                className="p-4 bg-gray-900 text-white rounded-xl shadow-sm border-l-4 border-purple-400 cursor-pointer"
              >
                <div className="flex items-center space-x-2">
                  {track.icon}
                  <h3 className="font-semibold">{track.title}</h3>
                </div>
                <ul className="p-4 pb-0 text-md list-disc list-outside">
                  {track.description.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Call for Papers Section */}
        <div className="w-full m-0 p-0 mt-2">
          <SectionTitle title="Call for Papers" />

          <div className="mx-auto">
            <div className="bg-gray-900 text-white p-6 rounded-xl border-l-4 border-purple-400 mt-6 space-y-4">

              <p className="text-md">
                <span className="text-yellow-400">ECMI-2026</span> invites the submission of original, high-quality research papers that have not been previously published.
              </p>

              <p className="text-md">
                All accepted and presented papers will be submitted to
                <span className="text-yellow-400"> IEEE</span> for potential inclusion in the
                <span className="text-yellow-400"> Xplore Digital Library</span>.
              </p>

              <p className="text-md text-[#FF3131] font-bold flex items-center">
                ⚠ ECMI-2026 takes plagiarism very seriously and considers it a professional misconduct.
              </p>

              <hr className="border-gray-700 my-4" />

              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-purple-300">Submission Guidelines</h3>
                <p className="text-md">
                  Full-length, high quality, original, and previously unpublished experimental or theoretical research articles with a maximum of <span className="text-green-400 font-medium">6 (Six)</span> pages and a minimum of <span className="text-green-400 font-medium">4 (Four)</span> pages, including figures, tables, and references, as per the Conference template (MS Word or LaTeX), shall be uploaded for ECMI-2026.
                </p>

                <p className="text-md">
                  Paper Submission Link:{" "}
                  <a
                    href="https://cmt3.research.microsoft.com/ECMI2026"
                    className="text-yellow-400 underline hover:text-yellow-300 break-all"
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
            </div>
          </div>
        </div>


      </motion.div>
    </section>
  );
};

export default ConferenceSection;