const Paragraph = (props) => {
  return (
    <p className="text-base md:text-lg text-slate-300/70 ">{props.children}</p>
  );
};

export default Paragraph;
