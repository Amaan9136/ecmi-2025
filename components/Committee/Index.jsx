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
    if (Array.isArray(members) && members.length > 10) {
      const chunks = chunkArray(members, 9);
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
  const conferenceCommitteeSplit = splitLargeCommittees(conferenceCommittee);
  const conferenceCommittee2Split = splitLargeCommittees(conferenceCommittee2);

  return (
    <section className="relative lg:mb-28 flex flex-col items-center w-full" id="committee">
      <motion.div
        style={{ opacity: sectionOpacity }}
        className="section-container w-full max-w-7xl pt-6 mt-10 md:mt-0 cursor-pointer sm:px-6 lg:px-8"
      >
        <SectionTitle title={"Committee Members"} />

        {/* Mobile: flex column centered, Desktop: grid */}
        <div className="flex flex-col items-center gap-8 mt-10 px-2 sm:px-2 lg:grid lg:grid-cols-3 lg:gap-12 lg:items-stretch lg:px-0 lg:mt-10 lg:space-y-0">
          {Object.entries(conferenceCommitteeSplit).map(([title, members]) => (
            <CommitteeCard
              key={title}
              title={title.split(" - Part")[0]}
              members={members}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 px-2 sm:px-2 lg:grid lg:grid-cols-3 lg:gap-12 lg:items-stretch lg:px-0 lg:mt-10 lg:space-y-0">
          {Object.entries(conferenceCommittee2Split).map(([title, members]) => (
            <CommitteeCard
              key={title}
              title={title.split(" - Part")[0]}
              members={members}
            />
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 mt-10 px-2 sm:px-2 lg:grid lg:grid-cols-3 lg:gap-12 lg:items-stretch lg:px-0 lg:mt-10 lg:space-y-0">
          {Object.entries(conferenceCommittee3).map(([title, members]) => (
            <CommitteeCard
              key={title}
              title={title}
              members={members}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Committee;