import "../css/features.css";
import imgIcon from "../assets/images/image-icon.png";

interface IFeature {
  img: string;
  title: string;
  text: string;
}

export const Features = () => {
  return (
    <div className="features">
      <h2>Features</h2>
      <div className="content-features">
          <Feature img={imgIcon} title="Feature One" text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
          <Feature img={imgIcon} title="Feature Two" text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
          <Feature img={imgIcon} title="Feature Three" text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
          <Feature img={imgIcon} title="Feature Four" text="Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur." />
      </div>

        <div className="feature-img">
          <img src={imgIcon} alt="" />
        </div>
    </div>
  );
};

const Feature = ({ img, title, text }: IFeature) => {
  return (
    <div className="feature">
      <img src={img} alt="" />
      <span>
        <h6>{title}</h6>
        <p>{text}</p>
      </span>
    </div>
  );
};
