import './Block.css';

export const Block = ({ title, children }) => (
  <div className="container">
    <section className="block">
      {title ? (
        <header className="block__header">
            <h2 className="block__title">{title}</h2>
        </header>
      ) : null}

      <div className="block__body">{children}</div>
    </section>
  </div>
);