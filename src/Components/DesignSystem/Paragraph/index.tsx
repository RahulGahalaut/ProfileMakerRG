const Paragraph = (props) => {
  const { children, customClasses='' } = props;
  return (
    <p className={`text-base md:text-lg text-yellow-300/70 ${customClasses}`}>{children}</p>
  );
};

export default Paragraph;
