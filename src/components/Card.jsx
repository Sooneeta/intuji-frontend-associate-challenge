import ArrowRightIcon from "../assets/icons/arrow-right.svg";
import ArrowRightWhiteIcon from "../assets/icons/arrow-right-white.svg";
import "../styles/card.scss";
import { useState } from "react";

const Card = ({ title, children }) => {
  return (
    <div className="card-wrapper">
      <span>{title}</span>
      {children}
    </div>
  );
};

const OverviewCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="overview-card-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <div className="text-content">
          <figure className="icon-wrapper" style={{ margin: "0" }}>
            <img src={cardData?.icon} width={32} height={32} />
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
            border: "1px solid #0D163A",
            opacity: "20%",
            width: "20.28vw",
            margin: "1.5em auto",
          }}
        />

        <div className="value-content">
          <span className="amount">{cardData?.amount}</span>
          <img src={isHovered ? ArrowRightWhiteIcon : ArrowRightIcon} />
        </div>
      </Card>
    </div>
  );
};

export { Card, OverviewCard };
