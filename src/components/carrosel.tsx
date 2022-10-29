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

const Content = (props: IContent) => {
  return (
    <div className="content">
      <h4>{props.firstParagraf}</h4>
      <p>{props.firstParagraf}</p>
      <p>{props.secondParagraf}</p>
    </div>
  );
};
