import "../css/header.css";

export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
          <li>
            <a href="">Link</a>
          </li>
        </ul>
      </nav>

      <div className="title-home">
        <h1>Website Template</h1>
        <span>Lading Page Design Template</span>
      </div>

      <div className="carrosel">
        <nav>
          <ul>
            <span></span>
            <span className="selected"></span>
            <span></span>
            <span></span>
          </ul>
        </nav>

        <div className="content">
          <h4>Lorem</h4>

          <p>Lorem ipsum dolor sit amet.</p>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>
      </div>
    </header>
  );
};
