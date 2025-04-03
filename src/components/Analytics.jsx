import { Card } from "./Card";
import VectorIcon from "../assets/icons/Vector.svg";
import Chart from "../assets/icons/analytics-chart.svg";

export const Analytics = () => {
  return (
    <Card title="Analytics">
      <div
        style={{
          position: "absolute",
          right: 16,
          display: "flex",
          gap: "2em",
        }}
      >
        <section className="label-1-section">
          <div></div>
          <span>Label 1</span>
        </section>
        <section className="label-2-section">
          <div></div>
          <span>Label 2</span>
        </section>
        <section className="dropdown-section">
          <span>Weekly</span>
          <img src={VectorIcon} />
        </section>
      </div>
      <div className="chart-wrapper">
        <div className="x-axis-wrapper">
          {["20k", "15k", "10k", "5k", "1k", "0k"].map((label, index) => (
            <span key={index}>{label}</span>
          ))}
        </div>
        <div className="chart-yaxis-wrapper">
          <img src={Chart} alt="Analytics Chart" />

          <div className="y-axis-wrapper">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
              (label, index) => (
                <span key={index}>{label}</span>
              )
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};
