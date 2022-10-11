import "./Header.css";

export const Header = () => (
  <div className="header">
    <div className="container header__wrapper">
      <div>
        <h1 className="header-title">Future one</h1>
      </div>
      <div className="row">
        <div className="col">
          <ul className="header-menu">
            <li className="header-item header-active">
              <a href="/">Overview</a>
            </li>
            <li className="header-item">
              <a href="/">About</a>
            </li>
            <li className="header-item">
              <a href="/">Resources</a>
            </li>
            <li className="header-item">
              <a href="/">Network</a>
            </li>
            <li className="header-item">
              <a href="/">Cloud</a>
            </li>
            <li className="header-item">
              <a href="/">Download</a>
            </li>
            <li className="header-item">
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <button className="header__btn">Contact Us</button>
        </div>
      </div>
    </div>
  </div>
);
