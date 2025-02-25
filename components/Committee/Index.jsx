import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../helpers/SectionTitle";
import CommitteeCard from "./CommitteeCard";

const conferenceCommittee = {
  chiefPatron: "Sri Sri Sri Dr. Nirmalanandanatha Maha Swamiji",
  patron: ["Sri Gunanatha Swamiji", "Dr. Vidya Shankar", "Dr. C K Subbaraya"],
  generalChair: "Dr. C T Jayadeva",
  organizingChair: "Dr. Goutham M.A.",
  conferenceChair: "Dr. Suma M.",
  conferenceCoChair: ["Prof Madhuprakash R", "Prof Nagaveni C.R", "Prof RaghuKumar B S"],
  publicationChair: ["Dr. Anil Kumar C", "Prof Mahesh D S", "Prof Divya G S", "Prof Manjukla U R"],
  publicityChair: ["Prof Harish Kumar C R", "Prof Chandrakala", "Prof Megha Shree M", "Prof Girish S"],
  webManagementCommittee: ["Prof Rajappa H S", "Prof. Linet D’Souza"],
  financeChairCommittee: ["Prof Anitha K T", "Prof Tasmia Namreen"],
};

const conferenceCommittee2 = {
  nationalAdvisoryCommittee: [
    { name: "Dr. B. E. Rangaswamy", designation: "Registrar", institution: "VTU" },
    { name: "Prof. S Y Kulkarni", designation: "Professor", institution: "" },
    { name: "Dr. E S Chakravarthy", designation: "Advisor", institution: "ACU" },
    { name: "Dr. Karunakara Rai", designation: "Professor", institution: "NMIT, Bengaluru" },
    { name: "Dr. Puttamadappa", designation: "Registrar", institution: "Dayananda University" },
    { name: "Dr. G.T Raju", designation: "Principal", institution: "SJCIT, Chikkaballapura" },
    { name: "Dr. Shobha B.N", designation: "Principal", institution: "BGSIT, BG Nagara, Mandya" },
    { name: "Dr. Ravikumar G.K", designation: "Principal", institution: "BGSCET, Bengaluru" },
    { name: "Dr. T.G Basavaraju", designation: "Professor", institution: "Govt Engineering College, Hassan" },
    { name: "Dr. C.M Prashanth", designation: "Principal", institution: "MITE, Mangalore" },
    { name: "Dr. Sivasankar Elango", designation: "Associate Professor, Department of Computer Science & Engineering", institution: "National Institute of Technology, Tiruchirappalli, Tamil Nadu" },
    { name: "Dr. Ananth Prabhu", designation: "Professor & Principal Investigator", institution: "Digital Forensics and Cyber Security Center of Excellence, Sahyadri College of Engineering & Management, Mangalore" },
    { name: "Dr. Gururaj H L", designation: "Associate Professor", institution: "Manipal Institute of Technology, Bengaluru" },
    { name: "Dr. Vasudeva", designation: "Professor", institution: "NMAMIT, Mangalore" },
    { name: "Dr. Naveen B", designation: "Associate Professor", institution: "ACU" }
],
  technicalProgramCommittee: [
    { name: "Prof. N. Shekar V. Shet", designation: "Professor and Head, Department of ECE", institution: "NITK, Surathkal" },
    { name: "Dr. B Surendiran", designation: "Professor, Dept. of CSE", institution: "National Institute of Technology (NIT), Puducherry, Thiruvettakudy, Karaikal, India" },
    { name: "Dr. Geetha V", designation: "Associate Professor, Dept. of Information Technology", institution: "NITK, Surathkal" },
    { name: "Dr. Viswanath Talasila", designation: "Professor and Head, ETE", institution: "MSRIT, Bengaluru" },
    { name: "Dr. Paritosh Peshwe", institution: "IIIT Nagpur, India" },
    { name: "Dr. Sunil C K", designation: "Assistant Professor, Department of Computer Science and Engineering", institution: "Indian Institute of Information Technology, Dharwad" },
    { name: "Dr. S G Shivaprasad Yadav", designation: "Former Honorary Secretary, IETE Bengaluru, Associate Professor, Department of ETE", institution: "Ramaiah Institute of Technology, Bengaluru" },
    { name: "Dr. Arvind Kumar G", designation: "Professor, ETE", institution: "MSRIT, Bengaluru" },
    { name: "Prof. K C B Rao", designation: "Professor", institution: "University College of Engineering, Vizianagaram, JNTUK" },
    { name: "Dr. A P Jagadeesh Chandra", designation: "Professor, Dept. of ECE", institution: "AIT, Chikkamagaluru" },
    { name: "Dr. Madhu Patil", designation: "Professor & HOD, Department of Electrical Science & Engineering", institution: "BGSCET, Bengaluru" },
    { name: "Dr. Swetha Amit", designation: "Senior Application Engineer", institution: "Entuple Technology Pvt Ltd, Bengaluru" },
    { name: "Dr. Ranjitha U N", designation: "Associate Professor and Head, CSE, School of Computer Science and Engineering", institution: "REVA University, Bengaluru" },
    { name: "Dr. Maithri C", designation: "Professor and Head, Dept. of CSE", institution: "Kalpataru Institute of Technology, Tiptur" },
    { name: "Dr. Rajesh I S", designation: "Assistant Professor", institution: "BMSIT, Bengaluru" }
  ],
}

const conferenceCommittee3 = {
  internationalAdvisoryCommittee: [
    { name: "Prof. Francesco Flammini", designation: "Professor, Department of Computer Science", institution: "IDSIA USI-SUPSI, University of Applied Sciences and Arts of Southern Switzerland, Manno 6928, Switzerland" },
    { name: "Prof. Dr. Fadi Al-Turjman", designation: "Research Center for AI and IoT", institution: "AI and Robotics Institute, Near East University, Turkey" },
    { name: "Dr. Hong Li", institution: "University of Houston-Downtown" },
    { name: "Dr. Chawki Djeddi", institution: "Larbi Tebessi University, Algeria" },
    { name: "Dr. George Ghinea", designation: "Professor of Computer Science", institution: "Brunel University, London" }
  ],

}

const Committee = () => {
  const { scrollY } = useScroll();
  const sectionOpacity = useTransform(scrollY, [6500, 8500], [1, 0.3]);

  return (
    <section className="relative lg:mb-28 flex flex-col" id="committee">
      <motion.div style={{ opacity: sectionOpacity }} className="section-container pt-10">
        <SectionTitle title={"Committee Members"} />
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-10">
          {Object.entries(conferenceCommittee).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-10">
          {Object.entries(conferenceCommittee2).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-10">
          {Object.entries(conferenceCommittee3).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};


export default Committee;
