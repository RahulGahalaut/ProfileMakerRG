const HeadingSecondary = (props) => {
  const {customClasses='', ...restProps}=props;
  return (
    <h2
      className={`text-xl md:text-2xl text-slate-200 ${customClasses}`}
      {...restProps}
    >
      {props.children}
    </h2>
  );
};

export default HeadingSecondary;
