import "../css/blog.css";

import imgIcon from '../assets/images/image-icon.png'

interface IArticle {
  isBigger: boolean;
  img?: string;
  text: string;
}

export const Blog = () => {
  return (
    <div className="blog">
      <Article isBigger={true} img={imgIcon} text="Lorem ipsum dolor sit amet consectetur." />
      <div>
        <Article isBigger={false} text="Lorem ipsum dolor sit amet consectetur." />
        <Article isBigger={false} text="Lorem ipsum dolor sit amet consectetur." />
        <Article isBigger={false} text="Lorem ipsum dolor sit amet consectetur." />
        <Article isBigger={false} text="Lorem ipsum dolor sit amet consectetur." />
      </div>
    </div>
  );
};

const Article = ({ img, isBigger, text }: IArticle) => {
  return (
    <>
      {isBigger ? (
        <div className="article-bigger">
          <img src={img} alt="" />
          <p>{text}</p>
        </div>
      ) : (
        <div className="article-small">
          <img src={img} alt="" />
          <p>{text}</p>
        </div>
      )}
    </>
  );
};
