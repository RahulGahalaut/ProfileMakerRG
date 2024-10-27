const InfoWrapper = (props) => {
  return (
    <div id={props.id} className="w-full md:w-5/6 bg-slate-900/80 rounded-xl md:rounded-3xl p-4 md:p-12">
      {props.children}
    </div>
  );
};

export default InfoWrapper;
