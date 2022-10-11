import "./Services.css";

export const Services = () => (
  <div className="services">
    <div className="info">
      <h1 className="info__title">
        Massa tempor nec feugiat nisl pretium fusce
      </h1>
      <p className="info__description">
        Pellentesque <strong>habitant</strong> morbi tristique senectus et netus
        et malesuada. <strong>Ipsum faucibus vitae</strong> aliquet nec
        ullamcorper sit amet risus nullam. Dictum varius duis at consectetur{" "}
        <strong>lorem donec </strong> massa sapien. Massa tempor nec feugiat
        nisl pretium fusce.
      </p>
      <p className="info__description">Elit scelerisque mauris pellentesque?</p>
    </div>

    <div class="services__list">
      <div class="services__item service">
        <div class="service__body">
          <i class="ico ico-circle"></i>
        </div>
        <div class="service__footer">
          <div class="service-link">
            <div class="service-link__text">View details</div>
            <i class="ico ico-sm ico-arrow service-link__icon"></i>
          </div>
        </div>
      </div>
      <div class="services__item service">
        <div class="service__body">
          <i class="ico ico-sissors"></i>
        </div>
        <div class="service__footer">
          <div class="service-link">
            <div class="service-link__text">View details</div>
            <i class="ico ico-sm ico-arrow service-link__icon"></i>
          </div>
        </div>
      </div>
      <div class="services__item service">
        <div class="service__body">
          <i class="ico ico-android"></i>
        </div>
        <div class="service__footer">
          <div class="service-link">
            <div class="service-link__text">View details</div>
            <i class="ico ico-sm ico-arrow service-link__icon"></i>
          </div>
        </div>
      </div>
      <div class="services__item service">
        <div class="service__body">
          <i class="ico ico-checkmark"></i>
        </div>
        <div class="service__footer">
          <div class="service-link">
            <div class="service-link__text">View details</div>
            <i class="ico ico-sm ico-arrow service-link__icon"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
);
