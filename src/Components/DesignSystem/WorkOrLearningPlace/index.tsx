import HeadingSecondary from "../HeadingSecondary";
import TimePeriod from "../TimePeriod";

const WorkOrLearningPlace = ({ title, place, abbr, start, end }) => {
  return (
    <div>
      <HeadingSecondary>
        {!!title && title + ", "}
        {!!abbr ? (
          <abbr title={abbr} className="no-underline">
            {place}
          </abbr>
        ) : (
          place
        )}
      </HeadingSecondary>
      <TimePeriod start={start} end={end} />
    </div>
  );
};

export default WorkOrLearningPlace;
