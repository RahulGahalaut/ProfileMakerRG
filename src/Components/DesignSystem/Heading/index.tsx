const Heading = (props) => {
  return (
    <h1 className="text-2xl md:text-3xl text-white text-center">
      {props.children}
    </h1>
  );
};

export default Heading;
