// NEED TO FIX IN MOBILE

import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../helpers/SectionTitle";
import CommitteeCard from "./CommitteeCard";
import { conferenceCommittee, conferenceCommittee2, conferenceCommittee3 } from "./committeeData.js";

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const splitLargeCommittees = (committees) => {
  const newCommittees = {};
  for (const [key, members] of Object.entries(committees)) {
    // Split only if large (threshold can be adjusted)
    if (Array.isArray(members) && members.length > 10) {
      const chunks = chunkArray(members, 9); // 9 members per chunk
      chunks.forEach((chunk, index) => {
        newCommittees[`${key} - Part ${index + 1}`] = chunk;
      });
    } else {
      newCommittees[key] = members;
    }
  }
  return newCommittees;
};

const Committee = () => {
  const { scrollY } = useScroll();
  const sectionOpacity = useTransform(scrollY, [14300, 14400], [1, 0.3]);

  // Split large committees for better layout
  const conferenceCommitteeSplit = splitLargeCommittees(conferenceCommittee);
  const conferenceCommittee2Split = splitLargeCommittees(conferenceCommittee2);

  return (
    <section className="relative lg:mb-28 flex flex-col" id="committee">
      <motion.div style={{ opacity: sectionOpacity }} className="section-container pt-10">
        <SectionTitle title={"Committee Members"} />

        {/* Use CSS grid with gap and columns for uniform card sizes and grid alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
          {Object.entries(conferenceCommitteeSplit).map(([title, members]) => (
            <CommitteeCard
              key={title}
              title={title.split(" - Part")[0]} // Remove " - Part" suffix from display title
              members={members}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
          {Object.entries(conferenceCommittee2Split).map(([title, members]) => (
            <CommitteeCard
              key={title}
              title={title.split(" - Part")[0]} // Remove " - Part" suffix from display title
              members={members}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-6">
          {Object.entries(conferenceCommittee3).map(([title, members]) => (
            <CommitteeCard key={title} title={title} members={members} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Committee;