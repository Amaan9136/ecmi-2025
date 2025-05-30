const ParagSection2 = ({ title = "", paragraph = "", highlights = [], hoverColor = "#4999D0" }) => {
  const renderParagraph = () => {
    const lowerCaseHighlights = highlights.map((highlight) => highlight.toLowerCase());
    const highlightRegex = new RegExp(`(${highlights.join("|")})`, "gi");

    return paragraph.split("\n").map((line, lineIndex) => {
      const parts = line.split(highlightRegex);

      return (
        <span key={lineIndex} className="block text-gray-300">
          {parts.map((part, index) => {
            if (typeof part === "string") {
              return part.split(/(\n|\t)/).map((segment, i) => {
                if (segment === "\n") {
                  return <br key={`br-${index}-${i}`} />;
                } else if (segment === "\t") {
                  return <span key={`tab-${index}-${i}`} className="ml-4 inline-block"></span>;
                } else if (lowerCaseHighlights.includes(segment.toLowerCase().trim())) {
                  return (
                    <span key={`highlight-${index}-${i}`} className="font-bold text-yellow-400">
                      {segment}
                    </span>
                  );
                } else {
                  return segment;
                }
              });
            }
            return part;
          })}
        </span>
      );
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-start gap-6 w-full max-w-5xl">
      <div className="flex-1">
        <p className="text-sm lg:text-xl font-medium text-left text-justify">
          {renderParagraph()}
        </p>
      </div>
    </div>
  );
};

export default ParagSection2;
