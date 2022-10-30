import "../css/services.css";
import imgIcon from "../assets/images/image-icon.png";

interface IService {
  title?: string;
  text: string;
}

interface IServiceImage {
  srcImage: string;
}

export const Services = () => {
  return (
    <div className="services">
      <ServiceBigger
        title="Lorem ipsum"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
        incidunt"
      />

      <ServiceImg srcImage={imgIcon} />

      <ServiceSmall
        title="Lorem"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
        incidunt"
      />
      <ServiceSmall
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
        incidunt"
      />
      <ServiceImg srcImage={imgIcon} />

      <ServiceSmall
        title="Lorem"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nobis
        incidunt"
      />

      <ServiceImg srcImage={imgIcon} />
    </div>
  );
};

const ServiceBigger = ({ title, text }: IService) => {
  return (
    <div className="service-bigger">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

const ServiceSmall = ({ title, text }: IService) => {
  return (
    <div className="service-small">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

const ServiceImg = ({ srcImage }: IServiceImage) => {
  return (
    <div className="service-img">
      <img src={srcImage} alt="" />
    </div>
  );
};
