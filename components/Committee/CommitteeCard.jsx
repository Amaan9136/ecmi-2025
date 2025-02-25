import Tilt from "react-parallax-tilt";

const CommitteeCard = ({ title, members }) => {
  return (
    <Tilt
      tiltMaxAngleX={1}
      tiltMaxAngleY={1}
      className="relative w-96 p-8 rounded-3xl shadow-2xl
                 bg-gradient-to-br from-gray-900 to-gray-800 
                 before:absolute before:inset-0 before:bg-[url('/path-to-texture.png')] before:opacity-10 
                 hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-400"
    >
      <h2 className="text-white font-bold text-2xl mb-4 tracking-wide border-b border-purple-400 pb-2 uppercase">
        {title.replace(/([A-Z])/g, " $1").trim()}
      </h2>
      <ul className="text-gray-300 text-base space-y-3 mt-4">
        {Array.isArray(members)
          ? members.map((member, index) =>
              typeof member === "object" ? (
                <li key={index} className="mb-4 border-l-2 pl-4">
                  <span className="text-white text-lg">{member.name}</span>
                  {member.designation && (
                    <p className="text-gray-400 text-sm">{member.designation}</p>
                  )}
                  <p className="text-gray-500 text-sm italic">{member.institution}</p>
                </li>
              ) : (
                <li key={index} className="text-white text-lg">• {member}</li>
              )
            )
          : members && <li className="text-white text-lg">• {members}</li>}
      </ul>
    </Tilt>
  );
};

export default CommitteeCard;
