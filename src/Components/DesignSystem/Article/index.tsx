const Article = (props) => {
  return <article className="flex flex-col gap-4 md:gap-8">{props.children}</article>;
};

export default Article;
