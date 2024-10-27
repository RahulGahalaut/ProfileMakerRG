const ImgCenter = (props) => {
  return (
    <div className="flex justify-center">
      <img
        className="rounded-full w-28 md:w-48 h-28 md:h-48 grayscale"
        src={props.src}
      />
    </div>
  );
};

export default ImgCenter;
