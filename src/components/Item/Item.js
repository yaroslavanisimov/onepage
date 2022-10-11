import { useState } from "react";

export const Item = ({ number, title, description }) => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="item">
      <ul className="item__content">
        <li className="row__number">{number}</li>
        <li className="row__title">{title}</li>
        {visible ? <li className="row__description">{description}</li> : null}
      </ul>
      <div className="row__btn" onClick={() => setVisible(!visible)}></div>
    </div>
  );
};
