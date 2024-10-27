import HeadingSecondary from "../HeadingSecondary";
import TimePeriod from "../TimePeriod";

const WorkOrLearningPlace = ({ title, place, abbr, start, end }) => {
  return (
    <div className="flex flex-col gap-1 md:gap-2">
      <HeadingSecondary customClasses="underline underline-offset-8">
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
