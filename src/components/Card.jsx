const Card = ({ title, children }) => {
  return (
    <div className="card-wrapper">
      <span>{title}</span>
      {children}
    </div>
  );
};

const OverviewCard = ({ children }) => {
  return <Card>{children}</Card>;
};

export { Card, OverviewCard };
