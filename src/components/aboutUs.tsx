import "../css/aboutUs.css";
import imgIcon from "../assets/images/image-icon.png";

export const AboutUs = () => {
  return (
    <div className="about-us">
      <h2>About Us</h2>
      <p className="p-about">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo in amet
        labore provident quos repellendus praesentium aut error, at
        consequuntur.
      </p>
      <div className="content-about">
        <div className="img img-bigger">
          <img src={imgIcon} alt="" />
        </div>

        <div className="img img-medium">
          <img src={imgIcon} alt="" />
        </div>

        <div className="img img-small">
          <img src={imgIcon} alt="" />
        </div>

        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            porro nostrum repellat. Voluptate quo dolores eius voluptates
            explicabo ab repellat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
            earum ab deleniti, recusandae nostrum dignissimos.
          </p>
        </div>
      </div>
    </div>
  );
};
