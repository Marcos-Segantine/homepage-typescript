import "../css/carrosel.css";

interface IContent {
  title: string;
  firstParagraf: string;
  secondParagraf: string;
}

export const Carrosel = () => {
  return (
    <div className="carrosel">
      <nav>
        <ul>
          <span></span>
          <span className="selected"></span>
          <span></span>
          <span></span>
        </ul>
      </nav>
      <Content
        title="Lorem"
        firstParagraf="Lorem ipsum dolor sit amet."
        secondParagraf="Lorem ipsum dolor sit amet consectetur."
      />
    </div>
  );
};

const Content = ({ title, firstParagraf, secondParagraf }: IContent) => {
  return (
    <div className="content">
      <h4>{title}</h4>
      <p>{firstParagraf}</p>
      <p>{secondParagraf}</p>
    </div>
  );
};
