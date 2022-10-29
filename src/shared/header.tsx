import "../css/header.css";

import { Carrosel } from "../components/carrosel";

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

    <Carrosel />
    </header>
  );
};
