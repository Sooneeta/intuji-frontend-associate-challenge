import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import "../styles/card.scss";

const Card = ({ title, children }) => {
  return (
    <div className="card-wrapper">
      <span>{title}</span>
      {children}
    </div>
  );
};

const OverviewCard = ({ cardData }) => {
  return (
    <div className="overview-card-wrapper">
      <Card>
        <div className="text-content">
          <figure className="icon-wrapper">
            <img src={cardData?.icon} />
          </figure>
          <div className="title">
            <span>{cardData?.title}</span>
            <div className="description">
              <img src={cardData?.descriptionIcon} />
              <span>{cardData?.description}</span>
            </div>
          </div>
        </div>
        <hr
          style={{
            opacity: "20%",
            width: "20.38vw",
            border: "1px solid #0D163A",
          }}
        />
        <div className="value-content">
          <span className="amount">{cardData?.amount}</span>
          <img src={ArrowRightIcon} />
        </div>
      </Card>
    </div>
  );
};

export { Card, OverviewCard };
