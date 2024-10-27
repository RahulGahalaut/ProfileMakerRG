const InfoWrapper = (props) => {
  return (
    <div id={props.id} className="w-full bg-slate-900/80 rounded-xl p-4 md:t">
      {props.children}
    </div>
  );
};

export default InfoWrapper;
