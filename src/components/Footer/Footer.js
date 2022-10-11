import "./Footer.css";

export const Footer = () => (
  <div className="footer">
    <div className="container">
      <div className="footer__row">
        <section className="footer-menu">
          <header className="footer-menu__header">
            <h3 className="footer-menu__title">Products</h3>
          </header>
          <ul class="footer-menu__body">
            <li>Tiramisu chocolate</li>
            <li>Tiramisu chocolate</li>
            <li>Tiramisu chocolate</li>
          </ul>
        </section>

        <section className="footer-menu">
          <header className="footer-menu__header">
            <h3 className="footer-menu__title">Products</h3>
          </header>
          <ul class="footer-menu__body">
            <li>Tiramisu chocolate</li>
            <li>Tiramisu chocolate</li>
            <li>Tiramisu chocolate</li>
          </ul>
        </section>
      </div>

      <div className="footer__row">
        <ul class="footer__social">
          <li>
            <a class="link link-1" href=""></a>
          </li>
          <li>
            <a class="link link-2" href=""></a>
          </li>
          <li>
            <a class="link link-3" href=""></a>
          </li>
          <li>
            <a class="link link-4" href=""></a>
          </li>
          <li>
            <a class="link link-5" href=""></a>
          </li>
        </ul>
      </div>

      <hr className="footer__devider" />

      <div className="footer__links">
        <p>
          © 2003 - 2022 Carrot cake sweet pie Sp. z o.o. All rights reserved.
        </p>
        <p>Legal</p>
        <p>Privacy policy</p>
        <p>Proud to be Open Source</p>
      </div>
    </div>
  </div>
);
