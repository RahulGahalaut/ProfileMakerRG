const TimePeriod = ({ start, end }) => {
  return (
    <div className="text-slate-300 text-sm md:text-base font-bold">
      <time>{start}</time> - <time>{end}</time>
    </div>
  );
};

export default TimePeriod;
