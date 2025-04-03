import { Card } from "./Card";
import "../styles/savingplan.scss";

export const SavingPlan = ({ items }) => {
  return (
    <Card title="Saving Plan">
      <span
        style={{
          position: "absolute",
          color: "#4745A4",
          fontSize: "1rem",
          fontWeight: "500",
          right: 20,
        }}
      >
        See All
      </span>
      <hr
        style={{
          width: "100%",
          border: "1px solid #0D163A",
          opacity: "10%",
          margin: "1.5em auto",
        }}
      />
      <div className="saving-plan-items">
        {items?.map((item, index) => (
          <div className="saving-item" key={index}>
            <section className="header-section">
              <span className="header">{item.name}</span>
              <span className="target-date">Target:August 25 2022</span>
            </section>
            <section className="amount-section">
              <div>
                <span className="target-amount">{item.targetAmount}</span>
                <span className="saved-amount">{`/${item.savedAmount}`}</span>
              </div>
              <span
                style={{ color: item.progressColor }}
                className="progress-rate"
              >
                {item.progressRate}
              </span>
            </section>
            <section className="progress-bar-section">
              <div
                className="progress-bar"
                style={{
                  width: item.progressRate,
                  height: "100%",
                  backgroundColor: item.progressColor,
                }}
              ></div>
            </section>
          </div>
        ))}
      </div>
    </Card>
  );
};
