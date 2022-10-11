import "./Discover.css";

export const Discover = () => (
  <div className="row">
    <div className="col">
      <section className="intro">
        <header className="intro__header">
          <h3 className="intro__title">
            <span class="word">Duis aute irure</span> dolor <br /> in
            reprehenderit
          </h3>
        </header>
        <div className="intro__body">
          <p>
            Nam at lectus urna duis convallis. Id semper risus <br /> in
            hendrerit gravida rutrum quisque non tellus. Elit <br /> eget
            gravida cum sociis natoque. Ultrices neque <br />
            ornare aenean euismod elementum nisi quis <br /> eleifend. Arcu
            felis bibendum ut tristique et
            <br /> egestas.
          </p>
        </div>
        <footer className="intro__footer">
          <button className="intro__btn">Discover now</button>
        </footer>
      </section>
    </div>
    <div className="col">
      <img src="./assets/img/women.png" alt="" />
    </div>
  </div>
);

console.log("123")