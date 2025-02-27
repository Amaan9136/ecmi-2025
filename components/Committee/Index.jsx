import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../helpers/SectionTitle";
import CommitteeCard from "./CommitteeCard";

const conferenceCommittee = {
  chiefPatron: [
    {
      name: `His Holiness Jagadguru Sri Sri Sri \nDr. Nirmalanandanatha Maha Swamiji`,
      designation: "Pontiff, Sri Adichunchanagiri Mahasamstana Math \n President Sri Adichunchanagiri Shikshana Trust ®",
    },
  ],
  patron: [
    {
      name: "Sri Sri Gunanatha Swamiji",
      designation: "Sri Adichunchanagiri Mahasamsthana Math, Chikkamagaluru Branch, Sringeri",
    },
    {
      name: "Dr. N S Ramegowda",
      designation: "CEO, Sri Adichunchanagiri Shikshana Trust ®",
      place: "",
    },
    {
      name: "Dr. Vidya Shankar",
      designation: "Vice Chancellor, VTU",
      place: "Belagavi",
    },
    {
      name: "Dr. C K Subbaraya",
      designation: "Registrar, Adichunchanagiri University",
      place: "B G Nagara",
    },
  ],
  generalChair: [{
    name: "Dr. C T Jayadeva",
    designation: "Principal, AIT, Chikkamagaluru",
    place: "",
  }],
  organizingChair: [{
    name: "Prof. Goutham M A",
    designation: "Professor and Head",
    place: "Dept. of ECE, AIT",
  }],
  conferenceChair: [{
    name: "Dr. Suma M",
    designation: "Associate Professor",
    place: "Dept. of ECE, AIT",
  }],
  conferenceCoChair: [
    {
      name: "Prof. Madhu Prakash R",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Nagaveni C R",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. RaghuKumar B S",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
  ],
  publicationChair: [
    {
      name: "Dr. Anil Kumar C",
      designation: "Associate Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Mahesh D S",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Divya G S",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Manjula U R",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
  ],
  publicityChair: [
    {
      name: "Prof. Harish Kumar C R",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Chandrakala C T",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Meghashree M",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Girish S",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
  ],
  webManagementCommittee: [
    {
      name: "Prof. Rajappa H S",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Linet Jenevive DSouza",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
  ],
  financeChairCommittee: [
    {
      name: "Prof. Anitha K T",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
    {
      name: "Prof. Tasmia Namreen A",
      designation: "Assistant Professor",
      place: "Dept. of ECE, AIT",
    },
  ],
};


const conferenceCommittee2 = {
  nationalAdvisoryCommittee: [
    { name: "Dr. B E Rangaswamy", designation: "Registrar", institution: "VTU, Belagavi" },
    { name: "Prof. S Y Kulkarni", designation: "Director, BNMIT, Bengaluru", institution: "Advisor, ACU, BG Nagara, Mandya" },
    { name: "Dr. E S Chakravarthy", designation: "Advisor", institution: "ACU, BG Nagara, Mandya" },
    { name: "Dr. Karunakara Rai", designation: "Professor", institution: "NMIT, Bengaluru" },
    { name: "Dr. Puttamadappa", designation: "Registrar", institution: "Dayananda University, Bengaluru" },
    { name: "Dr. G T Raju", designation: "Principal", institution: "SJCIT, Chikkaballapura" },
    { name: "Dr. Shobha B N", designation: "Principal", institution: "BGSIT, BG Nagara, Mandya" },
    { name: "Dr. Ravikumar G K", designation: "Principal", institution: "BGSCET, Bengaluru" },
    { name: "Dr. T G Basavaraju", designation: "Professor", institution: "Govt Engineering College, Hassan" },
    { name: "Dr. C M Prashanth", designation: "Principal", institution: "MITE, Mangalore" },
    { name: "Dr. Sivasankar Elango", designation: "Associate Professor, Dept. of Computer Science & Engineering", institution: "National Institute of Technology, Tiruchirappalli, Tamil Nadu" },
    { name: "Dr. Ananth Prabhu", designation: "Professor & Principal Investigator", institution: "Digital Forensics and Cyber Security Center of Excellence, Sahyadri College of Engineering & Management, Mangalore" },
    { name: "Dr. Gururaj H L", designation: "Associate Professor, Dept. of Information Technology", institution: "Manipal Institute of Technology, Bengaluru" },
    { name: "Dr. Vasudeva", designation: "Professor, Dept. of Information Science and Engineering", institution: "NMAMIT, Mangalore" },
    { name: "Dr. Naveen B", designation: "Associate Professor, Dept. of ECE", institution: "ACU, BG Nagara, Mandya" }
  ],
  technicalProgramCommittee: [
    { 
        name: "Prof. N Shekar V Shet", 
        designation: "Professor and Head, Dept. of ECE", 
        institution: "NITK, Surathkal" 
    },
    { 
        name: "Dr. B Surendiran", 
        designation: "Professor, Dept. of CSE", 
        institution: "NIT, Puducherry" 
    },
    { 
        name: "Dr. Geetha V", 
        designation: "Associate Professor, Dept. of Information Technology", 
        institution: "NITK, Surathkal" 
    },
    { 
        name: "Dr. Viswanath Talasila", 
        designation: "Professor and Head, Dept. of ETE", 
        institution: "MSRIT, Bengaluru" 
    },
    { 
        name: "Dr. Paritosh Peshwe", 
        designation: "Professor, Dept. of ECE", 
        institution: "IIIT, Nagpur" 
    },
    { 
        name: "Dr. Mandeep Singh", 
        designation: "Visiting Scientist, IISc Bangalore, Assistant Professor, Dept. of E&C", 
        institution: "NITK, Surathkal" 
    },
    { 
        name: "Dr. C P Ravikumar", 
        designation: "Director of Technical Talent Development", 
        institution: "Texas Instruments, India" 
    },
    { 
        name: "Dr. Sunil C K", 
        designation: "Assistant Professor, Dept. of CSE", 
        institution: "IIIT, Dharwad" 
    },
    { 
        name: "Dr. S G Shivaprasad Yadav", 
        designation: "Former Honorary Secretary, IETE Bengaluru, Associate Professor, Dept. of ETE", 
        institution: "MSRIT, Bengaluru" 
    },
    { 
        name: "Dr. Arvind Kumar G", 
        designation: "Professor, ETE", 
        institution: "MSRIT, Bengaluru" 
    },
    { 
        name: "Prof. K C B Rao", 
        designation: "Professor", 
        institution: "University College of Engineering, Vizianagaram, JNTUK" 
    },
    { 
        name: "Dr. A P Jagadeesh Chandra", 
        designation: "Professor, Dept. of ECE", 
        institution: "AIT, Chikkamagaluru" 
    },
    { 
        name: "Dr. Madhu Patil", 
        designation: "Professor & HOD, Dept. of Electrical Science & Engineering", 
        institution: "BGSCET, Bengaluru" 
    },
    { 
        name: "Dr. P C Shrikanth", 
        designation: "Professor & Head, Dept. of ECE", 
        institution: "MCE, Hassan" 
    },
    { 
        name: "Dr. K Sreelakshmi", 
        designation: "Professor & PG Dean Studies", 
        institution: "RVCE, Bengaluru" 
    },
    { 
        name: "Dr. Basavaraj Jagadale", 
        designation: "Professor & Chairman, Dept. of PG Studies & Research in Electronics", 
        institution: "Kuvempu University, Shankaraghatta" 
    },
    { 
        name: "Dr. S Ravishankar", 
        designation: "Visiting Professor, Dept. of ECE", 
        institution: "RVCE, Bengaluru" 
    },
    { 
        name: "Dr. Swetha Amit", 
        designation: "Senior Application Engineer", 
        institution: "Entuple Technology Pvt Ltd, Bengaluru" 
    },
    { 
        name: "Dr. Ranjitha U N", 
        designation: "Associate Professor and Head, CSE, School of Computer Science and Engineering", 
        institution: "REVA University, Bengaluru" 
    },
    { 
        name: "Dr. Maithri C", 
        designation: "Professor and Head, Dept. of CSE", 
        institution: "Kalpataru Institute of Technology, Tiptur" 
    },
    { 
        name: "Dr. Rajesh I S", 
        designation: "Assistant Professor, Dept. of AI&ML", 
        institution: "BMSIT, Bengaluru" 
    }
]

}

const conferenceCommittee3 = {
  internationalAdvisoryCommittee: [
    {
      name: "Prof. Francesco Flammini",
      designation: "Professor, Department of Computer Science",
      institution: "IDSIA USI-SUPSI, University of Applied Sciences and Arts of Southern Switzerland, Switzerland"
    },
    {
      name: "Dr. George Ghinea",
      designation: "Professor of Computer Science",
      institution: "Brunel University, London"
    },
    {
      name: "Andrej V Plotnikov",
      designation: "Doctor of Science, Professor, Department of Information Technology and Applied Mathematics",
      institution: "Odessa State Academy of Civil Engineering and Architecture, Odessa, Ukraine"
    },
    {
      name: "Amrit Mukherjee",
      designation: "Assistant Professor (Research), Department of Computer Science",
      institution: "Faculty of Science, University of South Bohemia"
    },
    {
      name: "Dr. Fadi Al-Turjman",
      designation: "Research Center for AI and IoT",
      institution: "AI and Robotics Institute, Near East University, Turkey"
    },
    {
      name: "Dr. Chawki Djeddi",
      institution: "Larbi Tebessi University, Algeria"
    },
    {
      name: "Dr. Hong Li",
      institution: "University of Houston-Downtown, USA"
    },
    {
      name: "Dr. Yuvaraja Teekaraman",
      designation: "Professor of Electrical Engineering",
      institution: "School of Engineering & Computing American International University, Kuwait."
    }
  ],
};


const Committee = () => {
  const { scrollY } = useScroll();
  const sectionOpacity = useTransform(scrollY, [14300, 14400], [1, 0.3]);

  return (
    <section className="relative lg:mb-28 flex flex-col" id="committee">
      <motion.div style={{ opacity: sectionOpacity }} className="section-container pt-10">
        <SectionTitle title={"Committee Members"} />
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-6">
          {Object.entries(conferenceCommittee).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-6">
          {Object.entries(conferenceCommittee2).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 mt-10 px-6">
          {Object.entries(conferenceCommittee3).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
      </motion.div>
    </section>
  );


};


export default Committee;
