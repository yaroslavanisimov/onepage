import "./Review.css";

export const Review = () => (
  <div className="review">
    <div className="review__row">
      <div className="review__col">
        <div className="review__short">
          Bibendum at varius <br /> vel pharetra vel turpis <br /> nunc eget
          lorem.
        </div>
      </div>
      <div className="review__col">
        <div className="quote">
          <img src="/assets/icons/quote_2.png" alt="" />
        </div>
        <p className="review__description">
          Aliquam purus sit amet luctus venenatis lectus magna. Faucibus purus{" "}
          <br />
          in massa tempor nec feugiat nisl pretium fusce. Tortor vitae purus{" "}
          <br />
          faucibus ornare. Neque viverra justo nec ultrices. Nisl nunc mi ipsum{" "}
          <br />
          faucibus. Tristique risus nec feugiat in fermentum. Elit duis
          tristique <br />
          sollicitudin nibh sit amet commodo nulla.
        </p>
        <div className="quote quote-end">
          <img src="./assets/icons/quote_1.png" alt="" />
        </div>

        <p className="review__author">Faucibus Vitae, Office Assistant </p>
        <div className="review__log">
          <img src="/assets/img/logo.png" alt="" />
        </div>
      </div>
    </div>
  </div>
);
