const Article = (props) => {
  return <article className="flex flex-col gap-4">{props.children}</article>;
};

export default Article;
